import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.mjs';
import httpErrors from 'http-errors';
import UserProfile from '../models/userProfile.mjs';
import * as Helpers from "../helpers/validators.mjs"

const { JWT_SECRET_KEY } = process.env;
const INVALID_CRED = 'Invalid Email or Password';

export const create = async (req, res) => {

    const { username, password, email, phoneNo, firstname, lastname } = req.body;

    if (!Helpers.isValidPhoneNo(phoneNo)) {
        return res.status(400).json({ message: 'Please enter a valid phone number.' });
    }

    if (!Helpers.isValidEmail(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address.' });
    }

    const hashedPassword = await bcrypt.hash(password || '', 10);

    const user = await User.create({
        username,
        password: hashedPassword,
        email: email.trim().toLowerCase(),
        phoneNo,
    });

    await UserProfile.create({
        firstname:firstname,
        lastname:lastname,
        userId: user.id,
    });

    const response = await User.findOne({
        where: { id: user.id },
        include: [{ model: UserProfile }],
    });

    const token = jwt.sign(
        {
            sub: user.id,
            userName: user.username,
        },
        JWT_SECRET_KEY
    );

    res.status(201).json({ token, user: response });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!Helpers.isValidEmail(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address.' });
    }
    const user = await User.findOne({ attributes: ['id', 'email', 'password', 'username'], where: { email: email }, include: [{ model: UserProfile }] }
    );
    if(!user){
        throw new httpErrors.BadRequest(INVALID_CRED);
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new httpErrors.BadRequest(INVALID_CRED);
    const token = jwt.sign(
        {
            sub: user.id,
            userName: user.username,
        },
        JWT_SECRET_KEY
    );

    res.status(200).json({ token,   user: { ...user, password: undefined },});
}