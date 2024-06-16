import { signUp, logIn } from './authController';
import User from '../models/User';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

jest.mock('../models/User');
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('Auth Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should sign up a new user', async () => {
        const req = {
            body: {
                email: 'test@example.com',
                password: 'password123'
            }
        } as unknown as Request;

        const res = {
            json: jest.fn()
        } as unknown as Response;

        (bcrypt.hash as jest.Mock).mockResolvedValue('hashedpassword');
        (User.create as jest.Mock).mockResolvedValue({
            id: 1,
            email: 'test@example.com',
            password: 'hashedpassword'
        });

        await signUp(req, res);

        expect(User.create).toHaveBeenCalledWith({
            email: 'test@example.com',
            password: 'hashedpassword'
        });
        expect(res.json).toHaveBeenCalledWith({
            id: 1,
            email: 'test@example.com',
            password: 'hashedpassword'
        });
    });

    it('should log in a user', async () => {
        const req = {
            body: {
                email: 'test@example.com',
                password: 'password123'
            }
        } as unknown as Request;

        const res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis()
        } as unknown as Response;

        (User.findOne as jest.Mock).mockResolvedValue({
            id: 1,
            email: 'test@example.com',
            password: 'hashedpassword'
        });
        (bcrypt.compare as jest.Mock).mockResolvedValue(true);
        (jwt.sign as jest.Mock).mockReturnValue('token');

        await logIn(req, res);

        expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'test@example.com' } });
        expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedpassword');
        expect(jwt.sign).toHaveBeenCalledWith({ id: 1 }, process.env.JWT_SECRET);
        expect(res.json).toHaveBeenCalledWith({ token: 'token' });
    });
});
