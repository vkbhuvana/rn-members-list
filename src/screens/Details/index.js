import React from 'react';
import { Text, SafeAreaView, Button, Image, View, Linking } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

const Details = props => {
  const { data } = props.route.params;
  const {
    image,
    name,
    description,
    company,
    createdAt,
    type,
    role,
    tier,
    lastTransactionAt,
    lastTransactionAmount,
    twitter,
    github,
    website,
  } = data;
  const renderSocialIcon = (
    text,
    link = 'https://www.google.co.in',
    icon = 'twitter',
    color = '#000000',
  ) => {
    return (
      <View style={{ alignItems: 'center' }}>
        <AntDesign name={icon} size={24} color={color} />
        <Text
          onPress={() => {
            Linking.openURL(link);
          }}
          style={styles.tlinkText}
        >
          {text}
        </Text>
      </View>
    );
  };
  const renderTableRow = obj => {
    const { title, value, valueType, dollar } = obj;
    const formattedValue =
      valueType && valueType === 'created'
        ? moment(value).format('D MMM YYYY')
        : valueType && valueType === 'transaction'
        ? moment(value).format('D MMM YYYY h:mm a')
        : value;
    return (
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 32,
            borderColor: 'grey',
            borderWidth: 0.5,
          }}
        >
          <Text>{title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 32,
            borderColor: 'grey',
            borderWidth: 0.5,
          }}
        >
          {value &&
            !dollar &&
            ['created', 'transaction'].includes(valueType) && (
              <Text>{formattedValue}</Text>
            )}
          {value &&
            !dollar &&
            !['created', 'transaction'].includes(valueType) && (
              <Text style={{ textTransform: 'capitalize' }}>
                {formattedValue}
              </Text>
            )}
          {!value && <Text>{'NA'}</Text>}
          {value && dollar && <Text>{`$ ${value}`}</Text>}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}> {name}</Text>
      <Text style={styles.description}> {description || 'NA'}</Text>
      <Text style={styles.description}>{company || 'NA'}</Text>
      <View>
        <Text style={styles.memberDetails}>{'Member Details'}</Text>
      </View>
      {renderTableRow({
        title: 'Created at',
        value: createdAt,
        valueType: 'created',
      })}
      {renderTableRow({ title: 'Type', value: type })}
      {renderTableRow({ title: 'Role', value: role })}
      {renderTableRow({ title: 'Tier', value: tier })}
      {renderTableRow({
        title: 'Last Transaction',
        value: lastTransactionAt,
        valueType: 'transaction',
      })}
      {renderTableRow({
        title: 'Last Transaction Amount',
        value: lastTransactionAmount,
        dollar: true,
      })}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 16,
        }}
      >
        {renderSocialIcon('Twitter', twitter, 'twitter', '#1DA1F2')}
        {renderSocialIcon('Github', github, 'github', '#14171A')}
        {renderSocialIcon('Website', website, 'earth', '#DB4437')}
      </View>
    </SafeAreaView>
  );
};

export default Details;
