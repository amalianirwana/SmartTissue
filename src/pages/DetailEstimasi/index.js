import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {DetailEstimasiLogo, ILEstimasi} from '../../assets';
import {Button, Gap} from '../../components';
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
  for (let i = 0; i < data.length; i++) {
    let nilaiInt = data[i].data.dataharga;
    newDataEstimasi.push({
      harga: nilaiInt,
    });
  }

  const datahargaEstimasi = newDataEstimasi.reduce((accumulator, {harga}) => {
    return accumulator + harga;
  }, 0);

  console.log('data', detailData);
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
        <View>
          <Text>Detail Biaya Bulan September</Text>
          <Gap height={10} />
          <View>
            <Text>Pengisian 1 : Rp8000</Text>
          </View>
          <Gap height={10} />
          <View>
            <Text>Pengisian 2 : Rp8000</Text>
          </View>
          <Gap height={10} />
          <View>
            <Text>Pengisian 3 : Rp10000</Text>
          </View>
          <Gap height={10} />
          <View>
            <Text>Pengisian 4 : Rp10000</Text>
          </View>
        </View>
        <View>
          <Gap height={30} />
        </View>
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
    padding: 35,
  },
  header: {alignItems: 'center'},
  titel: {textAlign: 'center'},
  item: {flexDirection: 'row', justifyContent: 'space-between'},
});
