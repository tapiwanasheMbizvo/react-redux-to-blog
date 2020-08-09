import React from 'react';

import './App.css';

import  {Provider} from 'react-redux';
import  Posts from  "./componets/Posts.js"
import Postform from "./componets/Postform";

import  store from "./Store.js"

class  App extends React.Component{
 render(){
     return (
         <Provider store ={store}>
             <div className="App">
                 <Postform/>
                 <Posts/>

             </div>
         </Provider>
     );

 }
}

export default App;
