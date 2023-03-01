import React from 'react';
import { Routes } from './src/routes';
import 'react-native-gesture-handler';
import { RecoilRoot } from 'recoil'; 
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
	return (
		<NavigationContainer>
			<RecoilRoot>
				<Routes />
				<StatusBar backgroundColor='#ffffff' style="dark" />
			</RecoilRoot>
		</NavigationContainer>
	);
}