import { SafeAreaView, View } from 'react-native';
import Text from './AppText';
import defaultStyles from '../config/styles';

type ErrorProps = {
	error?: {
		message: string;
	};
};

const Error: React.FC<ErrorProps> = ({ error }) => {
	return (
		<SafeAreaView style={defaultStyles.container}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text>Something went wrong: {error && error.message}</Text>
			</View>
		</SafeAreaView>
	);
};

export default Error;
