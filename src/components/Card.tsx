import { StyleSheet, Text, View } from 'react-native';
import { PersonType } from '../screens/PeopleScreen';

type CardProps = {
	person: PersonType;
};

const Card: React.FC<CardProps> = ({ person }) => {
	return (
		<View>
			<Text>Name: {person.name}</Text>
			<Text>Gender: {person.gender}</Text>
			<Text>Height: {person.height}</Text>
			<Text>Eye colour: {person.eyeColor}</Text>
			<Text>Home world: {person.homeworld.name}</Text>
			<Text>Species: {person.species ? person.species.name : 'Unknown'}</Text>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({});
