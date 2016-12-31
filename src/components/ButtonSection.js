import React, { Component } from 'react';
import { View } from 'react-native';
import ButtonRow from './ButtonRow';
import CalcButton from './CalcButton';

class ButtonSection extends Component {
	render() {
		const { containerStyle, rightRowStyle } = styles;
		return (
			<View style={containerStyle}> 
				<ButtonRow>
					<CalcButton buttonDisplay="7" />
					<CalcButton buttonDisplay="4" />
					<CalcButton buttonDisplay="1" />
					<CalcButton buttonDisplay="." />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="8" />
					<CalcButton buttonDisplay="5" />
					<CalcButton buttonDisplay="2" />
					<CalcButton buttonDisplay="0" />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="9" />
					<CalcButton buttonDisplay="6" />
					<CalcButton buttonDisplay="3" />
					<CalcButton buttonDisplay="=" />
				</ButtonRow>

				<ButtonRow style={rightRowStyle}>
					<CalcButton buttonDisplay="C" />
					<CalcButton buttonDisplay="÷" />
					<CalcButton buttonDisplay="x" />
					<CalcButton buttonDisplay="+" />
					<CalcButton buttonDisplay="-" />
				</ButtonRow>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flexDirection: 'row',
		position: 'relative',
		justifyContent: 'space-around',
		flex: 1
	},
	rightRowStyle: {
		backgroundColor: '#bfbfbf'
	}
};

export default ButtonSection;
