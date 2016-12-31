import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { numericPress } from '../actions';

class CalcButton extends Component {


	componentWillMount() {
		if (!this.props.buttonType || this.props.buttonType === 'numeric') {
			this.onButtonPress = this.numericButtonPress;
		}
	}

	numericButtonPress() {
		this.props.numericPress({ value: this.props.buttonDisplay });
	}

	render() {
		const { buttonDisplay, buttonValue } = this.props;
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

export default connect(null, { numericPress })(CalcButton);
