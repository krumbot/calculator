import React, { Component } from 'react';
import { View } from 'react-native';
import ButtonRow from './ButtonRow';
import CalcButton from './CalcButton';

class ButtonSection extends Component {
	render() {
		const { 
			containerStyle, 
			staticSectionStyle, 
			rightRowStyle, 
			functionRowStyle, 
			functionSectionStyle 
		} = styles;
		return (
			<View style={containerStyle}>
				<View style={functionSectionStyle}>
					<ButtonRow style={functionRowStyle}>
						<CalcButton 
							buttonDisplay="sin()" 
							inputDisplay="sin(" 
							buttonValue="Math.sin(" 
							buttonType="FUNCTION" 
						/>
						<CalcButton 
							buttonDisplay="cos()" 
							inputDisplay="cos(" 
							buttonValue="Math.cos(" 
							buttonType="FUNCTION" 
						/>
						<CalcButton 
							buttonDisplay="(" 
							buttonType="FUNCTION"
						/>
						<CalcButton 
							buttonDisplay=")" 
							buttonType="FUNCTION"
						/>						
					</ButtonRow>
				</View>

				<View style={staticSectionStyle}> 
					<ButtonRow>
						<CalcButton buttonDisplay="7" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="4" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="1" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="." buttonType="NUMERIC" />
					</ButtonRow>

					<ButtonRow>
						<CalcButton buttonDisplay="8" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="5" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="2" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="0" buttonType="NUMERIC" />
					</ButtonRow>

					<ButtonRow>
						<CalcButton buttonDisplay="9" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="6" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="3" buttonType="NUMERIC" />
						<CalcButton buttonDisplay="=" buttonType="EQUALS" />
					</ButtonRow>

					<ButtonRow style={rightRowStyle}>
						<CalcButton buttonDisplay="C" buttonType="CLEAR" style={{ backgroundColor: 'gray' }} />
						<CalcButton buttonDisplay="÷" buttonValue="/" buttonType="OPERATOR" />
						<CalcButton buttonDisplay="x" buttonValue="*" buttonType="OPERATOR" />
						<CalcButton buttonDisplay="+" buttonType="OPERATOR" />
						<CalcButton buttonDisplay="-" buttonType="OPERATOR" />
					</ButtonRow>
				</View>
			</View>
		);
	}
}

const styles = {
	staticSectionStyle: {
		flexDirection: 'row',
		position: 'relative',
		justifyContent: 'space-around',
		flex: 7
	},
	rightRowStyle: {
		backgroundColor: '#bfbfbf'
	},
	containerStyle: {
		flexDirection: 'column',
		position: 'relative',
		flex: 1
	}, 
	functionRowStyle: {
		flexDirection: 'row',
		backgroundColor: '#bfbfbf'

	}, 
	functionSectionStyle: {
		flexDirection: 'column',
		flex: 1
	}
};

export default ButtonSection;
