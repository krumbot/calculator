import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { 
	numericPress, 
	clearPress, 
	equalsPress 
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
		}
	}

	numericButtonPress() {
		this.props.numericPress({ value: this.props.buttonDisplay });
	}

	clearButtonPress() {
		this.props.clearPress();
	}

	equalsButtonPress() {
		this.props.equalsPress();
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
		paddingTop: 2,
		paddingBottom: 2,
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textStyle: {
		fontSize: 24,
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default connect(null, { numericPress, clearPress, equalsPress })(CalcButton);
