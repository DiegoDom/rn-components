import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
};

export const FlatListMenuItem = ({ menuItem }: Props) => {

  const { icon, name, component } = menuItem;

  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={ () => navigation.navigate(component as any) }>
      <View style={ styles.container }>
        <Icon name={ icon } color='gray' size={23}/>
        <Text style={ styles.itemText }>{ name }</Text>
        <View style={{ flex: 1 }} />
        <Icon name='chevron-forward-outline' color='gray' size={23}/>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row'
    },
    itemText: {
      marginLeft: 10,
      fontSize: 19
    },

});
