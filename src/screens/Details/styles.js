import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  container: { flex: 1 },
  tlinkText: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 12,
  },
  image: {
    width: screenWidth - 32,
    height: screenHeight / 3,
    resizeMode: 'contain',
    borderWidth: 0.5,
    borderColor: 'black',
  },
  title: {
    fontSize: 22,
    textShadowColor: '#018786',
    textShadowRadius: 4,
  },
  description: {
    fontSize: 15,
    color: 'blue',
    fontStyle: 'italic',
  },
  memberDetails: {
    fontSize: 22,
    textShadowColor: 'lightblue',
    textShadowRadius: 2,
    color: 'blue',
  },
});
export default styles;
