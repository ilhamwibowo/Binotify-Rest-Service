import User from "../models/user";

const getUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export default getUsers;