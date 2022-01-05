import { View } from 'react-native';
import { PlanetType } from '../screens/PlanetsScreen';
import Text from '../components/AppText';
import defaultStyles from '../config/styles';
import CardWrapper from './CardWrapper';

type PlanetsCardProps = {
	planet: PlanetType;
	index: number;
};

const PlanetsCard: React.FC<PlanetsCardProps> = ({ planet, index }) => {
	return (
		<CardWrapper index={index}>
			<View style={defaultStyles.cardInfo}>
				<Text heading style={defaultStyles.cardHeader}>
					{planet.name}
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Population:</Text>
				<Text>
					{planet.population ? planet.population.toLocaleString() : 0}
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Climate:</Text>
				{planet.climates.map((climate, index) => (
					<Text key={index}>{climate}</Text>
				))}
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Terrain:</Text>
				{planet.terrains.map((climate, index) => (
					<Text key={index}>{climate}</Text>
				))}
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Surface Water:</Text>
				<Text>{planet.surfaceWater || 0} %</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Diameter:</Text>
				<Text style={{ textTransform: 'none' }}>
					{planet.diameter.toLocaleString()} km
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Gravity:</Text>
				<Text>{planet.gravity}</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Rotation period:</Text>
				<Text style={{ textTransform: 'none' }}>
					{planet.rotationPeriod.toLocaleString()} hours
				</Text>
			</View>
			<View style={defaultStyles.cardInfo}>
				<Text style={defaultStyles.labelText}>Orbital period:</Text>
				<Text style={{ textTransform: 'none' }}>
					{planet.orbitalPeriod.toLocaleString()} days
				</Text>
			</View>
		</CardWrapper>
	);
};

export default PlanetsCard;
