import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHome,
  IconEstimated,
  IconMonitoring,
  IconHomeActive,
  IconEstimatedActive,
  IconMonitoringActive,
  Iconprofile,
  IconprofileActive,
} from '../../../assets/icon';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Estimated') {
      return active ? <IconEstimatedActive /> : <IconEstimated />;
    }
    if (title === 'Monitoring') {
      return active ? <IconMonitoringActive /> : <IconMonitoring />;
    }
    if (title === 'ProfileUser') {
      return active ? <IconprofileActive /> : <Iconprofile />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? '#FDA45E' : '#A57C7C',
    fontWeight: '600',
    marginTop: 4,
  }),
});
