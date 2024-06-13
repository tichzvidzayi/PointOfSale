import Transaction  from '../models/Transaction';

export default class TransactionService {
    static async createTransaction(products: string, totalAmount: string): Promise<void> {
        await Transaction.create({id: 0, products, totalAmount });
    }

    static async getTransaction(transactionId: number): Promise<Transaction | null> {
        return await Transaction.findByPk(transactionId);
    }
}
