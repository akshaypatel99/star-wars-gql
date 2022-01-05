import { ReactNode } from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

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
	let headingStyle = heading
		? {
				fontFamily: 'SFDistantGalaxy',
				textAlign: 'center',
		  }
		: { fontFamily: 'FranklinGothic' };

	return (
		<Text style={[defaultStyles.text, headingStyle, style]} {...otherProps}>
			{children}
		</Text>
	);
};

export default AppText;
