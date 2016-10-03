import React from 'react';

export default class Input extends React.Component{

	render(){

		return <div className="row" style={{textAlign:"center",marginBottom:"5px"}}>
		<div className="col-md-2 col-md-push-5 col-xs-2 col-xs-push-5 ">
		<input style={{textAlign:"center"}} type="text" placeholder="Input Job Ref Number" className="form-control" onChange={this.props.changeHandler}></input>
		</div>
		</div>
	}
}
