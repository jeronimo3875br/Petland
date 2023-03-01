import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Filters from '../Filters';
import Pets from '../Pets';
import Search from '../Search';

export default function Main(){

	return (
		<ScrollView contentContainerStyle={style.main}>
			<Search
				placeholder='Pesquise...'
				title='Pesquise por um pet'
			/>
			<Filters/>
			<Pets/>
		</ScrollView>
	);
}

const style = StyleSheet.create({
	main: {
		backgroundColor: '#f5f7f7',
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
	}
});