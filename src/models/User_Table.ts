import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db";


const User_Table = sequelize.define('Users', {
    user_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    father_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mother_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    denomination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    division: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mother_tongue: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marital_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    citizenship: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.STRING,
        allowNull: false
    },
    education: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employed_in: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    physical_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    family_status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    family_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    religious_value: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about_me: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile_pic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.TIME,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.TIME,
        allowNull: true
    }
})
export default User_Table
