import React from 'react';
import logo from './logo.svg';
import './App.css';

import  Posts from  "./componets/Posts.js"
import Postform from "./componets/Postform";


function App() {
  return (
    <div className="App">
        <Postform/>
     <Posts/>

    </div>
  );
}

export default App;
