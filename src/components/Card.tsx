import { View } from 'react-native';
import { PersonType } from '../screens/PeopleScreen';
import Text from '../components/AppText';
import defaultStyles from '../config/styles';
import CardWrapper from './CardWrapper';

type CardProps = {
	person: PersonType;
	index: number;
};

const Card: React.FC<CardProps> = ({ person, index }) => {
	return (
		<CardWrapper index={index}>
			<View style={defaultStyles.cardInfo}>
				<Text heading style={defaultStyles.cardHeader}>
					{person.name}
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Gender:</Text>
				<Text>{person.gender}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Height:</Text>
				<Text style={{ textTransform: 'none' }}>{person.height} cm</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Birth Year:</Text>
				<Text style={{ textTransform: 'uppercase' }}>{person.birthYear}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Home world:</Text>
				<Text>{person.homeworld.name}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Species:</Text>
				<Text>{person.species ? person.species.name : 'Unknown'}</Text>
			</View>
			{person.starshipConnection.starships.length > 1 && (
				<View style={defaultStyles.cardInfo}>
					<Text style={defaultStyles.labelText}>Starships:</Text>
					{person.starshipConnection.starships.map((starship, index) => (
						<Text key={index} style={{ marginBottom: 5 }}>
							- {starship.name}
						</Text>
					))}
				</View>
			)}
		</CardWrapper>
	);
};

export default Card;
