import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import LocationIcon from '../../../../assets/location.png';

interface ILocation  {
	currentLocation: string;
}

export default function Location({ currentLocation }: ILocation){
	return (
		<View style={style.locationContainer}>
			<Image 
				source={LocationIcon}
				style={{
					width: 18,
					height: 18
				}}
			/>
			<Text style={style.location}>{ currentLocation }</Text>
		</View>
	);
}

const style = StyleSheet.create({
	locationContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},


	location: {
		color: '#212121',
		fontSize: 17,
		fontWeight: '500',
		marginLeft: 5
	},
});