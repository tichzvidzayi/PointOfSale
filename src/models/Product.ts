import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;
    public quantity!: number;
}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'products',
        modelName: 'Product',
    }
);

export default Product;
