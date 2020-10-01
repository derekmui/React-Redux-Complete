import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';

class App extends Component{
  state = {
    ninjas : [
      { name: 'Melissa', age: 30, belt: 'black', id: 1 },
      { name: 'Rain', age: 50, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }
  
  componentDidMount(){
    console.log('Component Mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render(){
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome :)</p>      
        <Ninjas deleteNinja = {this.deleteNinja} allNinjas = {this.state.ninjas} /> 
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    )
  }
}

export default App;
