import express, { NextFunction } from "express";
import * as jwt from "jsonwebtoken";
interface JwtPayload {
    user_id: string;
}

export const JWT = {
    create_token: async (user_id: number | Boolean) => {
        if (!user_id) {
            return new Error("user id is undefined : JWT");
        }
        console.log("user_id == ", user_id);
        let token = jwt.sign({ user_id }, "password");
        console.log(token);
        return token;
    },
    verify_token: (req: express.Request, res: express.Response, next: NextFunction) => {
        // console.log(req.headers);
        if (req.headers.authorization) {
            try {
                let data = jwt.verify(req.headers.authorization, "password") as JwtPayload;
                req.body.user_id = data.user_id;
                next();
            } catch (error) {
                console.log(error);

                res.send({
                    message: 'Error while authenticating',
                }).status(403);
            }
        } else {
            res.send({
                message: "Not authorised",
            }).status(403);
        }

        //     let payload =  jwt.verify(token,'password')
        //   console.log('payload ==>>>' , payload);
    },
};
