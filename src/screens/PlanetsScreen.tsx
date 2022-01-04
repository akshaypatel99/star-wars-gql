import { View, SafeAreaView, FlatList } from 'react-native';
import Text from '../components/AppText';
import { gql, useQuery } from '@apollo/client';
import Card from '../components/PlanetsCard';
import defaultStyles from '../config/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';

export type PlanetType = {
	id: string;
	name: string;
	population: number;
	climates: string[];
	terrains: string[];
	surfaceWater: number;
	diameter: number;
	gravity: string;
	rotationPeriod: number;
	orbitalPeriod: number;
};

type PlanetNode = {
	node: PlanetType;
	cursor: string;
};

interface PlanetData {
	allPlanets: {
		edges: PlanetNode[];
		pageInfo: {
			endCursor: string;
			hasNextPage: boolean;
		};
	};
}

const first = 5;

const PLANETS_QUERY = gql`
	query Planets($after: String) {
		allPlanets(first: 5, after: $after) {
			edges {
				node {
					id
					name
					population
					climates
					terrains
					surfaceWater
					diameter
					gravity
					rotationPeriod
					orbitalPeriod
				}
				cursor
			}
			pageInfo {
				endCursor
				hasNextPage
			}
		}
	}
`;

const PlanetsScreen: React.FC = () => {
	const { data, error, loading, fetchMore } =
		useQuery<PlanetData>(PLANETS_QUERY);

	if (loading) {
		return (
			<View>
				<Text>Loading data...</Text>
			</View>
		);
	}

	if (error) {
		console.log(error);
		return (
			<View>
				<Text>Something went wrong: {error.message}</Text>
			</View>
		);
	}

	const nodes = data?.allPlanets.edges;
	const pageInfo = data?.allPlanets.pageInfo;

	if (data) {
		console.log(nodes);
		console.log(pageInfo?.endCursor);
		console.log(pageInfo?.hasNextPage);
	}

	const onLoadMore = () => {
		if (pageInfo?.hasNextPage) {
			fetchMore({
				variables: {
					first,
					after: pageInfo.endCursor,
				},
			});
		}
	};

	return (
		<SafeAreaView style={defaultStyles.container}>
			<FlatList
				data={nodes}
				renderItem={({ item }) => <Card planet={item.node} />}
				keyExtractor={(item) => item.cursor}
				contentContainerStyle={{ flexGrow: 1 }}
				onEndReachedThreshold={0.5}
				onEndReached={onLoadMore}
				ListFooterComponent={<Footer />}
				ListHeaderComponent={<Header textInput='Planets' />}
			/>
		</SafeAreaView>
	);
};

export default PlanetsScreen;
