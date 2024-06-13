import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import  User from '../models/User';

const saltRounds = 10;
const secretKey = process.env.JWT_SECRET || '';

export default class AuthService {
    static async signUp(email: string, password: string): Promise<void> {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await User.create({id: 0, email, password: hashedPassword });
    }

    static async logIn(email: string, password: string): Promise<string> {
        const user = await User.findOne({ where: { email } });
        if (!user) throw new Error('User not found');
        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error('Incorrect password');
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
        return token;
    }
}
