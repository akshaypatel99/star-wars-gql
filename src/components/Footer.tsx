import { View } from 'react-native';
import Text from './AppText';
import defaultStyles from '../config/styles';

const Footer: React.FC = () => {
	return (
		<View>
			<Text heading style={defaultStyles.footer}>
				The End
			</Text>
		</View>
	);
};

export default Footer;
