import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';

class InputSection extends Component {
	componentWillMount() {
		this.shownValue = '';
		this.renderCalculatedValue();
	}

	renderCalculatedValue() {
		const { displayValue, calculatedValue, calculatedChange, reset } = this.props;
		if (calculatedChange && (displayValue.toString() !== calculatedValue.toString())) {
			console.log('changed');
			this.shownValue = calculatedValue.toString();
			return this.shownValue;
		} 
		if (reset) {
			this.shownValue = '';
		}

		return this.shownValue;
	}

	render() {
		console.log(this.props);
		const { containerStyle, displayStyle } = styles;
		return (
			<View style={containerStyle}>
				<TextInput 
					editable={false}
					style={displayStyle}
					placeholder="123456"
					value={this.props.displayValue}
				/>
				<TextInput
					editable={false}
					style={displayStyle}
					placeholder=""
					value={this.renderCalculatedValue()}
				/>
			</View>
		);
	}
}

const styles = {
	displayStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		textAlign: 'right',
		fontSize: 32,
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'column',
		paddingTop: 20,
		justifyContent: 'space-between'
	}
};

const mapStateToProps = state => {
	return { 
		displayValue: state.calculator.displayValue, 
		calculatedValue: state.calculator.calculatedValue,
		calculatedChange: state.calculator.calculatedChange,
		reset: state.calculator.reset
	};
};

export default connect(mapStateToProps, null)(InputSection);
