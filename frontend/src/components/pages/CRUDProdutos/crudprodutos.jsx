import React, { Component } from 'react';
import Pageheader from '../../templates/pageHeader/Pageheader';
import Input from '../../templates/input/Input';
import Grid from '../../templates/grid/Grid';
import Button from '../../templates/button/Button';
import axios from 'axios';
import TableProdutos from '../../templates/tableProdutos/TableProdutos';
import './crudprodutos.css';

const URL = 'http://localhost:3333/'
export default class CRUDProdutos extends Component{
  constructor(props){
    super(props);
    this.state = { nome: '', quantidade: '', valor_unitario: '', list: [] };
    this.carregaDados = this.carregaDados.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeValor = this.changeValor.bind(this);
    this.changeQtd = this.changeQtd.bind(this);
    this.adicionaProduto = this.adicionaProduto.bind(this);
    
    this.carregaDados();
  }

  async carregaDados(){
    const { data: produtos } = await axios.get(URL+'crudprodutos');
    this.setState({
      nome: '', 
      valor_unitario: '', 
      quantidade: '',
      list : produtos
    })
  }

  changeName(event){
    this.setState({ nome: event.target.value });
  }

  changeValor(event){
    this.setState({ valor_unitario: event.target.value });
  }

  changeQtd(event){
    this.setState({ quantidade: event.target.value });
  }

  adicionaProduto(){
    console.log(this.state);
    axios.post(URL+'cadastroProduto', null, { params: {
      nome: this.state.nome,
      valor_unitario: this.state.valor_unitario,
      quantidade: this.state.quantidade
    }}).then(resp => this.carregaDados());
  }

  render(){
    return (
      <div className='container crud-produtos'>
        <Pageheader name="Produtos" small="Manutenção"></Pageheader>
        <Grid>
          <Input value={this.state.nome} onChange={this.changeName} type="text" col="col-4" label="Nome" placeholder="Digite o nome do produto"></Input>
          <Input value={this.state.valor_unitario} onChange={this.changeValor} type="number" col="col-4" label="Valor Unitário" placeholder="Digite o valor do produto"></Input>
          <Input value={this.state.quantidade} onChange={this.changeQtd} type="number" col="col-4" label="Quantidade" placeholder="Digite a quantidade do produto"></Input>
          <Button col="col-3" classes="btn btn-primary ml-auto" texto="Adicionar" onClick={this.adicionaProduto}></Button>
        </Grid>
        <TableProdutos list={this.state.list}></TableProdutos>
      </div>
    )
  }
}