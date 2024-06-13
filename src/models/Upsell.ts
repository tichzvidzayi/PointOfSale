import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface UpsellAttributes {
    id: number;
    productId: number;
    upsellId: number;
}

class Upsell extends Model<UpsellAttributes> implements UpsellAttributes {
    public id!: number;
    public productId!: number;
    public upsellId!: number;
}

Upsell.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        upsellId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'upsells',
        modelName: 'Upsell',
    }
);

export default Upsell;
