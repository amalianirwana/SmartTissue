import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconTisuHijau,
  IconTisuMerah,
  IconTisuKuning,
} from '../../../assets/icon';
const LokasiTisu = ({data, onPress, tempat}) => {
  const Icon = () => {
    if (data === 2) {
      return <IconTisuHijau />;
    } else if (data === 1) {
      return <IconTisuKuning />;
    } else {
      return <IconTisuMerah />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{tempat}</Text>
        <View style={styles.wrapperLogo}>
          <Icon style={styles.logo} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LokasiTisu;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#FED799',
    marginBottom: 18,
    paddingLeft: 13,
    paddingTop: 7,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  wrapperLogo: {
    marginTop: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    flex: 1,
  },
  desc: {
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    color: '#A8A8A8',
    marginTop: -17,
  },
  wrapper: {
    flexDirection: 'row',
    marginRight: 20,
  },
});
