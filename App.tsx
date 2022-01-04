import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { NavigationContainer } from '@react-navigation/native';

import PeopleScreen from './src/screens/PeopleScreen';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';

// Initialize Apollo Client
const client = new ApolloClient({
	uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					allPeople: relayStylePagination(),
				},
			},
		},
	}),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<BottomTabsNavigator />
			</NavigationContainer>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
