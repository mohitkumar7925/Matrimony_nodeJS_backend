import express from 'express'
import { UserController } from '../controllers/UserController'

const router = express.Router();


router.post('/save' , UserController.save_user)





module.exports = router;

