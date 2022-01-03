import { ReactNode } from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';

type AppTextProps = {
	children: ReactNode;
	style?: {};
	otherProps?: [];
};

const AppText: React.FC<AppTextProps> = ({
	children,
	style,
	...otherProps
}) => {
	return (
		<Text style={[defaultStyles.text, style]} {...otherProps}>
			{children}
		</Text>
	);
};

export default AppText;
