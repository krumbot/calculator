import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { connect } from 'react-redux';

class InputSection extends Component {
	render() {
		console.log(this.props);
		const { containerStyle, inputStyle } = styles;
		return (
			<View style={containerStyle}>
				<TextInput 
					editable={false}
					style={inputStyle}
					placeholder="123456"
					value={this.props.displayValue}
					onChangeText={() => console.log('changed!')}
				/>
			</View>
		);
	}
}

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row'
	}
};

const mapStateToProps = state => {
	return { 
		displayValue: state.calculator.displayValue, 
		calculatedValue: state.calculator.calculatedValue 
	};
};

export default connect(mapStateToProps, null)(InputSection);
