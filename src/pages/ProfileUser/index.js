import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Iconavatar} from '../../assets/icon';

import {Gap, List, Profile, Header} from '../../components';

import {Fire} from '../../config';

const ProfileUser = ({navigation, route}) => {
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

      <Profile name="Admin" desc="Penjaga" photo={Iconavatar} />

      <Gap height={14} />
      <List
        name="Tambah Alat"
        icon="input"
        onPress={() => navigation.navigate('InputForm')}
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
