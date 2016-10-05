import React, {Component} from 'react';

class Row extends Component {
	render() {
		return (
			<tr className="clickable-row" onClick={this.props.handleClick}>
				<td id={this.props.id} >{this.props.id}</td>
			</tr>
		);
	}
}

export default Row;