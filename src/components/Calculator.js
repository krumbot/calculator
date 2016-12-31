import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection } from './common';
import InputSection from './InputSection';
import ButtonSection from './ButtonSection';

class Calculator extends Component {
	render() {
		return (
			<Card style={{ flex: 1, flexDirection: 'column'}}>
				<CardSection>
					<InputSection />
				</CardSection>

				<CardSection 
				style={{
						flexDirection: 'column', 
						justifyContent: 'flex-end',
						flex: 1,
						position: 'relative',
					}}
				>
					<ButtonSection />
				</CardSection>
			</Card>
		);
	}
}

export default Calculator;
