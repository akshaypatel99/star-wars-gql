import { View, Text, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client';

type Person = {
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
		people: Person[];
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
		console.log(data.allPeople.people);
	}

	return (
		<View>
			<Text></Text>
			<FlatList
				data={data?.allPeople.people}
				renderItem={({ item }) => (
					<View>
						<Text>{item.name}</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default PeopleScreen;
