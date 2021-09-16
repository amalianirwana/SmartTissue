import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Penghabisan, Putaran} from '../../../assets';
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
    } else if (gambar === 'penghabisan') {
      return <Penghabisan />;
    } else if (gambar === 'putaran') {
      return <Putaran />;
    } else {
      return <View />;
    }
  };
  return (
    <View style={styles.container}>
      <Gap height={10} />
      <Text>{title}</Text>
      <Gap height={5} />
      <Icon />
      <Gap height={5} />
      <Text>{subTitle}</Text>
    </View>
  );
};

export default ItemTisu;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 135,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
