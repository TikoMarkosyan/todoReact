import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (<ol key={this.props.data.length}>
      {this.props.data.map((el,index) => <ListItem  data={el} ind={index}/>)}
    </ol>);
  }
}
