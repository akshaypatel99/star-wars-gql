import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icon imports
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Screen component imports
import PeopleScreen from '../screens/PeopleScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import StarshipsScreen from '../screens/StarshipsScreen';
import colors from '../config/colors';
import Text from '../components/AppText';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: colors.gray,
					borderTopWidth: 0,
				},
			}}
		>
			<BottomTabs.Screen
				name='Characters'
				component={PeopleScreen}
				options={{
					tabBarLabel: ({ focused, color }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? colors.yellow : colors.white,
							}}
						>
							Characters
						</Text>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<FontAwesome5
							name={focused ? 'jedi' : 'jedi-order'}
							size={24}
							color={focused ? colors.yellow : colors.white}
						/>
					),
					tabBarActiveTintColor: colors.yellow,
				}}
			/>
			<BottomTabs.Screen
				name='Planets'
				component={PlanetsScreen}
				options={{
					tabBarLabel: ({ focused, color }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? colors.yellow : colors.white,
							}}
						>
							Planets
						</Text>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<Ionicons
							name={focused ? 'planet' : 'planet-outline'}
							size={24}
							color={focused ? colors.yellow : colors.white}
						/>
					),
					tabBarActiveTintColor: colors.yellow,
				}}
			/>
			<BottomTabs.Screen
				name='Starships'
				component={StarshipsScreen}
				options={{
					tabBarLabel: ({ focused, color }) => (
						<Text
							style={{
								fontSize: 10,
								color: focused ? colors.yellow : colors.white,
							}}
						>
							Starships
						</Text>
					),
					tabBarIcon: ({ focused, color, size }) => (
						<MaterialCommunityIcons
							name={focused ? 'death-star-variant' : 'death-star'}
							size={24}
							color={focused ? colors.yellow : colors.white}
						/>
					),
					tabBarActiveTintColor: colors.yellow,
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabsNavigator;
