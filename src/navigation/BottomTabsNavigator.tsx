import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Icon imports
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Screen component imports
import PeopleScreen from '../screens/PeopleScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import StarshipsScreen from '../screens/StarshipsScreen';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
	return (
		<BottomTabs.Navigator screenOptions={{ headerShown: false }}>
			<BottomTabs.Screen
				name='Characters'
				component={PeopleScreen}
				options={{
					tabBarLabel: 'Characters',
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name='jedi' size={24} color='black' />
					),
				}}
			/>
			<BottomTabs.Screen
				name='Planets'
				component={PlanetsScreen}
				options={{
					tabBarLabel: 'Planets',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='planet' size={24} color='black' />
					),
				}}
			/>
			<BottomTabs.Screen
				name='Starships'
				component={StarshipsScreen}
				options={{
					tabBarLabel: 'Starships',
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name='death-star' size={24} color='black' />
					),
				}}
			/>
		</BottomTabs.Navigator>
	);
};

export default BottomTabsNavigator;
