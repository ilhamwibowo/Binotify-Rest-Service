import Song from "../models/song";

export const getPremiumSongs = async(req, res) => {
    try {
        const songs = await Song.findAll();
        res.status(201).json(songs);
    } catch (error) {
        res.status(404).json({msg:error});
    }
}

export const createSong = async(req, res) => {
    
    const { judul, penyanyi_id, audio_path } = req.body;

    try {
        const result = await Song.create({
            judul: judul,
            penyanyi_id: penyanyi_id,
            audio_path: audio_path
        });
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(404).json({msg:error});
    }
}

export const updateSong = async(req, res) => {

    const { song_id, judul, penyanyi_id, audio_path } = req.body;
    const song_exist = await Song.findOne({where: {song_id: song_id}});

    if (song_exist) {
        try {
            const result = await Song.update({ 
                judul: judul, 
                penyanyi_id: penyanyi_id, 
                audio_path:audio_path
            },{
                where: {song_id: song_id}
            });
            res.status(200).json({msg: "Update successful", status:201});
        } catch (error) {
            res.status(404).json({msg:error, status:404});
        }
    } else {
        return res.status(204).json({msg: "Song not found"});
    }
}

export const deleteSong = async(req, res) => {
    const { song_id } = req.body;
    const song_exist = await Song.findOne({where: {song_id: song_id}});

    if (song_exist) {
        try {
            const result = await Song.destroy({
                where: {song_id: song_id}
            });
            res.status(200).json({msg: "Delete successful", status:201});
        } catch (error) {
            res.status(404).json({msg: error});
        }
    }
    else {
        return res.status(204).json({msg: "Song not found"});
    }

}