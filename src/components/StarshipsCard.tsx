import { View } from 'react-native';
import { StarshipType } from '../screens/StarshipsScreen';
import Text from '../components/AppText';
import defaultStyles from '../config/styles';
import CardWrapper from './CardWrapper';

type StarshipsCardProps = {
	starship: StarshipType;
	index: number;
};

const StarshipsCard: React.FC<StarshipsCardProps> = ({ starship, index }) => {
	return (
		<CardWrapper index={index}>
			<View style={defaultStyles.cardInfo}>
				<Text heading style={defaultStyles.cardHeader}>
					{starship.name}
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>No. Crew:</Text>
				<Text>{starship.crew}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>No. Passengers:</Text>
				<Text>{starship.passengers.toLocaleString()}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Manufacturers:</Text>
				{starship.manufacturers.map((company, index) => (
					<Text key={index}>{company}</Text>
				))}
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Model:</Text>
				<Text>{starship.model}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Starship Class:</Text>
				<Text>{starship.starshipClass} km</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Hyperdrive Rating:</Text>
				<Text>{starship.hyperdriveRating}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Megalights per hour:</Text>
				<Text>{starship.MGLT}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Length:</Text>
				<Text style={{ textTransform: 'none' }}>
					{starship.length.toLocaleString()} m
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Cargo capacity:</Text>
				<Text style={{ textTransform: 'none' }}>
					{starship.cargoCapacity ? starship.cargoCapacity.toLocaleString() : 0}{' '}
					kg
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Consumables capacity:</Text>
				<Text>{starship.consumables}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Cost in Galactic Credits:</Text>
				<Text>
					{starship.costInCredits ? starship.costInCredits.toLocaleString() : 0}
				</Text>
			</View>
		</CardWrapper>
	);
};

export default StarshipsCard;
