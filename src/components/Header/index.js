import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';
const Header = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/98dgzTC/VKB.jpg' }}
        style={{
          width: 36,
          height: 36,
          borderRadius: 36 / 2,
          borderWidth: 3,
          borderColor: '#018786',
        }}
      />
      <Text>{'Welcome User'}</Text>
    </TouchableOpacity>
  );
};

export default Header;
