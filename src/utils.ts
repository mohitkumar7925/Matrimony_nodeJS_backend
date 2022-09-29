import * as jwt from 'jsonwebtoken'

export const JWT = {

    create_token: async (user_id:Number) =>{

        console.log('user_id == ' , user_id);
        let token =  jwt.sign({user_id} , 'jesus');
        console.log(token);
        return token;
    }

}

