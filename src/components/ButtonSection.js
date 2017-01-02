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
					<CalcButton buttonDisplay="7" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="4" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="1" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="." />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="8" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="5" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="2" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="0" />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="9" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="6" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="3" buttonType="NUMERIC" />
					<CalcButton buttonDisplay="=" buttonType="EQUALS" />
				</ButtonRow>

				<ButtonRow style={rightRowStyle}>
					<CalcButton buttonDisplay="C" buttonType="CLEAR" />
					<CalcButton buttonDisplay="÷" buttonValue="/" buttonType="OPERATOR" />
					<CalcButton buttonDisplay="x" buttonValue="*" buttonType="OPERATOR" />
					<CalcButton buttonDisplay="+" buttonType="OPERATOR" />
					<CalcButton buttonDisplay="-" buttonType="OPERATOR" />
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
