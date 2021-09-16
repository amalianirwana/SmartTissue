import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Iconavatar} from '../../assets/icon';

import {Gap, List, Profile, Header} from '../../components';

import {Fire} from '../../config';

const ProfileUser = ({navigation, route}) => {
  const [isNumberID, setIsNumberID] = useState([]);
  useEffect(() => {
    let unmounted = false;
    Fire.database()
      .ref('Tisu')
      .on('value', snapshot => {
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
            });
          });
          if (!unmounted) {
            setIsNumberID(data);
          }
        }
      });
    return () => {
      unmounted = true;
    };
  }, []);
  console.log('isnumber', isNumberID);
  const signOut1 = () => {
    Fire.auth()
      .signOut()
      .then(res => {
        console.log('succes sign out', res);
        navigation.reset({
          index: 0,
          routes: [{name: 'GetStarted'}],
        });
      })
      .catch(err => {});
  };
  return (
    <View style={styles.page}>
      <View>
        <Header title="Profile" type="dashboard" />
      </View>
      <Gap height={10} />

      <Profile name="Admin" desc="Pelayan Toilet" photo={Iconavatar} />

      <Gap height={14} />
      <List
        name="Tambah Alat"
        icon="input"
        onPress={() => navigation.navigate('InputForm', isNumberID)}
      />
      <List
        name="Logout"
        desc="Pemakaian Fitur"
        icon="logout"
        onPress={signOut1}
      />
    </View>
  );
};

export default ProfileUser;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#F9F8F0',
    flex: 1,
  },
});
