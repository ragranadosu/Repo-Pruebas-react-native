import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StackActions } from '@react-navigation/native';

import DetailsScreen from './components/screens/DetailsScreen'

//Aqui empieza codigo

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details',{
          itemId: 1,
          otro: 'hola'
        })}
      />
    </View>
  );
}

/*function DetailsScreen({route,navigation}) {

  const {itemId} = route.params;
  const {otro} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>id: {JSON.stringify(itemId)}</Text>
      <Text>otro: {JSON.stringify(otro)}</Text>
      <Button
        title="Go to Details... again"
        onPress = {() => navigation.push('Details')}
      />
      <Button title="Go Back" onPress = {() => navigation.goBack()}/>
      <Button title="Go to Home" onPress = {() => navigation.navigate('Home')} />
      <Button title = "Go to first in Stack" onPress = {() => navigation.popToTop()} />
      <Button title="Change Params" onPress = {() => navigation.setParams({itemId: 2, otro: 'asi es'})}/>
    </View>
  );
}*/

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
