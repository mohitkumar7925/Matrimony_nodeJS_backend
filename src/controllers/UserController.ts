import express, { NextFunction, Router } from "express";
import { JWT } from "../JWT_utils";
import User_Table, { User_Type } from "../models/User_Table";
import { Model } from "sequelize";
import { Op } from "sequelize";
import path from "path";
// Myy changes  2222////
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
                password,
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
            let insert1 = await User_Table.create(
                {
                    name,
                    gender,
                    father_name,
                    mother_name,
                    mobile,
                    email,
                    password,
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
                    raw: true,
                }
            );

            console.log("this is the log ==>> ", insert1);

            let token = await JWT.create_token(insert1.user_id || false);

            await User_Table.update(
                {
                    JWT: token as string,
                },
                {
                    where: {
                        user_id: insert1.user_id,
                    },
                }
            );

            res.send({
                token: token,
                message: "Successfully registered",
            }).status(200);
        } catch (error) {
            console.log("error ", error);
            res.send({
                message: error,
            }).status(403);
        }
    },

    get_profile: async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {

           
          
            console.log(req.body);

            var user_data = await User_Table.findOne({
                where: {
                    user_id: req.body.user_id,
                },
            });
            res.send({
                data: user_data,
            }).status(200);
        } catch (error) {
            console.log("error ", error);
            res.send({
                message: error,
            }).status(403);
        }
    },

    update_profile: async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            let user = (await User_Table.findOne({
                where: {
                    user_id: req.body.user_id,
                },
            })) as User_Type;

            let {
                name,
                gender,
                father_name,
                mother_name,
                mobile,
                email,
                password,
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
                JWT
            } = user;

            let isupdated = await User_Table.update(
                {
                    name: req.body.name || name,
                    gender: req.body.gender || gender,
                    father_name: req.body.father_name || father_name,
                    mother_name: req.body.mother_name || mother_name,
                    mobile: req.body.mobile || mobile,
                    email: req.body.email || email,
                    password: req.body.password || password,
                    age: req.body.age || age,
                    dob: req.body.dob || dob,
                    denomination: req.body.denomination || denomination,
                    division: req.body.division || division,
                    mother_tongue: req.body.mother_tongue || mother_tongue,
                    marital_status: req.body.marital_status || marital_status,
                    city: req.body.city || city,
                    state: req.body.state || state,
                    country: req.body.country || country,
                    citizenship: req.body.citizenship || citizenship,
                    height: req.body.height || height,
                    education: req.body.education || education,
                    employed_in: req.body.employed_in || employed_in,
                    occupation: req.body.occupation || occupation,
                    salary: req.body.salary || salary,
                    physical_status: req.body.physical_status || physical_status,
                    family_status: req.body.family_status || family_status,
                    family_type: req.body.family_type || family_type,
                    religious_value: req.body.religious_value || religious_value,
                    about_me: req.body.about_me || about_me,
                    profile_pic: req.body.profile_pic || profile_pic,
                    JWT: req.body.JWT || JWT,
                },
                {
                    where: {
                        user_id: req.body.user_id,
                    },
                },
            );

            console.log(isupdated);
          
            if(isupdated[0] > 0){
                let updated_user = await User_Table.findOne({where:{user_id:req.body.user_id}})
                res.send({
                    data: updated_user,
                }).status(200);
            }
            else{
                res.send({
                    data: 'Something went wrong',
                }).status(403);

            }


           
        } catch (error) {
            res.send({
                message: error,
            }).status(403);
        }
    },

    get_all_user: async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            console.log(req.body);

            var users_data = await User_Table.findAll({
                where: {
                    user_id:{
                        [Op.not]:req.body.user_id
                    }
                },
                attributes:{
                    exclude:['password']
                }
            });

            console.log(users_data);
            



            res.send({
                data: users_data,
            }).status(200);
        } catch (error) {
            console.log("error ", error);
            res.send({
                message: error,
            }).status(403);
        }
    },
    upload_image:async (req: express.Request, res: express.Response, next: NextFunction) => {
    
    
    
    
    }


};
