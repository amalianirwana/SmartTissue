import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILEstimasi} from '../../assets';
import {Button, Gap} from '../../components';
import {Header, ItemTisu} from '../../components/molecules';
import {Fire} from '../../config';
const DetailTisu = ({navigation, route}) => {
  const detailDataPush = route.params;
  const [detailStok, setDetailStok] = useState('');
  const [detailData, setDetailData] = useState('');
  const [biaya, setBiaya] = useState('');
  useEffect(() => {
    Fire.database()
      .ref(`Tisu/${detailDataPush.id}/`)
      .on('value', snapshot => {
        if (snapshot.val()) {
          setDetailData(snapshot.val());
          const oldData = snapshot.val();
          const stokTisuA = oldData.RollA.Kondisi;
          const stokTisuB = oldData.RollB.Kondisi;
          const counterTisu = stokTisuA + stokTisuB;
          setDetailStok(counterTisu);
          if (oldData.detailBiaya) {
            const detailBiaya = oldData.detailBiaya;

            const data = [];

            Object.keys(detailBiaya).map(key => {
              data.push({
                harga: parseInt(detailBiaya[key], 10),
              });
              console.log('data biaya', data);
              const dataharga = data.reduce((accumulator, {harga}) => {
                return accumulator + harga;
              }, 0);
              setBiaya(dataharga);
            });
          }
        }
      });
  }, [detailDataPush]);

  // const stokTisuA = detailData.RollA.Kondisi;
  // const stokTisuB = detailData.RollB.Kondisi;
  // const counterTisu = stokTisuA + stokTisuB;

  const refreshAlat = () => {
    const refreshData = {
      databaca: 'tidak',
      RollA: {
        Kondisi: 1,
      },
      RollB: {
        Kondisi: 1,
      },
    };
    Fire.database().ref(`Tisu/${detailDataPush.id}/`).update(refreshData);
  };
  const StatusAlat = () => {
    console.log('detailll', detailData);
    if (detailData.databaca === 'tidak') {
      return (
        <Text
          style={
            styles.textWarning
          }>{`Alat dari ${detailData.lokasi} sedang dimonitoring`}</Text>
      );
    } else if (detailData.databaca === 'terbaca') {
      return (
        <Text
          style={
            styles.textKosong
          }>{`Tisu dari ${detailData.lokasi} sudah habis `}</Text>
      );
    }
    return (
      <Text
        style={
          styles.textWarning
        }>{`Tisu dari ${detailData.lokasi} sudah habis `}</Text>
    );
  };

  // console.log('detaiil', detailData.Putaran.RollA);

  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1}}>
      <View style={styles.header}>
        <Header title="Detail Alat" onPress={() => navigation.goBack()} />
        <ILEstimasi />
      </View>

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.warning}>
              <StatusAlat />
            </View>
            <Gap height={8} />
            <Text style={styles.textTempat}>{` ${detailData.lokasi}`}</Text>
          </View>
          <Gap height={15} />
          <View style={styles.item}>
            <ItemTisu gambar={detailData.merek} title="Merek Tissue" />
            <ItemTisu
              gambar="coin"
              title="Harga Tissue"
              subTitle={`Rp.${detailData.harga}`}
            />
          </View>
          <Gap height={15} />
          <View style={styles.item}>
            <ItemTisu
              title="Biaya yang dihabiskan"
              gambar="penghabisan"
              subTitle={` Rp${biaya}`}
            />
            <ItemTisu
              gambar="pengisian"
              title="Stok Tissue"
              subTitle={`${detailStok}`}
            />
          </View>
          <Gap height={15} />

          <View style={styles.item}>
            <ItemTisu
              title="Putaran Tisu A"
              gambar="putaran"
              subTitle={` ${detailData.counterA} Putaran`}
            />
            <ItemTisu
              gambar="putaran"
              title="Putaran Tisu B"
              subTitle={`${detailData.counterB} Putaran`}
            />
          </View>

          <View>
            <Gap height={30} />
            <Button onPress={refreshAlat} title="Refresh Alat" />
          </View>
          <View>
            <Gap height={10} />
            <Button
              onPress={() => navigation.navigate('EditAlat', detailData)}
              title="Edit Alat"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailTisu;

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
  textTempat: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'capitalize',
  },

  textWarning: {
    color: '#60C350',
    textAlign: 'center',
  },
  textKosong: {
    color: '#FD4242',
    textAlign: 'center',
  },
  item: {flexDirection: 'row', justifyContent: 'space-between'},
});
