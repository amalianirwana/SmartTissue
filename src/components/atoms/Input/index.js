import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({
  onValueChange,
  selectItem,
  select,
  disable,
  placeholder,
  label,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const [border, setBorder] = useState('#F3F3F3');

  const onFocusForm = () => {
    setBorder('#0066CB');
  };
  const onBlurForm = () => {
    setBorder('#F3F3F3');
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular',
  },
});
