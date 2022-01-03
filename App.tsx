import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PeopleScreen from './src/screens/PeopleScreen';
import Text from './src/components/AppText';

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
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
