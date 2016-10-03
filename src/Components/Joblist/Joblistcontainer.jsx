import React from 'react';
import Joblist from './Joblist.jsx';

export default class Joblistcontainer extends React.Component{
	constructor(props){
		super(props);

	}

	render(){
		return <Joblist listArray={this.props.listArray} handleRowClick={this.props.handleRowClick}/>
	}
}
