import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';

// Initialize Apollo Client
const client = new ApolloClient({
	uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					allPeople: relayStylePagination(),
					allPlanets: relayStylePagination(),
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
