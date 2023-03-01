import React, { useState } from 'react';
import { 
	View, 
	Text, 
	StyleSheet, 
	StatusBar, 
	ImageBackground, 
	TouchableOpacity, 
	Image,
	ScrollView
} from 'react-native';

import HeartIcon from '../../../assets/heart.png';
import HeartOutlineIcon from '../../../assets/heart-outline.png';
import ProfileImage from '../../../assets/profile.jpg';

import { Feather } from '@expo/vector-icons';
import { RootStackParamsList } from '../../RootStackParamsList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const statusHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 64;

type Props = NativeStackScreenProps<RootStackParamsList, 'pet'>;

export default function PetPage({ navigation, route }: Props){
	const [ favorite, setFavorite ] = useState(!route.params.isFavorite);

	return (
		<View style={style.container}>
			<View style={style.header}>
				<ImageBackground
					source={route.params.image}
					style={{ flex: 1 }}
				>
					<TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
						<Feather
							name="arrow-left"
							color="#e36765"
							size={22}
						/>
					</TouchableOpacity>
				</ImageBackground>
			</View>
			<View style={style.main}>
				<View 
					style={style.pet} 
				>
					<View style={style.petInfo}>
						<View style={style.petFavorite}>
							<TouchableOpacity onPress={() => setFavorite(!favorite)}>
								{
									favorite ? 
										(
											<Image 
												source={HeartOutlineIcon}
												style={{
													width: 23,
													height: 23
												}}
											/>
										)
										: 
										(
											<Image 
												source={HeartIcon}
												style={{
													width: 23,
													height: 23
												}}
											/>
										)
								}
							</TouchableOpacity>
						</View>
						<View style={style.petData}>
							<Text style={style.petName}>{ route.params.name }</Text>
							<Text style={style.petDescription}>{ route.params.description }</Text>
						</View>
					</View>
				</View>
				<View style={style.petMetrics}>
					<View style={style.petMetric}>
						<Text style={style.petMetricTitle}>Age</Text>
						<View style={style.petMetricValue}>
							<Text style={style.petMetricTextValue}>2</Text>
						</View>
					</View>
					<View style={style.petMetric}>
						<Text style={style.petMetricTitle}>Sexo</Text>
						<View style={style.petMetricValue}>
							<Text style={style.petMetricTextValue}>Male</Text>
						</View>
					</View>
					<View style={style.petMetric}>
						<Text style={style.petMetricTitle}>Cor</Text>
						<View style={style.petMetricValue}>
							<Text style={style.petMetricTextValue}>Marrom</Text>
						</View>
					</View>
					<View style={style.petMetric}>
						<Text style={style.petMetricTitle}>Tamaho</Text>
						<View style={style.petMetricValue}>
							<Text style={style.petMetricTextValue}>7-9</Text>
						</View>
					</View>
				</View>
				<View style={style.division}></View>
				<View style={style.ownerCard}>
					<View style={style.ownerCardHeader}>
						<View style={style.ownerData}>
							<Image 
								source={ProfileImage}
								style={style.ownerImage}
							/>
							<View style={style.ownerId}>
								<Text style={style.ownerName}>Gabriel Jeronimo</Text>
								<Text style={style.ownerLevel}>Proprietário</Text>
							</View>
						</View>
						<Text style={style.postDate}>14 de Jun 2022</Text>
					</View>
					<ScrollView style={{ height: 100 }}>
						<Text style={style.ownerDescription}>
							O Naruto pode ser um pouco duro às vezes, talvez você não saiba disso, mas o Naruto também cresceu sem pai. Na verdade ele nunca conheceu nenhum de seus pais, e nunca teve nenhum amigo em nossa aldeia. Mesmo assim eu nunca vi ele chorar, ficar zangado ou se dar por vencido, ele está sempre disposto a melhorar, ele quer ser respeitado, é o sonho dele e o Naruto daria a vida por isso sem hesitar. Meu palpite é que ele se cansou de chorar e decidiu fazer alguma coisa a respeito!
						</Text>
					</ScrollView>
					<TouchableOpacity style={style.adoptButton} onPress={() => alert('Adotado! Vai chegar na sua casa as 00:00 de ontém.')}>
						<Text style={style.adoptText}>Adotar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingTop: statusHeight
	},

	header: {
		height: '50%',
		backgroundColor: 'red',
	},

	main: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: '#f5f7f7',
		width: '100%',
		height: '55%',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40
	},

	pet: {
		backgroundColor: '#ffffff',
		borderRadius: 30,
		height: 120,
		width: '90%',
		flexDirection: 'row',
		marginBottom: 40,
		shadowColor: '#808080',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 0.01,
		elevation: 20,
		alignSelf: 'center',
		top: -50
	},

	petInfo: {
		width: '100%'
	},

	petFavorite: {
		alignItems: 'flex-end',
		padding: 15,
		paddingTop: 10,
		paddingBottom: 0,
		height: 25
	},

	petData: {
		paddingLeft: 30,
		paddingTop: 0
	},

	petName: {
		fontSize: 25,
		color: '#212121',
		fontWeight: '500'
	},

	petDescription: {
		fontSize: 15,
		color: '#808080',
		fontWeight: '500'
	},

	petMetrics: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		top: -60
	},

	petMetric: {
		alignItems: 'center'
	},

	petMetricTitle: {
		color: '#212121',
		fontSize: 16,
		fontWeight: '500',
		marginBottom: 5
	},

	petMetricValue: {
		backgroundColor: '#ffffff',
		minWidth: 70,
		maxWidth: 100,
		borderRadius: 50,
		padding: 7,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#808080',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 0.01,
		elevation: 20,
	},

	petMetricTextValue: {
		fontSize: 14,
		color: '#e36765'
	},

	division: {
		width: '90%',
		height: 1.5,
		backgroundColor: '#e36765',
		alignSelf: 'center',
		top: -20
	},

	ownerCard: {},

	ownerData: {
		flexDirection: 'row',
		alignItems: 'center'
	},

	ownerCardHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 25,
		paddingRight: 25,
	},

	ownerImage: {
		width: 60,
		height: 60,
		borderRadius: 50
	},

	ownerId: {
		marginLeft: 10
	},

	ownerName: {
		color: '#212121',
		fontWeight: '500',
		fontSize: 17
	},
	
	ownerLevel: {
		color: '#808080',
		fontSize: 14
	},

	postDate: {
		fontSize: 13,
		color: '#808080',
		top: 10
	},

	ownerDescription: {
		paddingLeft: 25,
		paddingRight: 25,
		color: '#808080',
		fontSize: 14,
		marginTop: 10
	},

	adoptText: {
		color: '#ffffffff',
		fontSize: 18,
		fontWeight: '500'
	},

	adoptButton: {
		width: '90%',
		height: 50,
		backgroundColor: '#e36765',
		borderRadius: 50,
		alignSelf: 'center',
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},

	backButton: {
		width: 50,
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20,
		backgroundColor: '#ffffff',
		shadowColor: '#808080',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 0.01,
		elevation: 20,
	}
});