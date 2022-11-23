import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db";
 
const User = db.define('user',{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    username:{
        type: DataTypes.STRING
    },
    name:{
        type: DataTypes.STRING
    },
    isAdmin:{
        type: DataTypes.BOOLEAN
    }
},{
    freezeTableName:true,
    timestamps:false
});
 
(async () => {
    await db.sync();
})();
 
export default User;