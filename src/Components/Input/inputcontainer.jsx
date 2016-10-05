import React from 'react';
import Input from './input.jsx';

export default class Inputcontainer extends React.Component {
	constructor() {
		super();

		this.changeList = this.changeList.bind(this);
	}

	changeList(event) {

		var inputText = event.target.value;

		if (inputText != "") {
			$('#inputandlist').find('.list-group').show();
			var regExpressions = inputText.split(" ").filter(function (x) { return x !== "" ? true : false; }).map(function (value) {

				return (new RegExp(value, "ig"));
			});

			console.log(regExpressions);

			var matchingArray = this.props.initialArray.filter(function (value) {

				var filterVariable = regExpressions.every(function (expression) {


					return expression.test(value[1]);
				});


				return filterVariable;
			});


			this.props.listChangeHandler(matchingArray);
		}
		else {
			$('#inputandlist').find('.list-group').hide();
			this.props.listChangeHandler([]);
		}





	}


	render() {

		return <Input changeHandler={this.changeList}/>

	}
}
