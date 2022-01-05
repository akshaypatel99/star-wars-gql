import { SafeAreaView, View } from 'react-native';
import Text from './AppText';
import defaultStyles from '../config/styles';

const Loader: React.FC = () => {
	return (
		<SafeAreaView style={defaultStyles.container}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Loading data...</Text>
			</View>
		</SafeAreaView>
	);
};

export default Loader;
