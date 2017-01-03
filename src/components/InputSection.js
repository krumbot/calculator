import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import { connect } from 'react-redux';

class InputSection extends Component {
	componentWillMount() {
		this.shownValue = '';
		this.error = false;
		this.renderCalculatedValue();
	}

	renderCalculatedValue() {
		const { displayValue, calculatedValue, calculatedChange, reset } = this.props;

		if (calculatedChange && (displayValue.toString() !== calculatedValue.toString())) {
			this.shownValue = calculatedValue.toString();
			return this.shownValue;
		} 
		if (reset || this.error) {
			console.log('hit if');
			this.shownValue = '';
		}
		
		return this.shownValue;
	}

	renderInputs() {
		if (this.props.calculatedValue === 'BAD_EXPRESSION') {
			this.error = true;
			return <Text style={styles.errorStyle}>Invalid Expression</Text>;
		}
		return (
			<View>
				<TextInput 
					editable={false}
					style={styles.displayStyle}
					placeholder="1234"
					value={this.props.displayValue}
					adjustsFontSizeToFit
				/>
				<TextInput
					editable={false}
					style={{ ...styles.displayStyle, fontSize: 28 }}
					placeholder=""
					value={this.renderCalculatedValue()}
					adjustsFontSizeToFit
				/>		
			</View>	
		);
	}

	render() {
		console.log(this.error);
		return (
			<View style={styles.containerStyle}>
				{this.renderInputs()}
			</View>
		);
	}
}

const styles = {
	displayStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		textAlign: 'right',
		fontSize: 36,
		margin: 25
	},
	containerStyle: {
		flex: 1,
		flexDirection: 'column',
		paddingTop: 5,
		paddingBottom: 5,
		justifyContent: 'space-around'
	},
	errorStyle: {
		fontSize: 24,
		color: 'red',
		textAlign: 'center'
	}
};

const mapStateToProps = state => {
	const { displayValue, calculatedValue, calculatedChange, reset } = state.calculator;
	return { 
		displayValue,
		calculatedValue,
		calculatedChange,
		reset
	};
};

export default connect(mapStateToProps, null)(InputSection);
