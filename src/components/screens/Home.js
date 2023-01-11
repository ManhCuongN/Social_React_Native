import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';
import AuthContext from '../../context/AuthContext';
import DataContext from '../../context/DataContext';
import Modal from '../screenComponents/ModalData';
import UpdatePost from '../screenComponents/UpdatePost';
import Btn from '../screenComponents/Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

  const {
    postState: {posts, post, isPostLoading},
    getPost,
    data,
    isModal,
    modalVisible,
    setShowModalAddPost,
    deletePost,
  } = useContext(DataContext);

  //Call get post
  useEffect(() => {
    getPost();
  }, []);

  const {logout, userToken} = useContext(AuthContext);
   console.log(userToken);
  const setModalVisible = () => {
    setShowModalAddPost(true);
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        {post !== null && <UpdatePost />}
        {/* <UpdatePost /> */}
        <FontAwesome
          name="plus-square-o"
          style={{fontSize: 24}}
          onPress={setModalVisible}
        />
        <Text style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
            
          }} > ManhCuong-NgocHuy</Text>
        {/* <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
            onPress={() => {}}
          }}>
          ManhCuong-NgocHuy
        </Text> */}
        <Feather name="navigation" onPress={() => logout()} style={{fontSize: 24}} />
      </View>
      <ScrollView>
        <Stories />
        {
          posts.map((post, index) => (
            <Post key={index}  postInfo={post} />
          )
          
        )
        }
        
        
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="ios-reload-circle-sharp"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
      <Modal />
    </View>
  );
};

export default Home;
