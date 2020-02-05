import React from 'react';
// import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

const myelement = <Car brand="Ford" />;

export default myelement;


// Passing a props as argument. A tutorial from W3 but doesn't work. This could be a "create-react-app" issue or a new version 
// of React may not apply. (Have to get verified).