import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
    id: number;
    email: string;
    password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public email!: string;
    public password!: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
        modelName: 'User',
    }
);

export default User;
