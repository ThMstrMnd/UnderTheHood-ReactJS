import React from 'react';
// import ReactDOM from 'react-dom';

class Me extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeBrand = () => {
    this.setState({brand: "Toyota"});
    this.setState({model: "86"})
  }

  render () {
    return (
      <div>
        <p>I am riding a {this.state.color} {this.state.year} {this.state.brand} {this.state.model}.</p> 
        <button type="button" onClick={this.changeBrand}>Change Brand</button>       
      
      </div>
    )
  }
}

export default Me;


// Passing a props as argument. A tutorial from W3 but doesn't work. This could be a "create-react-app" issue or a new version 
// of React may not apply. (Have to get verified).