import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/sql";

export interface UserInstance extends Model{
    id: number;
    nome: string;
    idade: number;
}

export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: DataTypes.STRING,
    matricula: DataTypes.STRING
}, {
    tableName: 'users',
    timestamps: false
});