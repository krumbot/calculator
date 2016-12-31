import React from 'react';
import { View } from 'react-native';

const ButtonRow = ({ children }) => {
	console.log(children);
	return (
		<View style={styles.buttonRowStyle}>
			{children}
		</View>

	);
};

const styles = {
	buttonRowStyle: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		flex: 1
	}
};

export default ButtonRow;
