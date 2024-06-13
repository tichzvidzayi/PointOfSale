import { Request, Response } from 'express';
import TransactionService from '../services/transactionService';

export const createTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = req.get("products");
        const totalAmount = req.get("totalAmount");
        await TransactionService.createTransaction(products, totalAmount);
        res.status(201).json({ message: 'Transaction created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create transaction' });
    }
};

export const getTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactionId = parseInt(req.params.id);
        const transaction = await TransactionService.getTransaction(transactionId);
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Failed to get transaction' });
    }
};
