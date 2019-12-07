import React, { Component } from 'react';


export default class ListItem extends Component {
  constructor(props) {
     super(props);
   }
   state ={
     important: false,
     done:false,
   }
   important = () => {
     this.setState({ important: !this.state.important});

   }
   done = () => {
      this.setState({ done: !this.state.done});
   }

  render(){
    const style = this.state.important ? {color:'red'} : {color:'black'};
    const styledone = this.state.done ? {textDecorationLine:'line-through'} : {textDecorationLine:'none'};
    return (
      <li key={this.props.ind}>
          <div>
            <p style={Object.assign(style, styledone)}>{this.props.data}</p>
            <button onClick={this.important} id={this.props.ind}>Important</button>
            <button onClick={this.done}>Done</button>
          </div>
      </li>);
  }
}
