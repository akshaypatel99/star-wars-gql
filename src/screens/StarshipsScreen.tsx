import { View, SafeAreaView, FlatList } from 'react-native';
import Text from '../components/AppText';
import { gql, useQuery } from '@apollo/client';
import Card from '../components/StarshipsCard';
import defaultStyles from '../config/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Error from '../components/Error';

export type StarshipType = {
	id: string;
	name: string;
	crew: string;
	passengers: string;
	manufacturers: string[];
	model: string;
	starshipClass: string;
	hyperdriveRating: number;
	MGLT: number;
	length: number;
	cargoCapacity: number;
	consumables: string;
	costInCredits: number;
};

type StarshipNode = {
	node: StarshipType;
	cursor: string;
};

interface StarshipData {
	allStarships: {
		edges: StarshipNode[];
		pageInfo: {
			endCursor: string;
			hasNextPage: boolean;
		};
	};
}

const STARSHIPS_QUERY = gql`
	query Starships($after: String) {
		allStarships(first: 5, after: $after) {
			edges {
				node {
					id
					name
					crew
					passengers
					manufacturers
					model
					starshipClass
					hyperdriveRating
					MGLT
					length
					cargoCapacity
					consumables
					costInCredits
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

const StarshipsScreen: React.FC = () => {
	const { data, error, loading, fetchMore } =
		useQuery<StarshipData>(STARSHIPS_QUERY);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <Error error={error} />;
	}

	const nodes = data?.allStarships.edges;
	const pageInfo = data?.allStarships.pageInfo;
	const first = 5;

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
				renderItem={({ item, index }) => (
					<Card starship={item.node} index={index} />
				)}
				keyExtractor={(item) => item.cursor}
				contentContainerStyle={{ flexGrow: 1 }}
				initialNumToRender={5}
				onEndReachedThreshold={0.5}
				onEndReached={onLoadMore}
				ListFooterComponent={<Footer />}
				ListHeaderComponent={<Header textInput='Starships' />}
			/>
		</SafeAreaView>
	);
};

export default StarshipsScreen;
