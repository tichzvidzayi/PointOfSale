import { Request, Response } from 'express';
import AuthService from '../services/authService';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        await AuthService.signUp(email, password);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to sign up user' });
    }
};

export const logIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const token = await AuthService.logIn(email, password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};