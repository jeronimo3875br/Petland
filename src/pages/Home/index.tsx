import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/Home/Header';
import Main from '../../components/Home/Main';


export default function HomePage(){
	useEffect(() => {
		alert('Isso é apenas uma demo, nem todos os recursos podem estar disponíveis!');
	}, []);

	return (
		<View style={style.container}>
			<Header/>
			<Main/>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		justifyContent: 'flex-end'
	}
});