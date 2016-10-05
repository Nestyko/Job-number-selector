
import Row from './row.jsx';

import React, {Component} from 'react';

class ArrayList extends Component {
	render() {
		var fieldsHeaders = this.props.fields.map(
			field => {
				return (<th>{field}</th>)
			}
		)
		if (this.props.arrayList.length > 0) {
			var rows = this.props.arrayList.map(
				function(r) {
					return <Row id={r} handleClick={this.props.handleClick}/>
				}, this)
		}else{
			var rows = (<tr><td>{"No deliverables for this job please go to desing of service"}</td></tr>)
		}


		return (
			<table className="table table-hover">
				<thead>
					<tr>
						{fieldsHeaders}
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

export default ArrayList;