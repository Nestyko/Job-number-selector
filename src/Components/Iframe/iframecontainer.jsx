import React from 'react';
import Iframe from './iframe.jsx';

export default class Iframecontainer extends React.Component{

	render(){

		return <div style={{borderRadius:"10px", padding:"0px 0px 0px 0px", overflow:"hidden"}} className="col-sm-12">
		<Iframe iframeSrc={this.props.iframeSrc}/>
		</div>
		
	}
}
