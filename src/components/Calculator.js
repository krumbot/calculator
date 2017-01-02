import React, { Component } from 'react';
import { Card, CardSection } from './common';
import InputSection from './InputSection';
import ButtonSection from './ButtonSection';

class Calculator extends Component {
	render() {
		return (
			<Card style={{ flex: 1, flexDirection: 'column' }}>
				<CardSection style={{ flex: 1 }}>
					<InputSection />
				</CardSection>

				<CardSection 
				style={{
						flexDirection: 'column', 
						justifyContent: 'flex-end',
						flex: 2,
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
