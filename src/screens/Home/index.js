import React from 'react';
import {
  Text,
  SafeAreaView,
  Button,
  FlatList,
  Linking,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import DATA from './data';
const Home = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Details', { data: item });
            }}
            style={styles.card}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.logos} />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.title}>{item.name}</Text>
              <Text
                onPress={() => {
                  Linking.openURL(`${item?.profile}`);
                }}
                style={styles.linkText}
              >
                {'Profile Link'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.MemberId}
      />
    </View>
  );
};

export default Home;
