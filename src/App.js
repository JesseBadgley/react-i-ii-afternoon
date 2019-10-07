import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import DatDisp from './datDisp.js';
import Butt from './butt.js';

class App extends Component{
  constructor(){
    super();

    this.state= {
      index: 0
    }
    this.subtract = this.subtract.bind(this)
    this.add = this.add.bind(this)
  }
  subtract(){
    this.setState({index: this.state.index -1})
    console.log(this.state.index)
  }
  add(){
    this.setState({index: this.state.index +1})
    console.log(this.state.index)
  }
  

render(){
  return(
    <div class= "main">
      <nav class= "navBar"> &nbsp; &nbsp; &nbsp; &nbsp; Home </nav>

      <div class= "black">
        <div class= "white"> 
          < DatDisp data={this.state}/></div>
          < Butt data={this.state} add={this.add} subtract={this.subtract}/>
        </div>
     
    </div>
);
}


}

export default App;
