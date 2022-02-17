import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    backgroundColor: 'lightgrey',
    padding: 24,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  logos: {
    width: 50,
    height: 50,
    borderRadius: 48,
    borderColor: '#018786',
    borderWidth: 1,
  },
  title: {
    fontSize: 22,
    textShadowColor: '#018786',
    textShadowRadius: 4,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 12,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flex: 3,
    justifyContent: 'center',
  },
});
export default styles;
