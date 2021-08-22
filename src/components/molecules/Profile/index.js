import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {colors} from '../../../utils';

const Profile = ({name, desc, profile, photo, onPress}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={photo} style={styles.avatar} />
      </View>
      <View>
        <Text style={styles.name(profile)}>{name}</Text>
        <Text style={styles.profession(profile)}>{desc}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderProfile: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: profile => ({
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: profile ? 'white' : 'black',
    marginTop: 16,
  }),
  profession: profile => ({
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: profile ? 'black' : 'black',
    marginTop: 2,
  }),
  removePhoto: {position: 'absolute', right: 8, bottom: 8},
});
