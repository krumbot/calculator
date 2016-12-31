import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class CalcButton extends Component {
	render() {
		const { buttonDisplay, buttonValue, buttonType } = this.props;
		const { buttonStyle, textStyle } = styles;
		console.log(textStyle);
		return (
			<TouchableOpacity 
				style={buttonStyle}
				onPress={() => console.log(`${buttonDisplay} was pressed!`)}
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
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		paddingTop: 2,
		paddingBottom: 2,
		flexDirection: 'row',
		flex: 1
	},
	textStyle: {
		fontSize: 24,
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default CalcButton;
