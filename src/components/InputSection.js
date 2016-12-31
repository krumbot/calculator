import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

class InputSection extends Component {
	render() {
		const { containerStyle, inputStyle } = styles;
		return (
			<View style={containerStyle}>
				<TextInput 
					editable={false}
					style={inputStyle}
					placeholder="123456"
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
		fontSize: 18,
		lineHeight: 23,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row'
	}
};

export default InputSection;
