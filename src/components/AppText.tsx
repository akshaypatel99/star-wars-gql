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
	const [SFloaded] = useFonts({
		SFDistantGalaxy: require('../../assets/fonts/SFDistantGalaxy.ttf'),
	});
	const [FGloaded] = useFonts({
		FranklinGothic: require('../../assets/fonts/FranklinGothic.ttf'),
	});

	let headingStyle =
		heading && SFloaded
			? {
					fontFamily: 'SFDistantGalaxy',
					textAlign: 'center',
			  }
			: FGloaded
			? { fontFamily: 'FranklinGothic' }
			: defaultStyles.font;

	return (
		<Text style={[defaultStyles.text, headingStyle, style]} {...otherProps}>
			{children}
		</Text>
	);
};

export default AppText;
