import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILEstimasi} from '../../assets';
import {EstimasiBiaya, Gap} from '../../components';
import {Fire} from '../../config';

const Estimated = ({navigation}) => {
  const [dataEstimasi, setDataEstimasi] = useState([]);

  useEffect(() => {
    let unmounted = false;
    Fire.database()
      .ref('estimasi/')
      .on('value', snapshot => {
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
            setDataEstimasi(data);
          }
        }
      });
    return () => {
      unmounted = true;
    };
  }, []);
  console.log('dataEstimasi', dataEstimasi);
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <View style={styles.header}>
        <Text style={styles.textEstimasi}>Estimasi Biaya</Text>
        <Gap height={20} />
        <ILEstimasi />
      </View>
      <Gap height={20} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerFlex}>
        <Text style={styles.title}>Estimasi Biaya Perbulan:</Text>
        <View style={styles.content}>
          {dataEstimasi.map(res => {
            console.log('rses', res.id);
            return (
              <EstimasiBiaya
                key={res.id}
                data={res.id}
                onPress={() => navigation.navigate('DetailEstimasi', res.data)}
              />
            );
          })}
        </View>
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default Estimated;

const styles = StyleSheet.create({
  page: {backgroundColor: '#F9F8F0', flex: 1},
  title: {
    paddingHorizontal: 18,
    fontSize: 15,
    fontFamily: 'Assistant-SemiBold',
    marginBottom: 19,
  },
  containerFlex: {
    backgroundColor: '#FED799',
    flex: 1,
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 35,
  },
  header: {
    alignSelf: 'center',
  },
  textEstimasi: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D78080',
  },
});
