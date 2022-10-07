import { InferAttributes, InferCreationAttributes } from "sequelize";
import { DataType, Model, Sequelize, Table } from "sequelize-typescript";
import internal from "stream";

import sequelize from "../config/db";
// class User_Type extends Model<InferAttributes<User_Type>, InferCreationAttributes<User_Type>> {
//   declare user_id: number;
//   declare name: string;
//   declare gender:string;
//   declare father_name:string;
//   declare mother_name:string;
//   declare mobile:string;
//   declare email:string;
//   declare age:number;
//   declare dob:Date;
//   declare denomination:string;
//   declare division:string;
//   declare mother_tongue:string;
//   declare marital_status:string;
//   declare city:string;
//   declare state:string;
//   declare country:string;
//   declare citizenship:string;
//   declare height:string;
//   declare education:string;
//   declare employed_in:string;
//   declare occupation:string;
//   declare salary:string;
//   declare physical_status:string;
//   declare family_status:string;
//   declare family_type:string;
//   declare religious_value:string;
//   declare about_me:string;
//   declare profile_pic:string;
// }
export interface User_Type extends Model<InferAttributes<User_Type>, InferCreationAttributes<User_Type>> {
     user_id?: number;
     name: string;
     gender:string;
     father_name:string;
     mother_name:string;
     mobile:string;
     email:string;
     password:string;
     age:number;
     dob:Date;
     denomination:string;
     division:string;
     mother_tongue:string;
     marital_status:string;
     city:string;
     state:string;
     country:string;
     citizenship:string;
     height:string;
     education:string;
     employed_in:string;
     occupation:string;
     salary:string;
     physical_status:string;
     family_status:string;
     family_type:string;
     religious_value:string;
     about_me:string;
     profile_pic:string;
     JWT?:string;
     updatedAt?:Date
     createdAt?:Date
  }



const User_Table = sequelize.define<User_Type>("Users", {
    user_id: {
        primaryKey: true,
        type: DataType.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
    },
    gender: {
        type: DataType.STRING,
        allowNull: false,
    },
    father_name: {
        type: DataType.STRING,
        allowNull: false,
    },
    mother_name: {
        type: DataType.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataType.STRING,
        allowNull: false,
    },
    email: {
        type: DataType.STRING,
        allowNull: false,
    },
    password: {
        type: DataType.STRING,
        allowNull: false,
    },
    age: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    dob: {
        type: DataType.DATE,
        allowNull: false,
    },
    denomination: {
        type: DataType.STRING,
        allowNull: false,
    },
    division: {
        type: DataType.STRING,
        allowNull: false,
    },
    mother_tongue: {
        type: DataType.STRING,
        allowNull: false,
    },
    marital_status: {
        type: DataType.STRING,
        allowNull: false,
    },
    city: {
        type: DataType.STRING,
        allowNull: false,
    },
    state: {
        type: DataType.STRING,
        allowNull: false,
    },
    country: {
        type: DataType.STRING,
        allowNull: false,
    },
    citizenship: {
        type: DataType.STRING,
        allowNull: false,
    },
    height: {
        type: DataType.STRING,
        allowNull: false,
    },
    education: {
        type: DataType.STRING,
        allowNull: false,
    },
    employed_in: {
        type: DataType.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataType.STRING,
        allowNull: false,
    },
    salary: {
        type: DataType.STRING,
        allowNull: false,
    },
    physical_status: {
        type: DataType.STRING,
        allowNull: false,
    },
    family_status: {
        type: DataType.STRING,
        allowNull: false,
    },
    family_type: {
        type: DataType.STRING,
        allowNull: false,
    },
    religious_value: {
        type: DataType.STRING,
        allowNull: false,
    },
    about_me: {
        type: DataType.STRING,
        allowNull: false,
    },
    profile_pic: {
        type: DataType.STRING,
        allowNull: false,
    },
    JWT: {
        type: DataType.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataType.TIME,
        allowNull: true,
    },
    updatedAt: {
        type: DataType.TIME,
        allowNull: true,
    },
});
export default User_Table;
