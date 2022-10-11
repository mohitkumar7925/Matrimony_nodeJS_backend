import express, { NextFunction, Router } from "express";
import { JWT } from "../JWT_utils";
import User_Table, { User_Type } from "../models/User_Table";
import { Model } from "sequelize";
import { Op } from "sequelize";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

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
                FCM
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
                    FCM
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

            res.status(200).send({
                token: token,
                message: "Successfully registered",
            });
        } catch (error) {
            console.log("error ", error);
            res.status(403).send({
                message: error,
            });
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
            res.status(200).send({
                data: user_data,
            });
        } catch (error) {
            console.log("error ", error);
            res.status(403).send({
                message: error,
            });
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
                JWT,
                FCM
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
                    FCM: req.body.FCM || FCM,
                },
                {
                    where: {
                        user_id: req.body.user_id,
                    },
                }
            );

            console.log(isupdated);

            if (isupdated[0] > 0) {
                let updated_user = await User_Table.findOne({ where: { user_id: req.body.user_id } });
                res.status(200).send({
                    data: updated_user,
                });
            } else {
                res.status(403).send({
                    data: "Something went wrong",
                });
            }
        } catch (error) {
            res.status(403).send({
                message: error,
            });
        }
    },

    get_all_user: async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            console.log(req.body);

            var users_data = await User_Table.findAll({
                where: {
                    user_id: {
                        [Op.not]: req.body.user_id,
                    },
                },
                attributes: {
                    exclude: ["password"],
                },
            });

            console.log(users_data);

            res.status(200).send({
                data: users_data,
            });
        } catch (error) {
            console.log("error ", error);
            res.status(403).send({
                message: error,
            });
        }
    },
    upload_image: async (req: express.Request, res: express.Response, next: NextFunction) => {
        try {
            console.log(req.file);
            
            let path = process.env.BASE_URL + "profile_pic/" + req.file?.filename;
            console.log(path);
            console.log('req.body: ' ,  req.body);
            
            let is_updated = await User_Table.update(
                {
                    profile_pic: req.file?.filename,
                },
                {
                    where: {
                        user_id: req.body.user_id,
                    },
                }
            );
            
            

            if (is_updated[0] > 0) {
                res.status(200).send({ message: "Successfully uploaded", url: path });
            } else {
                res.status(403).send({ message: "Something Went Wrong" });
            }
        } catch (error) {
            res.status(403).send({ message: error });
        }
    },
};
