import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:3333/'

export default props => {
  axios.get(URL).then(resp=>console.log(resp.data));

  return (
    <div>
      <h1>Dale meu rei</h1>
    </div>
  )
}