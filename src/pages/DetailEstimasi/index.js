import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {DetailEstimasiLogo, ILEstimasi} from '../../assets';
import {Button, Gap, ListBiaya} from '../../components';
import {Header, ItemTisu} from '../../components/molecules';
const DetailEstimasi = ({navigation, route}) => {
  const detailData = route.params;

  const oldData = detailData;
  const data = [];
  Object.keys(oldData).map(key => {
    data.push({
      id: key,
      data: oldData[key],
    });
  });

  const pengisian = data.length;

  // set data estimasi semua
  var newDataEstimasi = [];
  var dataBiayaPerbulan = [];
  for (let i = 0; i < data.length; i++) {
    let nilaiInt = data[i].data.dataharga;
    newDataEstimasi.push({
      harga: nilaiInt,
    });
    dataBiayaPerbulan.push({
      harga: nilaiInt,
      bulan: i + 1,
    });
  }

  const datahargaEstimasi = newDataEstimasi.reduce((accumulator, {harga}) => {
    return accumulator + harga;
  }, 0);

  console.log('data', dataBiayaPerbulan);
  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1}}>
      <View style={styles.header}>
        <Header title="Estimasi Biaya" onPress={() => navigation.goBack()} />
        <DetailEstimasiLogo />
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <ItemTisu
            gambar="pengisianEstimasi"
            title="Pengisian Alat"
            subTitle={`${pengisian}x Pengisian`}
          />
          <ItemTisu
            gambar="coin"
            title="Biaya Perbulan"
            subTitle={`Rp${datahargaEstimasi}`}
          />
        </View>
        <Gap height={16} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text>Detail Biaya Bulan September</Text>
            <Gap height={10} />
            {dataBiayaPerbulan.map(res => {
              return (
                <ListBiaya
                  key={res.bulan}
                  jumlah={res.bulan}
                  harga={res.harga}
                />
              );
            })}
          </View>
          <View>
            <Gap height={30} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailEstimasi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FED799',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 18,
  },
  header: {alignItems: 'center'},
  titel: {textAlign: 'center'},
  item: {flexDirection: 'row', justifyContent: 'space-between'},
});
