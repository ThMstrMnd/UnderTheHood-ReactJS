import React from 'react';
// import ReactDOM from 'react-dom';

class Me extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			brand: 'Ford',
			model: 'Mustang',
			color: 'red',
			year: 1964
		};
	}

	render() {
		return (
			<div>
				<p>
					I am riding a {this.state.color} {this.state.year} {this.state.brand}{' '}
					{this.state.model}.
				</p>
			</div>
		);
	}
}

export default Me;

