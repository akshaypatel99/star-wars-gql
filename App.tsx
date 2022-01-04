import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import PeopleScreen from './src/screens/PeopleScreen';
import Text from './src/components/AppText';

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
			<SafeAreaView style={styles.container}>
				<PeopleScreen />
				<StatusBar style='auto' />
			</SafeAreaView>
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
