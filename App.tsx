import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PeopleScreen from './src/screens/PeopleScreen';

// Initialize Apollo Client
const client = new ApolloClient({
	uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<SafeAreaView style={styles.container}>
				<Text>Star Wars Characters</Text>
				<PeopleScreen />
				<StatusBar style='auto' />
			</SafeAreaView>
		</ApolloProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
