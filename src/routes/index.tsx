import React from 'react';
import { RootStackParamsList } from '../RootStackParamsList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomePage from '../pages/Welcome';
import HomePage from '../pages/Home';
import PetPage from '../pages/Pet';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function Routes(){
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="welcome"
				component={WelcomePage}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="home"
				component={HomePage}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="pet"
				component={PetPage}
				options={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}

export { Routes };