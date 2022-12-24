import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Background from '../screenComponents/Background';
import Btn from '../screenComponents/Btn';
import {darkGreen} from '../screenComponents/Constants';
import Field from '../screenComponents/Field';
import AuthContext from '../../context/AuthContext';

const Login = props => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const {login} = useContext(AuthContext);

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 54,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              login(email, password);
            }}
          />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 200,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16}}>Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
