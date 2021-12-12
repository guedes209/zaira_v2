import React from 'react';
import './TableProdutos.css';

export default props => {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(produto => (
            <tr key={produto.id}>
                <td>{produto.nome}</td>
                <td>R${produto.valor_unitario}</td>
                <td>{produto.quantidade}</td>
            </tr>
        ))
    }
    
    return(
        <div>
            <table id="tabelaprod" className="table table-striped">
                <thead>
                    <tr>
                        <th className="col">Nome</th>
                        <th className="col">Valor Unitário</th>
                        <th className="col">Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}