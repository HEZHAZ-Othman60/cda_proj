import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, Image, ScrollView, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MenuScreen = () => {

	const navigation = useNavigation();
	return (
		<View>
			<Button title="Go to Menu" onPress={() => {
				navigation.navigate('MenuScreen');
			}} />
		</View>
	);
};
export default MenuScreen;
