import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEB276',
    paddingVertical: 10,
    borderRadius: 15,
  },
  text: {fontSize: 15, fontWeight: '600', textAlign: 'center', color: 'white'},
});
