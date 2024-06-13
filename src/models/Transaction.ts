import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface TransactionAttributes {
    id: number;
    products: { productId: number; quantity: number }[];
    totalAmount: number;
}

class Transaction extends Model<TransactionAttributes> implements TransactionAttributes {
    public id!: number;
    public products!: { productId: number; quantity: number }[];
    public totalAmount!: number;
}

Transaction.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        products: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        totalAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'transactions',
        modelName: 'Transaction',
    }
);

export default Transaction;
