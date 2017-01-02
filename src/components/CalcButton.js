import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { 
	numericPress, 
	clearPress, 
	equalsPress,
	operatorPress,
	functionPress
} from '../actions';

class CalcButton extends Component {


	componentWillMount() {
		const { buttonType } = this.props;
		switch (buttonType) {
			default:
				this.onButtonPress = this.numericButtonPress;
				break;
			case 'NUMERIC':
				this.onButtonPress = this.numericButtonPress;
				break;
			case 'CLEAR':
				this.onButtonPress = this.clearButtonPress;
				break;
			case 'EQUALS':
				this.onButtonPress = this.equalsButtonPress;
				break;
			case 'OPERATOR': 
				this.onButtonPress = this.operatorButtonPress;
				break;
			case 'FUNCTION':
				this.onButtonPress = this.functionButtonPress;
				break;
		}
	}

	numericButtonPress() {
		this.props.numericPress({ display: this.props.buttonDisplay });
	}

	clearButtonPress() {
		this.props.clearPress();
	}

	equalsButtonPress() {
		this.props.equalsPress();
	}

	operatorButtonPress() {
		const value = this.props.buttonValue ? this.props.buttonValue : this.props.buttonDisplay;
		this.props.operatorPress({ display: this.props.buttonDisplay, value });
	}

	functionButtonPress() {
		const display = this.props.inputDisplay ? this.props.inputDisplay : this.props.buttonDisplay;
		const value = this.props.buttonValue ? this.props.buttonValue : this.props.buttonDisplay;
		this.props.functionPress({ display, value });
	}

	render() {
		const { buttonDisplay } = this.props;
		const { buttonStyle, textStyle } = styles;
		return (
			<TouchableOpacity 
				style={[buttonStyle, this.props.style]}
				onPress={this.onButtonPress.bind(this)}
			>
				<Text style={textStyle}> 
					{buttonDisplay}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = {
	buttonStyle: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textStyle: {
		fontSize: 20
	}
};

export default connect(null, { numericPress, clearPress, equalsPress, operatorPress, functionPress })(CalcButton);
