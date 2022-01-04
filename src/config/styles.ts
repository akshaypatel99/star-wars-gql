import { Platform, StatusBar } from 'react-native';

import colors from './colors';

export default {
  card: {
		borderRadius: 20,
		borderWidth: 5,
		borderColor: 'white',
		marginVertical: 10,
		padding: 20,
		width: 280,
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
    fontSize: 32,
    marginVertical: 10,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  labelText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
    textTransform: 'capitalize',
    fontWeight: 'normal'
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
}