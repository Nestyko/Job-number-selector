import React from 'react';

export default class Row extends React.Component{

	render(){
		
		return <div className="row" style={{textAlign:"center"}}>
		<div className="col-md-4 col-md-push-4 col-xs-4 col-xs-push-4" style={{textAlign:"center"}}>

		<a id={this.props.ID} className="list-group-item" onClick={this.props.clickHandler} >{this.props.RefNum}</a>

				</div>
				</div>
	}
}
