import React from 'react';
import { 
	TextInput, 
	View, 
	Text, 
	StyleSheet 
} from 'react-native';

import { Feather } from '@expo/vector-icons';

interface ISearch {
	placeholder: string;
	title?: string;
}

export default function Search({ placeholder, title }: ISearch){
	return (
		<View style={style.searchContainer}>
			{
				title ? ( <Text style={style.searchTitle}>{ title }</Text> ) : null
			}
			<View style={style.searchContent}>
				<Feather 
					name="search"
					color="#808080"
					size={19}
				/>
				<TextInput
					style={style.searchInput}
					placeholder={placeholder}
				/>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	searchContainer: {
		padding: 20,
		paddingTop: 60,
	},

	searchTitle: {
		fontSize: 23,
		color: '#e36765',
		fontWeight: '500',
		marginBottom: 15
	},

	searchInput: {
		backgroundColor: 'transparent',
		fontSize: 16,
		marginLeft: 10,
		color: '#808080',
		width: '100%',
		height: '100%',
		borderTopRightRadius: 50,
		borderBottomRightRadius: 50,
	},

	searchContent: {
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		paddingLeft: 20,
		height: 50,
		borderRadius: 50,
		shadowColor: '#808080',
		shadowOffset: {
			width: -10,
			height: 10,
		},
		shadowOpacity: 0.01,
		elevation: 20,
		alignItems: 'center',
	}
});