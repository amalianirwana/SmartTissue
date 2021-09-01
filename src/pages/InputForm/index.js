import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, Input} from '../../components';
import {Fire} from '../../config';
import {useForm} from '../../utils';

const InputForm = ({navigation}) => {
  const [form, setForm] = useForm({
    merek: '',
    harga: 'Select',
    lokasi: '',
    idTisu: '',
    databaca: 'tidak',
    jumlahtisu: '',
  });
  const [loading, setLoading] = useState(false);

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

  const KirimDatabaseIdAlat = () => {
    if (
      form.merek !== '' &&
      form.harga !== '' &&
      form.lokasi !== '' &&
      form.idTisu !== ''
    ) {
      Fire.database().ref(`Tisu/${form.idTisu}/`).set(form);
      navigation.reset({
        index: 0,
        routes: [{name: 'MainApp'}],
      });
    } else {
      showMessage({
        message: 'anda Belum Masukan data',
        type: 'default',
        backgroundColor: 'red',
        color: 'white',
      });
    }
  };

  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1}}>
      <View style={styles.header}>
        <Header title="Tambah Alat" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Input
            label="Merek Tisu"
            select
            selectItem={itemMerek}
            onValueChange={value => setForm('merek', value)}
            value={form.merek}
          />
          <Gap height={20} />
          <Input
            placeholder="pilih harga"
            label="Harga Tisu"
            value={form.harga}
            onValueChange={value => setForm('harga', value)}
            select
            selectItem={itemHarga}
          />
          <Gap height={20} />
          <Input
            placeholder="Lokasi Alat Tisu"
            label="Lokasi Alat Tisu"
            onChangeText={value => setForm('lokasi', value)}
            value={form.lokasi}
          />

          <Gap height={20} />
          <Input
            placeholder="Buat ID Tisu Baru"
            label="ID Tisu"
            onChangeText={value => setForm('idTisu', value)}
            value={form.idTisu}
          />
          <Gap height={20} />
          <View>
            <Button title="Tambahkan Alat" onPress={KirimDatabaseIdAlat} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  header: {alignItems: 'center'},
  container: {
    marginHorizontal: 20,
  },
});
