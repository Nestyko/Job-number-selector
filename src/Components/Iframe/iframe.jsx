import React from 'react';

export default class Iframe extends React.Component{
	constructor(){
		super();

		this.checkIfSubmitted = this.checkIfSubmitted.bind(this);

	}

	checkIfSubmitted(){

	}
	render(){

		return <iframe style={{width:"100%"}} height="500px" frameBorder="0" src={this.props.iframeSrc} onLoad={this.checkIfSubmitted} ></iframe>
		
	}
}
