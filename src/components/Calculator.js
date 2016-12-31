import React, { Component } from 'react';
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

				<CardSection>
					<ButtonSection />
				</CardSection>
			</Card>
		);
	}
}

export default Calculator;
