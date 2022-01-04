import { Platform, StatusBar } from 'react-native';

import colors from './colors';

export default {
  colors,
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  font: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
  },
  footer: {
    fontSize: 18,
    textAlign: 'center'
  },
  header: {
    fontSize: 28,
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