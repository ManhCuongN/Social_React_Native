import React from 'react';
import {TextInput} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      value={props.value}
      onChangeText={props.onChangeText}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 20,
        width: '65%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}></TextInput>
  );
};

export default Field;
