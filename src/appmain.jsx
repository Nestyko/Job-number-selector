import React from 'react';
import ReactDom from 'react-dom';

import Inputcontainer from './Components/Input/inputcontainer.jsx';

import Joblistcontainer from './Components/Joblist/Joblistcontainer.jsx';

import Iframecontainer from './Components/Iframe/iframecontainer.jsx';
import Button from './Components/Iframe/button.jsx';

import ArrayList from './Components/deliverables/deliverables.component.jsx';

import './loader.css';

class Selector extends React.Component {
	constructor() {
		super();
		this.setListArray = this.setListArray.bind(this);
		this.handleRowClick = this.handleRowClick.bind(this);
		this.collapseIframe = this.collapseIframe.bind(this);
		this.giveIframeIdWithClick = this.giveIframeIdWithClick.bind(this);
		this.collapseIframe = this.collapseIframe.bind(this);
		this.deliverablesBack = this.deliverablesBack.bind(this);
		this.state = { listArray: [], iframeSrc: "", deliverables: [['1'],['2'],['3']] };
	}


	setListArray(array) {

		this.setState({ listArray: array });


	}
//<ArrayList arrayList={this.state.deliverables} handleClick={this.giveIframeIdWithClick} fields={["Deliverables"]} />

	handleRowClick(event) {

		/*this.setState({ iframeSrc: GLOBAL.link + "&id=" + event.target.id });

		setTimeout(function () {
			$('#iframe').collapse("toggle");
		}, 400);*/
		
		console.log('Row Clicked', this);
		rbf_getRelatedIds2("R125800", "Job", event.target.id, (relName, objId, deliverab) => {
			console.log('this was done', deliverab);
			let arrayList = []
			deliverab.map(d => {
				arrayList.push([d, d]);
			})
			this.setState({ deliverables: arrayList });
		})
		$('#inputandlist').collapse('hide');
		$('#deliverables').collapse('show')
	}

	giveIframeIdWithClick(event) {
		console.log('deliverable clicked', event.target.id);
		console.log('this is the this', this);
		this.setState({ iframeSrc: GLOBAL.link + "&id=" + event.target.id });
		$('#iframeLoader').show();
		setTimeout(function () {
			$('#iframe').collapse("toggle");
		}, 400);
	}

	collapseIframe(motion) {
		motion = motion || 'toggle'

		$("#iframe").collapse(motion);
		if(motion !== 'show'){
			setTimeout(function () {
				this.setState({ iframeSrc: "" });
			}.bind(this), 400);
		}
		
	}

	deliverablesBack() {
		$('#deliverables').collapse("hide")
		$('#inputandlist').collapse("show")
		this.collapseIframe('hide');
	}

	componentDidMount() {
		$('#inputandlist').find('.list-group').hide();
		$('#iframeLoader').hide();

	}

	render() {


		return (
			<div className="container-fluid">
				<div className="well">

					<div className="collapse in" id="inputandlist">
						<Inputcontainer listChangeHandler={this.setListArray} initialArray={this.props.array}/>
						<Joblistcontainer listArray={this.state.listArray} handleRowClick={this.handleRowClick}/>
					</div>

					<div style={{ position: "relative" }} id="deliverables" className="collapse">
						<h3 style={{"text-align": "center"}}>Select Deliverable</h3>
						<Joblistcontainer listArray={this.state.deliverables} handleRowClick={this.giveIframeIdWithClick}/>
						<button style={{
							"position": "absolute",
							"top": "15px",
							"right": "20px"
						}} className="btn btn-primary" onClick={this.deliverablesBack} >Back</button>
					</div>

					<div id="iframeLoader" style={{"margin": "0 auto"}} className="loader"></div>

					<div className="collapse row" id="iframe">

						<div className="row">{this.state.iframeSrc != "" ? <Iframecontainer iframeSrc={this.state.iframeSrc}/> : ""}
						</div>

						<div className="row" style={{ textAlign: "center" }}>
							<div className="col-md-2 col-md-push-5 col-xs-2 col-xs-push-5" style={{ marginTop: "10px" }}>
								<Button clickHandler={this.deliverablesBack}/>
							</div>
						</div>
					</div>

				</div>

			</div>

		)
	}


}


//var GLOBAL={link:"http://www.dev.impeltechnology.com:8830/prod1/portal/portal.jsp?c=102070&p=112963&g=112970"};
//var GLOBAL={link:"http://www.dev.impeltechnology.com:8830/prod1/m/main.jsp?view=main&pageId=125732&objDefId=125716&tabId=106288&id=126629"};

var Planning = 126933;
var CPlan = "http://www.dev.impeltechnology.com:8830/prod1/m/main.jsp?view=main&pageId=126895&objDefId=125716&tabId=106288"

var RAssestment = "http://www.dev.impeltechnology.com:8830/prod1/m/main.jsp?view=main&pageId=126913&objDefId=125716&tabId=106288"

//var values=[[107909,"Saved Job"],[107936,"Test Job 2"],[107940,"Job 040"],[107947,"Job 007"],[107497,"Test Job"],[107604,"No callout Document"],[112183,"0010"]];


rbf_selectQuery("SELECT id, name FROM Job", 1000, function (values) {

	ReactDom.render(<Selector array={values}/>, document.getElementById('selectorContainer'));


});

