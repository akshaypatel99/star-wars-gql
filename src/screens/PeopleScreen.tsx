import { View, Text, FlatList, StyleSheet } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import Card from '../components/Card';
import defaultStyles from '../config/styles';

export type PersonType = {
	id: string;
	name: string;
	gender: string;
	height: number;
	eyeColor: string;
	homeworld: {
		name: string;
	};
	species: {
		name: string;
	};
};

interface PeopleData {
	allPeople: {
		people: PersonType[];
	};
}

const PEOPLE_QUERY = gql`
	query People {
		allPeople {
			people {
				id
				name
				gender
				height
				eyeColor
				homeworld {
					name
				}
				species {
					name
				}
			}
		}
	}
`;

const PeopleScreen = () => {
	const { data, loading } = useQuery<PeopleData>(PEOPLE_QUERY);

	if (loading) {
		return (
			<View>
				<Text>Loading data...</Text>
			</View>
		);
	}

	if (data) {
		console.log(data.allPeople.people.slice(0, 5));
	}

	return (
		<View style={defaultStyles.container}>
			<FlatList
				data={data?.allPeople.people}
				renderItem={({ item }) => <Card person={item} />}
				keyExtractor={(item) => item.id}
			/>
		</View>
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
