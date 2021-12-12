import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/sql";

export interface ProdutosInstance extends Model{
    id: number;
    nome: string;
    valor_unitario: number;
    quantidade: number;
}

export const Produtos = sequelize.define<ProdutosInstance>("Produtos", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: DataTypes.STRING,
    valor_unitario: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER
}, {
    tableName: 'produtos',
    timestamps: false
});