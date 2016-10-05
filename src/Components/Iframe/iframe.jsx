import React from 'react';

export default class Iframe extends React.Component{
	constructor(){
		super();

		this.checkIfSubmitted = this.checkIfSubmitted.bind(this);

	}

	checkIfSubmitted(){
		console.log('iframe loaded');
		$('#iframeLoader').hide();
	}
	render(){

		return <iframe style={{width:"100%", "min-height": "500px"}} height="100%" frameBorder="0" src={this.props.iframeSrc} onLoad={this.checkIfSubmitted} ></iframe>
		
	}
}
