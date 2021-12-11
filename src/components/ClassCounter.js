import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
          count: 0
        }
      }
      handleIncreaseCount = (e) =>{
        e.preventDefault();
        this.setState({count: this.state.count + 5})
      }
      handleDecreaseCount= (e) =>{
      e.preventDefault();
      this.setState({count: this.state.count - 5})
      }
      render(){
        return (
          <div>
          <h1>Counter: {this.state.count}</h1>
          <hr/>
          <button onClick={this.handleIncreaseCount}>Increase</button>
          <button onClick={this.handleDecreaseCount}>Decrease</button>
          </div>
        );
      }
}
