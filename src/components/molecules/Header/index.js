import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconPanah} from '../../../assets/icon';

const Header = ({type, onPress, title}) => {
  if (type === 'dashboard') {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container1}>
      <TouchableOpacity onPress={onPress}>
        <IconPanah />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 73,
    height: 67,
    flexDirection: 'row',
    paddingHorizontal: 17,
  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 73,
    height: 67,
    flexDirection: 'row',
    paddingHorizontal: 17,
    width: '100%',
  },
  text: {textAlign: 'center', flex: 1, fontSize: 20, color: '#D78080'},
});
