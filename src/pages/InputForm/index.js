import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {useForm} from '../../utils';

const InputForm = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    category: '',
    email: '',
    password: '',
    gender: 'pria',
  });
  const [loading, setLoading] = useState(false);
  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1}}>
      <View style={styles.header}>
        <Header title="Tambah Alat" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.container}>
        <Input
          placeholder="Merek Tisu"
          label="Merek Tisu"
          onChangeText={value => setForm('fullName', value)}
          value={form.fullName}
        />
        <Gap height={20} />
        <Input
          placeholder="Harga Tisu"
          label="Harga Tisu"
          onChangeText={value => setForm('fullName', value)}
          value={form.fullName}
        />
        <Gap height={20} />
        <Input
          placeholder="Lokasi Alat Tisu"
          label="Lokasi Alat Tisu"
          onChangeText={value => setForm('fullName', value)}
          value={form.fullName}
        />
        <Gap height={20} />
        <Input
          placeholder="Ukuran Tisu"
          label="Ukuran Tisu"
          onChangeText={value => setForm('fullName', value)}
          value={form.fullName}
        />
        <Gap height={20} />
        <View>
          <Button title="Tambahkan Alat" />
        </View>
      </View>
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
