import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDashboard} from '../../assets';
import {Gap} from '../../components';
import {ItemMonitoring} from '../../components/molecules';
import {Fire} from '../../config';
import {getDelay, getMonth} from '../../utils';

const Home = () => {
  const [dataTisue, setDataTisu] = useState([]);
  const [dataEstimasi, setDataEstimasi] = useState({});
  const [semuaTisu, setSemuaTisu] = useState('0');
  const [existTisu, setExistTisu] = useState('0');
  const [emptyTisu, setEmptyTisu] = useState('0');

  const getDay = useMemo(() => {
    const today = new Date();
    var monthEstimated = getMonth(today);
    return monthEstimated;
  }, []);

  useEffect(() => {
    let unmounted = false;
    const today = new Date();
    const delayBefore = getDelay(today);
    console.log('before', delayBefore);
    Fire.database()
      .ref('Tisu/')
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
            const allTisu = data.length;
            const dataExistTisu = data.filter(
              e => e.data.RollA.Kondisi === 1 || e.data.RollB.Kondisi === 1,
            );
            const lengthExistTisu = dataExistTisu.length;
            const emptyTisuData = allTisu - lengthExistTisu;
            setEmptyTisu(emptyTisuData);
            setExistTisu(lengthExistTisu);
            setSemuaTisu(allTisu);
            setDataTisu(data);

            const todayAfter = new Date();
            const delayAfter = getDelay(todayAfter);
            console.log(
              'After Exist tisu dan emmpty tisu dan semua tidus',
              delayAfter,
            );
          }
        }
      });
    Fire.database()
      .ref(`estimasi/${getDay}`)
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
            const todayAfter = new Date();
            const delayAfter = getDelay(todayAfter);
            console.log('After Estimasi', delayAfter);
          }
        }
      });
    return () => {
      unmounted = true;
    };
  }, [getDay]);

  const kalkulasi = dataTisue.filter(
    e =>
      e.data.RollA.Kondisi === 0 &&
      e.data.RollB.Kondisi === 0 &&
      e.data.databaca === 'tidak',
  );

  const dataterbaca = {
    databaca: 'terbaca',
  };

  var newData = [];
  for (let i = 0; i < kalkulasi.length; i++) {
    let nilaiInt = parseInt(kalkulasi[i].data.harga, 10);
    const hargaTisu = kalkulasi[i].data.harga;
    Fire.database().ref(`Tisu/${kalkulasi[i].id}`).update(dataterbaca);
    console.log('kalkulasi', kalkulasi[i]);
    Fire.database().ref(`Tisu/${kalkulasi[i].id}/detailBiaya`).push(hargaTisu);
    newData.push({
      harga: nilaiInt,
    });
  }
  console.log('newdata', newData);
  const dataharga = newData.reduce((accumulator, {harga}) => {
    return accumulator + harga;
  }, 0);

  if (dataharga) {
    const dataKal = dataharga;
    const biaya = {
      dataharga: dataKal,
    };
    Fire.database().ref(`estimasi/${getDay}`).push(biaya);
  }

  // set data estimasi semua
  var newDataEstimasi = [];
  for (let i = 0; i < dataEstimasi.length; i++) {
    let nilaiInt = dataEstimasi[i].data.dataharga;
    newDataEstimasi.push({
      harga: nilaiInt,
    });
  }
  const datahargaEstimasi = newDataEstimasi.reduce((accumulator, {harga}) => {
    return accumulator + harga;
  }, 0);

  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1}}>
      <Gap height={10} />
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: '600', color: '#D78080'}}>
          Dashboard
        </Text>
        <ILDashboard />
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <ItemMonitoring
            gambar="empty"
            title="Alat Kosong"
            subTitle={`${emptyTisu} Alat`}
          />
          <ItemMonitoring
            gambar="exist"
            title="Alat Aktif"
            subTitle={`${existTisu} Alat`}
          />
        </View>
        <Gap height={20} />
        <View style={styles.item}>
          <ItemMonitoring
            title="Tempat Alat Tisu"
            subTitle={`${semuaTisu} Tempat`}
          />
          <ItemMonitoring
            gambar="coin"
            title="Estimasi Perbulan"
            subTitle={`Rp${datahargaEstimasi}`}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FED799',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 18,
  },
  header: {alignItems: 'center'},
  titel: {textAlign: 'center'},
  item: {flexDirection: 'row', justifyContent: 'space-between'},
});
