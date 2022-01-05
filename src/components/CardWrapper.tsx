import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

type CardWrapperProps = {
	children: ReactNode;
	index: number;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ children, index }) => {
	return (
		<View
			style={[
				styles.card,
				{ borderColor: index % 2 === 0 ? colors.blue : colors.lightblue },
			]}
		>
			{children}
		</View>
	);
};

export default CardWrapper;

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.gray,
		borderRadius: 20,
		borderWidth: 5,
		// borderColor: 'white',
		marginVertical: 10,
		padding: 20,
		width: 280,
		alignSelf: 'center',
	},
});
