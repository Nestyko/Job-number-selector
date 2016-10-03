import React from 'react';

export default class Button extends React.Component{
	constructor(){
		super();


	}


	render(){

		return <button onClick={this.props.clickHandler} className="btn btn-primary" href="#inputandlist" data-toggle="collapse"><i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
		
	}
}
