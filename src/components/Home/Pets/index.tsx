import React from 'react';
import { StyleSheet, View } from 'react-native';

import Pet from '../Pet';

// Animals image
import DogueImage from '../../../../assets/animals/dogue.jpg';
import AkitaImage from '../../../../assets/animals/akita.jpg';
import AfghanImage from '../../../../assets/animals/afghan.jpg';
import BloodhoundImage from '../../../../assets/animals/bloodhound.jpg';

export default function Pets(){
	return (
		<View style={style.pets}>
			<Pet
				name='Akita Inu'
				description='Cachorro do filme "Sempre ao seu lado" fodasekkkkkkkkkk'
				image={AkitaImage}
				isFavorite={true}
			/>
			<Pet
				name='Afghan Hound'
				description='Cachorro com cabelo man'
				image={AfghanImage}
				isFavorite={false}
			/>
			<Pet
				name='Bloodhound'
				description='Cachorro grande da poha.'
				image={BloodhoundImage}
				isFavorite={false}
			/>
			<Pet
				name='Dogue Alemão'
				description='Um cachorro alemão.'
				image={DogueImage}
				isFavorite={false}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	pets: {
		padding: 20,
		paddingTop: 40,
	},
});