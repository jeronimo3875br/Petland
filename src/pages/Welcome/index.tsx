import React from 'react';
import { RootStackParamsList } from '../../RootStackParamsList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import WelcomePetsImage from '../../../assets/welcome-pets.png';

type Props = NativeStackScreenProps<RootStackParamsList, 'welcome'>;

export default function WelcomePage({ navigation }: Props){
	return (
		<View style={style.container}>
			<Text style={style.title}>Faça novos amigos!</Text>
			<Text style={style.subtitle}>Adote, não compre.</Text>
			<Image
				style={style.banner}
				source={WelcomePetsImage}
			/>
			<TouchableOpacity 
				style={style.startButton} 
				onPress={() => navigation.push('home') }
			>
				<Text style={style.startButtonText}>Vamos lá</Text>
			</TouchableOpacity>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e36765',
		alignItems: 'center',
		justifyContent: 'center'
	},

	title: {
		color: '#fafafa',
		fontSize: 40
	},

	subtitle: {
		color: '#f6dbd7',
		fontSize: 27
	},

	banner: {
		width: 400,
		height: 400
	},

	startButton: {
		backgroundColor: '#fafafa',
		padding: 10,
		borderRadius: 50,
		width: 150,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30
	},

	startButtonText: {
		color: '#212121',
		fontSize: 20,
		fontWeight: 'bold'
	}
});