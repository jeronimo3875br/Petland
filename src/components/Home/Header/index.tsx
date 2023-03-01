import React from 'react';
import { View, StyleSheet } from 'react-native';

import Profile from '../Profile';
import Location from '../Location';

import ProfileImage from '../../../../assets/profile.jpg';

export default function Header(){
	return (
		<View style={style.header}>
			<View></View>
			<Location
				currentLocation='Indaiatuba, São Paulo'
			/>
			<Profile 
				image={ProfileImage}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	header: {
		height: '20%',
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
		paddingBottom: 0
	}
});