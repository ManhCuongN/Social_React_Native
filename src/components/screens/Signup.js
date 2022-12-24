import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../screenComponents/Background';
import Btn from '../screenComponents/Btn';
import {darkGreen} from '../screenComponents/Constants';
import Field from '../screenComponents/Field';
import {RadioButton} from 'react-native-paper';

const Signup = props => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Full Name" />
          <Field placeholder="User Name" />
          <Field placeholder="Email" keyboardType={'email-address'} />

          <Field placeholder="Password" secureTextEntry={true} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Male</Text>
            <RadioButton
              value="male"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text>Female</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>Already have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: darkGreen, fontSize: 16}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
