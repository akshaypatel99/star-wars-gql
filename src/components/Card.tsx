import { StyleSheet, View } from 'react-native';
import { PersonType } from '../screens/PeopleScreen';
import Text from '../components/AppText';
import defaultStyles from '../config/styles';

type CardProps = {
	person: PersonType;
};

const Card: React.FC<CardProps> = ({ person }) => {
	return (
		<View style={styles.card}>
			<View style={styles.cardInfo}>
				<Text style={defaultStyles.labelText}>Name:</Text>
				<Text>{person.name}</Text>
			</View>
			<View style={styles.cardInfo}>
				<Text style={defaultStyles.labelText}>Gender:</Text>
				<Text>{person.gender}</Text>
			</View>
			<View style={styles.cardInfo}>
				<Text style={defaultStyles.labelText}>Height:</Text>
				<Text style={{ textTransform: 'none' }}>{person.height} cm</Text>
			</View>
			<View style={styles.cardInfo}>
				<Text style={defaultStyles.labelText}>Eye colour:</Text>
				<Text>{person.eyeColor}</Text>
			</View>
			<View style={styles.cardInfo}>
				<Text style={defaultStyles.labelText}>Home world:</Text>
				<Text>{person.homeworld.name}</Text>
			</View>
			<View style={styles.cardInfo}>
				<Text style={defaultStyles.labelText}>Species:</Text>
				<Text>{person.species ? person.species.name : 'Unknown'}</Text>
			</View>
		</View>
	);
};

export default Card;

const styles = StyleSheet.create({
	card: {
		borderRadius: 20,
		borderWidth: 6,
		borderColor: 'white',
		marginVertical: 10,
		padding: 20,
		width: 280,
		alignSelf: 'center',
	},
	cardInfo: {
		marginVertical: 5,
	},
});
