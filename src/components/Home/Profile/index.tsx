import React from 'react';
import { StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface IProfile {
	image: ImageSourcePropType,
}

export default function Profile({ image }: IProfile){
	return (
		<TouchableOpacity activeOpacity={.5} style={style.profileButton}>
			<Image 
				source={image}
				style={style.profileImage}
			/>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	profileImage: {
		width: 55,
		height: 55,
		borderRadius: 50,
	},

	profileButton: {
		shadowColor: 'rgb(0 0 0 / 10%)',
		shadowOffset: {
			width: -5,
			height: 5,
		},
		shadowOpacity: .1,
		shadowRadius: 10,
		elevation: 20,
		marginBottom: 10,
		borderRadius: 50,
		borderColor: '#e36765',
		borderWidth: 2,
		padding: 2
	}
});