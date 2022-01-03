import { Platform, StatusBar } from 'react-native';

import colors from './colors';

export default {
  colors,
  text: {
    color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  labelText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Montserrat',
    textTransform: 'capitalize',
    fontWeight: 'normal'
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
}