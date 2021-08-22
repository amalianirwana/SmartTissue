import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Iconcoin, IconEmpty, IconExist, IconLokasi} from '../../../assets/icon';
import {Gap} from '../../atoms';

const ItemMonitoring = ({gambar, title, subTitle}) => {
  const Icon = () => {
    if (gambar === 'empty') {
      return <IconEmpty />;
    } else if (gambar === 'exist') {
      return <IconExist />;
    } else if (gambar === 'coin') {
      return <Iconcoin />;
    } else {
      return <IconLokasi />;
    }
  };
  return (
    <View style={styles.container}>
      <Icon />
      <Gap height={8} />
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
  );
};

export default ItemMonitoring;

const styles = StyleSheet.create({
  container: {
    width: 151,
    height: 135,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
