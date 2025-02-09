import {User} from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const signup = async(req, res)=>{
    const {name, email, password} = req.body;
    try {
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json("User already exist")
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashPassword});
        res.status(201).json({user, token: await user.generateToken()});
    } catch (error) {
        console.log(error)
    }
}

export const login = async(req, res)=>{
    const {email, password} = req.body;
    try {
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json("User does not exist");
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if(!isMatch){
            return res.status(400).json("Invalid credentials.");
        }
        res.status(200).json({userExist, token: await userExist.generateToken()});
    } catch (error) {
        console.log(error)
    }
}