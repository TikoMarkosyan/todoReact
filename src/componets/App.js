import React, { Component } from 'react';
import Header from './Header';
import Add from './Add';
import List from './List';
export default class App extends Component {
  constructor(props){
    super(props);
  }
  state = {
      arr: [],
    };
  add = (e) =>{
    e.preventDefault();
    this.setState({
    arr: this.state.arr.concat([e.target.value])
    })

  }
  render(){
  return ( <div className="App">
        <div>
            <Header title="TodoList"/>
        </div>
        <div>
            <Add add={this.add} state={this.state.arr}/>
        </div>
        <div>
          <List data={this.state.arr}/>
        </div>
    </div>
  );
  }
}
