import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Iconnice,
  Iconpaseo,
  Iconcoinharga,
  PengisianTisu,
  PengisianEstimasi,
} from '../../../assets/icon';
import {Gap} from '../../atoms';

const ItemTisu = ({gambar, title, subTitle}) => {
  const Icon = () => {
    if (gambar === 'nice') {
      return <Iconnice />;
    } else if (gambar === 'paseo') {
      return <Iconpaseo />;
    } else if (gambar === 'coin') {
      return <Iconcoinharga />;
    } else if (gambar === 'pengisian') {
      return <PengisianTisu />;
    } else if (gambar === 'pengisianEstimasi') {
      return <PengisianEstimasi />;
    } else {
      return <View />;
    }
  };
  return (
    <View style={styles.container}>
      <Gap height={5} />
      <Text>{title}</Text>
      <Icon />
      <Gap height={5} />
      <Text>{subTitle}</Text>
    </View>
  );
};

export default ItemTisu;

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
