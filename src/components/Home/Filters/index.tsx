import React, { useState } from 'react';
import { 
	Image, 
	StyleSheet, 
	View, 
	Text, 
	TouchableOpacity, 
	ScrollView 
} from 'react-native';

import CatIcon from '../../../../assets/cat.png';
import DogIcon from '../../../../assets/dog.png';
import ParrotIcon from '../../../../assets/parrot.png';
import RabbitIcon from '../../../../assets/rabbit.png';

import CatWhiteIcon from '../../../../assets/cat-white.png';
import DogWhiteIcon from '../../../../assets/dog-white.png';
import ParrotWhiteIcon from '../../../../assets/parrot-white.png';
import RabbitWhiteIcon from '../../../../assets/rabbit-white.png';

export default function Filters(){
	const [ filter, setFilter ] = useState(1);

	return (
		<ScrollView horizontal contentContainerStyle={style.filtersContainer}>
			<View style={style.filter}>
				<TouchableOpacity style={{
					...style.filterImage,
					backgroundColor: filter === 0 ? '#e36765' : '#ffffff'
				}} onPress={() => setFilter(0)}>
					{
						filter === 0 ? 
							(
								<Image 
									source={CatWhiteIcon}
									style={{
										width: 50,
										height: 50
									}}
								/>
							)
							: 
							<Image 
								source={CatIcon}
								style={{
									width: 50,
									height: 50
								}}
							/>
					}
				</TouchableOpacity>
				<Text style={style.filterText}>Gatos</Text>
			</View>	
			<View style={style.filter}>
				<TouchableOpacity style={{
					...style.filterImage,
					backgroundColor: filter === 1 ? '#e36765' : '#ffffff'
				}} onPress={() => setFilter(1)}>
					{
						filter === 1 ? 
							(
								<Image 
									source={DogWhiteIcon}
									style={{
										width: 50,
										height: 50
									}}
								/>
							)
							: 
							<Image 
								source={DogIcon}
								style={{
									width: 50,
									height: 50
								}}
							/>
					}
				</TouchableOpacity>
				<Text style={style.filterText}>Cachorros</Text>
			</View>
			<View style={style.filter}>
				<TouchableOpacity style={{
					...style.filterImage,
					backgroundColor: filter === 2 ? '#e36765' : '#ffffff'
				}} onPress={() => setFilter(2)}>
					{
						filter === 2 ? 
							(
								<Image 
									source={ParrotWhiteIcon}
									style={{
										width: 50,
										height: 50
									}}
								/>
							)
							: 
							<Image 
								source={ParrotIcon}
								style={{
									width: 50,
									height: 50
								}}
							/>
					}
				</TouchableOpacity>
				<Text style={style.filterText}>Passáros</Text>
			</View>
			<View style={style.filter}>
				<TouchableOpacity style={{
					...style.filterImage,
					backgroundColor: filter === 3 ? '#e36765' : '#ffffff'
				}} onPress={() => setFilter(3)}>
					{
						filter === 3 ? 
							(
								<Image 
									source={RabbitWhiteIcon}
									style={{
										width: 50,
										height: 50
									}}
								/>
							)
							: 
							<Image 
								source={RabbitIcon}
								style={{
									width: 50,
									height: 50
								}}
							/>
					}
				</TouchableOpacity>
				<Text style={style.filterText}>Coelhos</Text>
			</View>
		</ScrollView>
	);
}

const style = StyleSheet.create({
	filtersContainer: {
		width: '100%',
		justifyContent: 'space-evenly',
		paddingBottom: 20
	},

	filter: {
		alignItems: 'center',
		paddingTop: 15
	},

	filterImage: {
		padding: 15,
		borderRadius: 20,
		shadowColor: '#808080',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 0.01,
		elevation: 20,
		marginBottom: 7
	},

	filterText: {
		fontWeight: '500',
		fontSize: 15,
		color: '#212121'
	},
});