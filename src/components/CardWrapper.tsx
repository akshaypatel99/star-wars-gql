import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

type CardWrapperProps = {
	children: ReactNode;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ children }) => {
	return <View style={styles.card}>{children}</View>;
};

export default CardWrapper;

const styles = StyleSheet.create({
	card: {
		backgroundColor: colors.gray,
		borderRadius: 20,
		borderWidth: 5,
		borderColor: 'white',
		marginVertical: 10,
		padding: 20,
		width: 280,
		alignSelf: 'center',
	},
});
