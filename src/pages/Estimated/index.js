import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILEstimasi} from '../../assets';
import {Gap} from '../../components';

const Estimated = () => {
  return (
    <View style={{backgroundColor: '#F9F8F0', flex: 1, alignItems: 'center'}}>
      <Gap height={10} />
      <Text style={{fontSize: 20, fontWeight: '600', color: '#D78080'}}>
        Estimated Costs
      </Text>
      <Gap height={20} />
      <ILEstimasi />
    </View>
  );
};

export default Estimated;

const styles = StyleSheet.create({});
