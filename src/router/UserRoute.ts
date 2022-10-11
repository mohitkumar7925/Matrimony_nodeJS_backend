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
        callback(null, new Date().toLocaleTimeString() + '-' + file.originalname)
    },
})

console.log(process.env.BASE_URL);
const uploader = multer({
    storage:storage,
})
const router = express.Router();
// console.log(path.join( path.dirname(require.main?.path as string) , './public/profile_pic'))

router.post('/save' , UserController.save_user)
router.get('/getprofile',JWT.verify_token , UserController.get_profile)
router.post('/update' , JWT.verify_token, UserController.update_profile)
router.get('/all_user' , JWT.verify_token , UserController.get_all_user)
// router.use('/upload_image' , (req, res, next)=>{
//     console.log(req.body)
//     next()
// })
router.post('/upload_image',  uploader.single('image') , JWT.verify_token , UserController.upload_image)

export default router;

