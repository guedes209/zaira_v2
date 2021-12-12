import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/sql";

export interface PedidosCompra extends Model{
    id_pedido: number;
    nomeCliente: string;
    numeroPedido: number;
    email: string;
    produtos: number;
    status: string;
}

export const PedidosCompra = sequelize.define<PedidosCompra>("PedidosCompra", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nomeCliente: DataTypes.STRING,
    numeroPedido: DataTypes.INTEGER,
    email: DataTypes.STRING,
    produtos: DataTypes.INTEGER,
    status: DataTypes.STRING
}, {
    tableName: 'pedidos_compra',
    timestamps: false
});