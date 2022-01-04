import { View, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Text from '../components/AppText';
import { gql, useQuery } from '@apollo/client';
import Card from '../components/Card';
import defaultStyles from '../config/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';

export type PersonType = {
	id: string;
	name: string;
	gender: string;
	height: number;
	homeworld: {
		name: string;
	};
	species: {
		name: string;
	};
};

type PersonNode = {
	node: PersonType;
	cursor: string;
};

interface PeopleData {
	allPeople: {
		edges: PersonNode[];
		pageInfo: {
			endCursor: string;
			hasNextPage: boolean;
		};
	};
}

const PEOPLE_QUERY = gql`
	query People($after: String) {
		allPeople(first: 5, after: $after) {
			edges {
				node {
					id
					name
					gender
					height
					homeworld {
						name
					}
					species {
						name
					}
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

const first = 5;

const PeopleScreen: React.FC = () => {
	const { data, error, loading, fetchMore } =
		useQuery<PeopleData>(PEOPLE_QUERY);

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

	const nodes = data?.allPeople.edges;
	const pageInfo = data?.allPeople.pageInfo;

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
				renderItem={({ item }) => <Card person={item.node} />}
				keyExtractor={(item) => item.cursor}
				contentContainerStyle={{ flexGrow: 1 }}
				onEndReachedThreshold={0.5}
				onEndReached={onLoadMore}
				ListFooterComponent={<Footer />}
				ListHeaderComponent={<Header textInput='Characters' />}
			/>
		</SafeAreaView>
	);
};

export default PeopleScreen;

const styles = StyleSheet.create({
	screen: {
		width: '100%',
		height: '100%',
		flex: 1,
		backgroundColor: 'yellow',
	},
});
