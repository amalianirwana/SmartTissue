import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Account, HelpCenter, Next, Signout, Starts} from '../../../assets';
import {Iconinput, Iconlogout} from '../../../assets/icon';

import {colors} from '../../../utils';

const List = ({
  profile,
  onLongPress,
  date,
  name,
  desc,
  onPress,
  type,
  active,
  icon,
}) => {
  const Icon = () => {
    if (icon === 'input') {
      return <Iconinput />;
    }
    if (icon === 'logout') {
      return <Iconlogout />;
    }
    return <Iconlogout />;
  };
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.duaKomponen}>
        <Icon />
        <View style={styles.pisah}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  duaKomponen: {
    flexDirection: 'row',
  },
  pisah: {
    marginHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#FDA45E',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D78080',
  },
  userProfile: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  textdesc: {
    color: '#7D8797',
  },
});
