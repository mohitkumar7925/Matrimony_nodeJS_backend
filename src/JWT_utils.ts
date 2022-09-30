import { NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'

export const JWT = {

    create_token: async (user_id:number | Boolean) =>{

        if(!user_id){
            return new Error('user id is undefined : JWT')
        }
        console.log('user_id == ' , user_id);
        let token =  jwt.sign({user_id} , 'password');
        console.log(token);
        return token;
    },
    verify_token: (req:Request , res:Response , next:NextFunction) => {
      console.log(req.headers);
      
      console.log(req.headers.get('Authorization'));
       next();
      
    //     let payload =  jwt.verify(token,'password')
    //   console.log('payload ==>>>' , payload);

    }

}

