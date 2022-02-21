import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = () => {
  return (
    <View>
      <Icon
        name='home'
        size={ 50 }
        color="black"
      />
    </View>
  );
};
