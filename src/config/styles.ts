import { Platform, StatusBar } from 'react-native';

import colors from './colors';

export default {
  card: {
		borderRadius: 20,
		borderWidth: 5,
		borderColor: 'white',
		marginVertical: 10,
		padding: 20,
		width: '80%',
		alignSelf: 'center',
	},
	cardHeader: {
		fontSize: 24,
		textTransform: 'uppercase',
	},
	cardInfo: {
		marginVertical: 5,
	},
  colors,
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: colors.black,
  },
  font: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
  },
  footer: {
    fontSize: 18,
    textAlign: 'center'
  },
  header: {
    fontSize: 36,
    marginVertical: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  labelText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
    textTransform: 'capitalize',
    fontWeight: '600',
    marginBottom: 3
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
}