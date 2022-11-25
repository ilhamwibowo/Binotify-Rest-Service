import { Sequelize, DataTypes } from "sequelize";
import db from "../config/db"

const Song = db.define('song', {
    song_id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    judul:{
        type: DataTypes.STRING
    },
    penyanyi_id:{
        type: DataTypes.INTEGER
    },
    audio_path:{
        type: DataTypes.STRING
    },
}, {
    freezeTableName:true,
    timestamps:false
});

(async () => {
    await db.sync();
})();

export default Song;