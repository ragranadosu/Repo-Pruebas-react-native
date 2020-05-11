import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default function DetailsScreen({route,navigation}) {

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
  }