import Song from "../models/song";

export const getSongs = async(req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs)
    } catch (error) {
        console.log(error);
    }
}