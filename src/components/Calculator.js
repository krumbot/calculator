import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection } from './common';
import InputSection from './InputSection';
import ButtonSection from './ButtonSection';

class Calculator extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<InputSection />
				</CardSection>

				<View 
				style={{
						flexDirection: 'column', 
						justifyContent: 'flex-start', 
						position: 'absolute',
						borderWidth: 2,
						borderColor: 'red'
					}}
				>
					<ButtonSection />
				</View>
			</Card>
		);
	}
}

export default Calculator;
