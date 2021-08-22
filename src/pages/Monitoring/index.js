import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, JadwalLokasiTandon, LokasiTandon} from '../../components/atoms';
import Header from '../../components/molecules/Header';
import LokasiTisu from '../../components/molecules/LokasiTisu';
import {Fire} from '../../config';
const Monitoring = ({navigation}) => {
  const [dataTisue, setDataTisu] = useState([]);
  useEffect(() => {
    let unmounted = false;
    Fire.database()
      .ref('Tisu/')
      .on('value', snapshot => {
        console.log('data monitoring snapp', snapshot.val());
        if (snapshot.val()) {
          const oldData = snapshot.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          if (!unmounted) {
            setDataTisu(data);
          }
        }
      });
    return () => {
      unmounted = true;
    };
  }, []);
  console.log('Datatisu', dataTisue);
  return (
    <View style={styles.container}>
      <Header type="dashboard" title="All Location" />
      <ScrollView>
        <View style={styles.image} />
        <Text style={styles.title}>Lokasi Box Tisu :</Text>
        <View style={styles.content}>
          {dataTisue.map(item => {
            return (
              <LokasiTisu
                key={item.id}
                data={item.data.jumlahtisu}
                tempat={item.data.tempat}
                onPress={() => navigation.navigate('DetailTisu', item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Monitoring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F8F0',
  },
  image: {
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 30,
  },
  content: {
    paddingHorizontal: 19,
    paddingTop: 5,
  },
  title: {
    paddingHorizontal: 19,
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 19,
  },
});
