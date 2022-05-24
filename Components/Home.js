import React from 'react';
import App from '../App';
import { Animated, Dimensions, Image, ScrollView, View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Post's....
import LogoAppli from '../assets/LogoAppli.png';
import { TextInput } from 'react-native-web';

const Home = ({ navigation }) => {
	const edges = useSafeAreaInsets();

	return (
		<View>
			<ScrollView>
				<View
					style={{
						paddingLeft: 15,
						paddingRight: 15,
						paddingTop: edges.top + 165,
						paddingBottom: 25,
					}}
				>
					{[LogoAppli].map((item, index) => {
						return (
							<Image
								source={item}
								key={index}
								style={{
									width: Dimensions.get('window').width - 30,
									height: 250,
									borderRadius: 100,
									marginTop: 20,
								}}
							></Image>
						);
					})}
					<Text
						style={{
							color: 'green',
							fontSize: 25,
							fontWeight: 'bold',
							textAlign: 'center',
							marginVertical: 100,
						}}
					>
						No Await Order
					</Text>
					<Button title="Accéder au menu" color="#841584" onPress={() => navigation.navigate('MenuScreen')} />
					<Button title="Left button" onPress={() => Alert.alert('Left button pressed')} />
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;
