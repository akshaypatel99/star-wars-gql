import { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
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
					allStarships: relayStylePagination(),
				},
			},
		},
	}),
});

export default function App() {
	const [isReady, setIsReady] = useState(false);

	async function prepare() {
		await SplashScreen.preventAutoHideAsync();
		await Font.loadAsync({
			SFDistantGalaxy: require('./assets/fonts/SFDistantGalaxy.ttf'),
			FranklinGothic: require('./assets/fonts/FranklinGothic.ttf'),
		});
		setIsReady(true);
	}

	useEffect(() => {
		prepare();
	}, []);

	if (!isReady) {
		return <AppLoading />;
	}

	if (isReady) {
		async () => {
			await SplashScreen.hideAsync();
		};
	}

	return (
		<ApolloProvider client={client}>
			<NavigationContainer>
				<BottomTabsNavigator />
			</NavigationContainer>
		</ApolloProvider>
	);
}
