import React from 'react';
import Rowcontainer from './rowcontainer.jsx';

export default class Joblist extends React.Component{
	constructor(){
		super();

	}

	render(){
		var rowNodes = null;
		if(this.props.listArray && this.props.listArray.length < 1){
			rowNodes = (
				<Rowcontainer RefNum={"No records to display"} />
			)
		}else{
			rowNodes = this.props.listArray.map(function(value){
				return <Rowcontainer key={value[0]} ID={value[0]} RefNum={value[1]} clickHandler={this.props.handleRowClick} />
				}, this);
		}
		return (<div className="list-group">
			{rowNodes}
				</div>)

	}
}
