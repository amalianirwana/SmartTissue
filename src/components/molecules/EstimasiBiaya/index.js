import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EstimasiDashboard} from '../../../assets/icon';

const EstimasiBiaya = ({data, onPress, tempat, harga}) => {
  console.log('fasaaaa', data);
  const EstimasiBulan = () => {
    if (data === '1') {
      var bulan = 'Januari';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '2') {
      var bulan = 'Februari';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '3') {
      var bulan = 'Maret';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '4') {
      var bulan = 'April';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '5') {
      var bulan = 'Mei';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '6') {
      var bulan = 'Juni';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '7') {
      var bulan = 'Juli';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '8') {
      var bulan = 'Agustus';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '9') {
      var bulan = 'September';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '10') {
      var bulan = 'Oktober';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '11') {
      var bulan = 'November';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    } else if (data === '12') {
      var bulan = 'Desember';
      return <Text style={styles.title}>{`Bulan ${bulan}`}</Text>;
    }
    return (
      <View>
        <Text>tes</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <View>
          <EstimasiBulan />
        </View>

        <EstimasiDashboard />
      </View>
    </TouchableOpacity>
  );
};

export default EstimasiBiaya;

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
    textAlignVertical: 'center',
    flex: 1,

    color: 'white',
  },
  harga: {
    color: 'white',
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
});
