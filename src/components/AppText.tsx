import { ReactNode } from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import defaultStyles from '../config/styles';
import colors from '../config/colors';

type AppTextProps = {
	children: ReactNode;
	style?: {};
	heading?: boolean;
	otherProps?: [];
};

const AppText: React.FC<AppTextProps> = ({
	children,
	style,
	heading = false,
	...otherProps
}) => {
	const [loaded] = useFonts({
		SFDistantGalaxy: require('../../assets/fonts/SFDistantGalaxy.ttf'),
	});

	let headingStyle =
		heading && loaded
			? {
					fontFamily: 'SFDistantGalaxy',
					textAlign: 'center',
			  }
			: defaultStyles.font;

	return (
		<Text style={[defaultStyles.text, headingStyle, style]} {...otherProps}>
			{children}
		</Text>
	);
};

export default AppText;
