import React from 'react';
import {FlatList, Text, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { MenuItem } from '../interfaces/appInterfaces';
import { styles } from '../theme/appTheme';

const menuItems: MenuItem[] = [
   {
     name: 'Animation 101',
     icon: 'cube-outline',
     component: 'Animation101Screen'
   },
   {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen'
  }
 ];

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 15, marginBottom: 15 }}>
        <Text style={ styles.title }>Opciones de menú</Text>
      </View>
    );
  };

  const renderItemSeparator = () => {
    return (
      <View style={ styles.listSeparator } />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={ renderListHeader }
        data={ menuItems }
        renderItem={({item}) => <FlatListMenuItem menuItem={ item } />}
        keyExtractor={ (item) => item.name }
        ItemSeparatorComponent={ renderItemSeparator }
      />
    </View>
  );
};
