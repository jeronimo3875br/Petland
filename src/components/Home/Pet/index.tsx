import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import  { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

import HeartIcon from '../../../../assets/heart.png';
import HeartOutlineIcon from '../../../../assets/heart-outline.png';

interface IPet {
    name: string;
    description: string;
    image: ImageSourcePropType;
	isFavorite: boolean;
}

export default function Pet({ description, image, name, isFavorite }: IPet){
	const navigation = useNavigation();
	const [ favorite, setFavorite ] = useState(!isFavorite);

	return (
		<TouchableOpacity 
			style={style.pet} 
			activeOpacity={.5}
			onPress={() => navigation.navigate('pet', {
				name,
				description,
				image,
				isFavorite
			} as IPet)}
		>
			<Image 
				source={image}
				style={style.petImage}
			/>
			<View style={style.petInfo}>
				<View style={style.petFavorite}>
					<TouchableOpacity onPress={() => setFavorite(!favorite)}>
						{
							favorite ? 
								(
									<Image 
										source={HeartOutlineIcon}
										style={{
											width: 25,
											height: 25
										}}
									/>
								)
								: 
								(
									<Image 
										source={HeartIcon}
										style={{
											width: 25,
											height: 25
										}}
									/>
								)
						}
					</TouchableOpacity>
				</View>
				<View style={style.petData}>
					<Text style={style.petName}>{ name }</Text>
					<Text style={style.petDescription}>{ description }</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	pet: {
		backgroundColor: '#ffffff',
		borderRadius: 30,
		height: 150,
		flexDirection: 'row',
		marginBottom: 40,
		shadowColor: '#808080',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 0.01,
		elevation: 20,
	},

	petImage: {
		width: '40%',
		height: 150,
		borderRadius: 30
	},

	petInfo: {
		width: '60%'
	},

	petFavorite: {
		alignItems: 'flex-end',
		padding: 15,
		paddingTop: 10,
		paddingBottom: 0
	},

	petData: {
		padding: 20,
		paddingTop: 0
	},

	petName: {
		fontSize: 20,
		color: '#212121',
		fontWeight: '500'
	},

	petDescription: {
		fontSize: 15,
		color: '#808080',
		fontWeight: '500'
	}
});