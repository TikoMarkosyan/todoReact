import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
     super(props);
     this.title = props.title;
   }

  render(){
    return <h1>{this.title}</h1>
  }
}
