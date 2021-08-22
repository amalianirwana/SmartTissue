import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILEstimasi} from '../../assets';
import {Gap} from '../../components';
import {Header, ItemTisu} from '../../components/molecules';
const DetailTisu = ({navigation, route}) => {
  const detailData = route.params;
  console.log('data', detailData);
  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1}}>
      <View style={styles.header}>
        <Header title="Detail Tisu" onPress={() => navigation.goBack()} />
        <ILEstimasi />
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <ItemTisu gambar={detailData.data.merektisu} title="Merek Tissue" />
          <ItemTisu
            gambar="coin"
            title="Harga Tissue"
            subTitle={`Rp.${detailData.data.hargatisu}`}
          />
        </View>
        <Gap height={40} />
        <View style={styles.item}>
          <ItemTisu
            title="Ukuran"
            subTitle={`berat : ${detailData.data.ukuran}`}
          />
          <ItemTisu
            title="Stok Tissue"
            subTitle={`${detailData.data.jumlahtisu}`}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailTisu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FED799',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
  },
  header: {alignItems: 'center'},
  titel: {textAlign: 'center'},
  item: {flexDirection: 'row', justifyContent: 'space-between'},
});
