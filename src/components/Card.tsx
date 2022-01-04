import { View } from 'react-native';
import { PersonType } from '../screens/PeopleScreen';
import Text from '../components/AppText';
import defaultStyles from '../config/styles';
import CardWrapper from './CardWrapper';

type CardProps = {
	person: PersonType;
};

const Card: React.FC<CardProps> = ({ person }) => {
	return (
		<CardWrapper>
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
				<Text style={defaultStyles.labelText}>Home world:</Text>
				<Text>{person.homeworld.name}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Species:</Text>
				<Text>{person.species ? person.species.name : 'Unknown'}</Text>
			</View>
		</CardWrapper>
	);
};

export default Card;
