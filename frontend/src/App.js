import React from 'react';
import axios from 'axios';
import Nav from './components/nav/nav';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const URL = 'http://localhost:3333/'

export default props => {
  axios.get(URL).then(resp=>console.log(resp.data));
  
  return (
    <div>
      <Nav></Nav>
    </div>
  )
}