import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Smart Tissue</Text>
        <Text>
          This application was developed to monitor tissue boxes that are
          integrated with the microcontroller
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: '#FFCE82',
    flex: 1,
  },
  title: {fontSize: 28, fontWeight: '600', color: '#504C44', marginTop: 91},
});
