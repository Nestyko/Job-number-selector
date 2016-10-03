import React from 'react';
import Rowcontainer from './rowcontainer.jsx';

export default class Joblist extends React.Component{
	constructor(){
		super();

	}

	render(){
		return (<div className="list-group">
			{this.props.listArray.map(function(value){
				return <Rowcontainer key={value[0]} ID={value[0]} RefNum={value[1]} clickHandler={this.props.handleRowClick} />
				}, this)}
		
				</div>)

	}
}
