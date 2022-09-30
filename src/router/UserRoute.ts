import express from 'express'
import { JWT } from 'JWT_utils';
import { UserController } from '../controllers/UserController'

const router = express.Router();


router.post('/save' , UserController.save_user)
router.get('/getprofile' , JWT.verify_token, UserController.get_profile)




export default router;

