import express from 'express'
import { JWT } from '../JWT_utils';
import { UserController } from '../controllers/UserController'
import multer, { diskStorage } from 'multer'
import path from 'path';

const storage = diskStorage({
    destination(req, file, callback) {
        callback(null , 'public/profile_pic')
    },
    filename(req, file, callback) {
        callback(null, new Date().toDateString() + '-' + file.originalname)
    },
})


const uploader = multer({
    storage:storage,
})
const router = express.Router();
// console.log(path.join( path.dirname(require.main?.path as string) , './public/profile_pic'))

router.post('/save' , UserController.save_user)
router.get('/getprofile',JWT.verify_token , UserController.get_profile)
router.post('/update' , JWT.verify_token, UserController.update_profile)
router.get('/all_user' , JWT.verify_token , UserController.get_all_user)
router.post('/upload_image' , uploader.single('image') , (req , res, next)=>{
    try {
        console.log(req.file);
        
        
        console.log(req.body);

        
        
        res.send({message:'done'}).status(200)
        
    } catch (error) {

        res.send({message:error}).status(403)
    }
})

export default router;

