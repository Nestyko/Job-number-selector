import React from 'react';
import Row from './Row.jsx';

export default class Rowcontainer extends React.Component{
	constructor(){
		super();

	}

	render(){
		return <Row ID={this.props.ID} clickHandler={this.props.clickHandler} RefNum={this.props.RefNum} />

	}
}
