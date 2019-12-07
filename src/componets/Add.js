import React, { Component, Fragment } from 'react';
export default class Add extends Component {
    constructor(props){
      super(props);
    }
    state = {
      value: "",
    }

    change = (e) => {
      this.setState({ value: e.target.value });
    }
    render(){
    return(
      <form>
        <div>
          <input name="add" onChange={this.change}/>
          <button onClick={this.props.add} value={this.state.value}>Add</button>
        </div>
        <div>
          <input name="Search"/>
        </div>
      </form>
  )
}
}
