import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class Calculator extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Text> This is where the input is shown! </Text>
				</CardSection>

				<CardSection>
					<Text> This is where the buttons will go! </Text>
				</CardSection>
			</Card>
		);
	}
}

export default Calculator;
