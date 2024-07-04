import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

const Input = ({label, onChange, value, onChangeText}) => {
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChange={onChange}
        onChangeText={onChangeText}
        value={value}
        placeholder={label}
        autoFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  inputLabel: {
    marginBottom: 10,
    color: Colors.DEFAULT_RED,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
  },
});

export default Input;
