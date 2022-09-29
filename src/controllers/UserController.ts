import express, { NextFunction, Router } from "express";
import { JWT } from "../utils";
import User_Table from "../models/User_Table";
import { Model } from "sequelize";

export var UserController = {
    save_user: async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            let {
                name,
                gender,
                father_name,
                mother_name,
                mobile,
                email,
                age,
                dob,
                denomination,
                division,
                mother_tongue,
                marital_status,
                city,
                state,
                country,
                citizenship,
                height,
                education,
                employed_in,
                occupation,
                salary,
                physical_status,
                family_status,
                family_type,
                religious_value,
                about_me,
                profile_pic,
            } = req.body;
            let insert1 = await User_Table.create({
                    name,
                    gender,
                    father_name,
                    mother_name,
                    mobile,
                    email,
                    age,
                    dob,
                    denomination,
                    division,
                    mother_tongue,
                    marital_status,
                    city,
                    state,
                    country,
                    citizenship,
                    height,
                    education,
                    employed_in,
                    occupation,
                    salary,
                    physical_status,
                    family_status,
                    family_type,
                    religious_value,
                    about_me,
                    profile_pic,
                },
                {
                    raw:true
                }
            );

            console.log("this is the log ==>> ", insert1);
            console.log("user id  ==>> ", insert1.user_id);
                
            res.send("done");



        } catch (error) {

            console.log('error ',error);
            res.send(error)


        }
    },
};
