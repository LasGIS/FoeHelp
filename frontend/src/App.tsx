/*
 * Copyright (c) 2020. Prototype
 */

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Space } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Space align='start'>
        <Button title='ttt' name='Button1'>Button1</Button>
        <Button title='ttt' name='Button2'>Button2</Button>
        <Button title='ttt' name='Button3'>Button3</Button>
        <Button title='ttt' name='Button4'>Button4</Button>
      </Space>
    </div>
  );
}

export default App;
