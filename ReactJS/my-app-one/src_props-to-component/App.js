import React from 'react';
import './App.css';

class Cat extends React.Component {
  render()  {
    return <p>Hello this is my cat's name: {this.props.catname}</p>;
   
  }
}

class Name extends React.Component {
  render() {
    return <div><Cat catname="Euro" /></div>;
    
  }
}


export default Name;
