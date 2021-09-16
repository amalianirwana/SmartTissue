import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListBiaya = ({jumlah, harga}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Pengisian ${jumlah} : ${harga}`}</Text>
    </View>
  );
};

export default ListBiaya;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F97D48',
    padding: 20,
    borderRadius: 10,
    marginTop: 15,
  },
  text: {
    color: 'white',
  },
});
