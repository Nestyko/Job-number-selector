import React from 'react';
import ReactDom from 'react-dom';

import Inputcontainer from './Components/Input/inputcontainer.jsx';

import Joblistcontainer from './Components/Joblist/Joblistcontainer.jsx';

import Iframecontainer from './Components/Iframe/iframecontainer.jsx';
import Button from './Components/Iframe/button.jsx';

class Selector extends React.Component{
	constructor(){
		super();
		this.setListArray=this.setListArray.bind(this);
		this.handleRowClick=this.handleRowClick.bind(this);
		this.collapseIframe=this.collapseIframe.bind(this);
		this.state={listArray:[], iframeSrc:""};
	}
	

	setListArray(array){
		
		this.setState({listArray:array});


	}


handleRowClick(event){
	
	this.setState({iframeSrc:GLOBAL.link+"&id="+event.target.id});

	setTimeout(function(){
		$('#iframe').collapse("toggle");
	}, 400);
	}

collapseIframe(){

	$("#iframe").collapse("toggle");

	setTimeout(function(){
		this.setState({iframeSrc:""});
	}.bind(this), 400);
}

	render(){
		

		return(
			<div className="container-fluid">
			<div className="well">
			
			<div className="collapse in" id="inputandlist">
			<Inputcontainer listChangeHandler={this.setListArray} initialArray={this.props.array}/>
			<Joblistcontainer listArray={this.state.listArray} handleRowClick={this.handleRowClick}/>
			</div>

			<div className="collapse row" id="iframe">
			
			<div className="row">{this.state.iframeSrc!="" ? <Iframecontainer iframeSrc={this.state.iframeSrc}/>:""}
			</div>

			<div className="row" style={{textAlign:"center"}}>
			<div className="col-md-2 col-md-push-5 col-xs-2 col-xs-push-5" style={{marginTop:"10px"}}>
			<Button clickHandler={this.collapseIframe}/>
			</div>
			</div>
			</div>
				
			</div>
			
		</div>
		
		)
	}


}


//var GLOBAL={link:"http://www.dev.impeltechnology.com:8830/prod1/portal/portal.jsp?c=102070&p=112963&g=112970"};
//var values=[[107909,"Saved Job"],[107936,"Test Job 2"],[107940,"Job 040"],[107947,"Job 007"],[107497,"Test Job"],[107604,"No callout Document"],[112183,"0010"]];


rbf_selectQuery("SELECT id, name FROM Job", 1000,function(values){
 
 ReactDom.render(<Selector array={values}/>, document.getElementById('selectorContainer'));
  
});

