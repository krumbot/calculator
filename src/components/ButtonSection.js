import React, { Component } from 'react';
import { View } from 'react-native';
import ButtonRow from './ButtonRow';
import CalcButton from './CalcButton';

class ButtonSection extends Component {
	render() {
		return (
			<View style={styles.containerStyle}> 
				<ButtonRow>
					<CalcButton buttonDisplay="7" />
					<CalcButton buttonDisplay="8" />
					<CalcButton buttonDisplay="9" />
					<CalcButton buttonDisplay="÷" />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="4" />
					<CalcButton buttonDisplay="5" />
					<CalcButton buttonDisplay="6" />
					<CalcButton buttonDisplay="x" />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="1" />
					<CalcButton buttonDisplay="2" />
					<CalcButton buttonDisplay="3" />
					<CalcButton buttonDisplay="+" />
				</ButtonRow>

				<ButtonRow>
					<CalcButton buttonDisplay="." />
					<CalcButton buttonDisplay="0" />
					<CalcButton buttonDisplay="=" />
					<CalcButton buttonDisplay="-" />
				</ButtonRow>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		flexDirection: 'column',
		position: 'relative',
		justifyContent: 'flex-start'
	}
};

export default ButtonSection;
