import React from 'react';
import { View } from 'react-native';

const ButtonRow = ({ children, style }) => {
	return (
		<View style={[styles.buttonRowStyle, style]}>
			{children}
		</View>

	);
};

const styles = {
	buttonRowStyle: {
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		flex: 1,
		backgroundColor: '#f2f2f2'
	}
};

export default ButtonRow;
