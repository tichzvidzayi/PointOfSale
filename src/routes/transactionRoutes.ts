import express from 'express';
import { createTransaction, getTransaction } from '../controllers/transactionController';

const router = express.Router();

router.post('/', createTransaction);
router.get('/:id', getTransaction);

export default router;
