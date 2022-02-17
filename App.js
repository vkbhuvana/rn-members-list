// library imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';

// components
import Header from './src/components/Header';

// imported methods
const Stack = createNativeStackNavigator();

// constants
import strings from './src/constants';

// destructure
const { HOME, DETAILS, MEMBERS } = strings;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME} showIcon={true}>
        <Stack.Screen
          name={HOME}
          component={HomeScreen}
          options={{
            title: MEMBERS,
            headerRight: () => <Header />,
          }}
        />
        <Stack.Screen
          name={DETAILS}
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
