import { DataTypes, Sequelize } from "sequelize";

export const UserModel  = (sequelize: Sequelize) => {
    return sequelize.define('user', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    });
}