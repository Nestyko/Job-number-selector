import React from 'react';
import Iframe from './iframe.jsx';

export default class Iframecontainer extends React.Component{

	render(){

		return <div style={{borderRadius:"10px", padding:"0px 0px 0px 0px", overflow:"hidden"}} className="col-md-10 col-md-push-1 col-xs-10 col-xs-push-1 ">
		<Iframe iframeSrc={this.props.iframeSrc}/>
		</div>
		
	}
}
