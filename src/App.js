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
    ],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

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
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
        })}
        </div>
      );
    }

    return (
        <div className='App'>
          <h1>Hi, I am react app, How are you doing</h1>
          <p>This is really working!!</p>
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
