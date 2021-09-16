import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';

const EditAlat = ({navigation, route}) => {
  const detailData = route.params;
  const [alat, setAlat] = useState({
    merek: '',
    lokasi: '',
    harga: '',
  });

  const [itemHarga] = useState([
    {
      id: 1,
      label: 'Rp10.000',
      value: '10000',
    },
    {
      id: 2,
      label: 'Rp8.000',
      value: '8000',
    },
  ]);
  const [itemMerek] = useState([
    {
      id: 1,
      label: 'Nice',
      value: 'nice',
    },
    {
      id: 2,
      label: 'Paseo',
      value: 'paseo',
    },
  ]);
  const changeText = (key, value) => {
    setAlat({
      ...detailData,
      [key]: value,
    });
  };
  const SimpanAlat = () => {
    console.log('s');
  };
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Header title="Edit Alat" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Input
            label="Merek Tisu"
            select
            selectItem={itemMerek}
            onChangeText={value => changeText('merek', value)}
            value={detailData.merek}
          />
          <Gap height={20} />
          <Input
            placeholder="pilih harga"
            label="Harga Tisu"
            value={detailData.harga}
            onChangeText={value => changeText('harga', value)}
            select
            selectItem={itemHarga}
          />
          <Gap height={20} />
          <Input
            placeholder="Lokasi Alat Tisu"
            label="Lokasi Alat Tisu"
            onChangeText={value => changeText('lokasi', value)}
            value={detailData.lokasi}
          />

          <Gap height={20} />
          <Input
            placeholder="Buat ID Tisu Baru"
            label="ID Tisu"
            onChangeText={value => changeText('idTisu', value)}
            value={detailData.idTisu}
          />
          <Gap height={20} />
          <View>
            <Button title="Simpan Perubahan" onPress={SimpanAlat} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditAlat;

const styles = StyleSheet.create({
  header: {alignItems: 'center'},
  page: {
    flex: 1,
    backgroundColor: '#F9F8F0',
  },
  container: {
    marginHorizontal: 19,
    marginTop: 20,
  },
});
