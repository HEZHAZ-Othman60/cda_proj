import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import MenuScreen from './Components/MenuScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="MenuScreen"
						options={{
							title: 'Menu',
							tabBarLabel: 'Menu',
						}}
					>
						{() => <MenuScreen />}
					</Stack.Screen>
					<Stack.Screen name="Home" component={Home} options={{ title: 'Your menu' }}></Stack.Screen>
				</Stack.Navigator>
				<SplashScreen></SplashScreen>;
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
export default App;
