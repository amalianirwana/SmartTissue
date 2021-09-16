import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets/ilustration';
import {Fire} from '../../config';
import {getDelay} from '../../utils';

const Splash = ({navigation}) => {
  const today = new Date();
  const delayBefore = getDelay(today);
  console.log('before splash', delayBefore);
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
          const todayAfter = new Date();
          const delayAfter = getDelay(todayAfter);
          console.log('After Estimasi', delayAfter);
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Smart Tissue</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFCE82',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#B3404A',
    marginBottom: 20,
  },
});
