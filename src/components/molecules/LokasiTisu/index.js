import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconTisuHijau,
  IconTisuMerah,
  IconTisuKuning,
} from '../../../assets/icon';
const LokasiTisu = ({
  data,
  onPress,
  tempat,
  databaca,
  kalkulasi1,
  kalkulasi2,
}) => {
  const nilaiKalkulasi = kalkulasi1 + kalkulasi2;
  console.log('nilai tisu', nilaiKalkulasi);
  const Icon = () => {
    if (nilaiKalkulasi === 2) {
      return <IconTisuHijau />;
    } else if (nilaiKalkulasi === 1) {
      return <IconTisuKuning />;
    } else {
      return <IconTisuMerah />;
    }
  };
  const DataBaca = () => {
    if (databaca === 'terbaca') {
      return <Text style={styles.nonaktif}>Tisu di Alat Sudah habis</Text>;
    } else if (databaca === 'tidak') {
      return <Text style={styles.aktif}>Alat Sedang di monitoring</Text>;
    }
    return <Text>None</Text>;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>{tempat}</Text>
          <DataBaca />
        </View>
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
    backgroundColor: '#F97D48',
    paddingVertical: 12,
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
    backgroundColor: '#FED799',
    padding: 8,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    flex: 1,

    color: 'white',
  },
  aktif: {
    color: 'white',
  },
  nonaktif: {
    color: 'white',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
});
