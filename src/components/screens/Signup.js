import React, { useContext, useState } from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../screenComponents/Background';
import Btn from '../screenComponents/Btn';
import {darkGreen} from '../screenComponents/Constants';
import Field from '../screenComponents/Field';
import {RadioButton} from 'react-native-paper';
import AuthContext from '../../context/AuthContext';

const Signup = props => {
  const [checked, setChecked] = React.useState('male');
  const [fullname, setFullName] = useState(null)
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const{signup} = useContext(AuthContext)

  console.log("hel", checked, fullname, username, email, password);
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
          <Field placeholder="Full Name" 
             value={fullname}
            onChangeText={text => setFullName(text)} />
          <Field placeholder="User Name" 
          value={username}
          onChangeText={text => setUsername(text)}
          />
          <Field placeholder="Email" keyboardType={'email-address'} 
          value={email}
          onChangeText={text => setEmail(text)}
          />

          <Field placeholder="Password" secureTextEntry={true} 
          value={password}
          onChangeText={text => setPassword(text)}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Male</Text>
            <RadioButton
              value="male"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <Text>Female</Text>
            <RadioButton
              value="female"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              signup(fullname, username, email, password, checked);
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
