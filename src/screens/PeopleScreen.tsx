import { View, Text } from 'react-native';
import { gql, useQuery } from '@apollo/client';

type Person = {
	name: string;
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
				name
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
		console.log(data.allPeople);
	}

	return (
		<View>
			<Text></Text>
		</View>
	);
};

export default PeopleScreen;
