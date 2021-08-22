import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDashboard} from '../../assets';
import {Gap} from '../../components';
import {ItemMonitoring} from '../../components/molecules';

const Home = () => {
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
            title="Empty Tissue"
            subTitle="40 Tissue"
          />
          <ItemMonitoring
            gambar="exist"
            title="Exist Tissue"
            subTitle="40 Tissue"
          />
        </View>
        <Gap height={20} />
        <View style={styles.item}>
          <ItemMonitoring title="All Tissue Holders" subTitle="40 Place" />
          <ItemMonitoring
            gambar="coin"
            title="Estimated costs"
            subTitle="Rp.300k/month"
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
    padding: 35,
  },
  header: {alignItems: 'center'},
  titel: {textAlign: 'center'},
  item: {flexDirection: 'row', justifyContent: 'space-between'},
});
