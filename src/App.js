import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Karthik', age:31},
      {name:'Priya', age:26},
      {name:'Diya', age:3},
      {name:'Daya', age:.3}
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({
      persons:[
        {name:newName, age:31},
        {name:'Priya', age:26},
        {name:'Diya', age:3},
        {name:'Daya Karthik', age:.3}
      ]
    })
  };

  nameChangedHandler = (event)=>{
    this.setState({
      persons:[
        {name:'Karthik', age:31},
        {name:'Priya', age:26},
        {name:event.target.value, age:3},
        {name:'Daya Karthik', age:.3}
      ]
    })
  };


  render() {
    return (
        <div className='App'>
          <h1>Hi, I am react app, How are you doing</h1>
          <p>This is really working!!</p>
          <button onClick={this.switchNameHandler.bind(this, 'Karthik Ganesan2')}>Swicth Frame</button>
          <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}>My Hobbies : Coding</Person>
          <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}/>
          <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                click={this.switchNameHandler.bind(this, 'Karthik Ganesan')}
                changed={this.nameChangedHandler}/>
          <Person 
                name={this.state.persons[3].name} 
                age={this.state.persons[3].age}/>
        </div>
    );
  }
}

export default App;
