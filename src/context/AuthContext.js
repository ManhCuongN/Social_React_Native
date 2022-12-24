import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import QueryString from 'query-string';
import {BASE_URL} from '../utils/config';
const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);

    await axios
      .post(`${BASE_URL}/login`, {
        email,
        password,
      })
      .then(response => {
        setUserInfo(response.data.user);
        setUserToken(response.data.access_token);

        AsyncStorage.setItem('userInfo', JSON.stringify(response.data.user));
        AsyncStorage.setItem('userToken', response.data.access_token);
      })
      .catch(error => {
        console.log(error.response.request._response);
      });
    setIsLoading(false);
  };

  const logout = async () => {
    setUserToken(null);
    setIsLoading(false);
    console.log('sasms');
    await AsyncStorage.removeItem('userInfo');
    await AsyncStorage.removeItem('userToken');
    console.log("Logout completed");
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(`Is Logged In error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
