import { View } from 'react-native';
import Text from './AppText';
import defaultStyles from '../config/styles';

type HeaderProps = {
	textInput: string;
};

const Header: React.FC<HeaderProps> = ({ textInput }) => {
	return (
		<View>
			<Text heading style={defaultStyles.header}>
				{textInput}
			</Text>
		</View>
	);
};

export default Header;
