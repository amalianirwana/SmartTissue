import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';
import {Fire} from '../../config';
import {useForm} from '../../utils';
import {Loading} from '../../components/molecules';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);
  const login = () => {
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        Fire.database()
          .ref('Tisu/')
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              setLoading(false);
              navigation.reset({
                index: 0,
                routes: [{name: 'MainApp'}],
              });
            }
          });
      })
      .catch(err => {
        const errorMessage = err.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogo />
          <Text style={styles.title}>Masuk Dan Mulai Monitoring</Text>
          <Input
            placeholder="Masukkan Email Anda"
            label="Email Addres"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            placeholder="Password"
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={10} />
          <Link title="Forget My Password" size={12} />
          <Gap height={40} />
          <Button title="Sign In" onPress={login} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: '#FFCE82', flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
