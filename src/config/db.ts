import { Sequelize } from "sequelize-typescript";




// Option 3: Passing parameters separately (other dialects)
const sequelize:Sequelize = new Sequelize('my_project', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

export var connect = async () =>{

    
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {

        console.error('Unable to connect to the database:', error);
        return false;
    }
};

export default sequelize;