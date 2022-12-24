import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Ionic from 'react-native-vector-icons/Ionicons';
import DataContext from '../../context/DataContext';
import imageUpload from '../../utils/imagesUpload';

const EditProfile = ({route, navigation}) => {
  const {
    updateUser
  } = useContext(DataContext);

  var {fullname, username, avatar} = route.params;
  const [avatarProfile, setAvatarProfile] = useState(avatar)
  const [fullnameUser, setFullname] = useState(fullname)
  const [usernameUser, setUsername] = useState(username)
   console.log("valid", avatarProfile);
 
  

  const handleChangeFullName = (name,value) => {
     setFullname(value)
  }
  const handleChangeUserName = (name,value) => {
    setUsername(value)
  }
  
  const TostMessage = () => {
     updateUser(fullnameUser, usernameUser, avatarProfile)
    //ToastAndroid.show('Edited Sucessfully !', ToastAndroid.SHORT);
  };
  
  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      // Setting the state to show single file attributes
      
      const media = await imageUpload(res);
      media.map((item) => {
        setAvatarProfile(item.url)
      })
      // convert.map((item) => {
      //   console.log("item: " + item.url);
      // })
      
      // setSingleFile(media);
    } catch (err) {
      // setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{fontSize: 35}} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.goBack();
          }}>
          <Ionic name="checkmark" style={{fontSize: 35, color: '#3493D9'}} />
        </TouchableOpacity>
      </View>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={{
            uri: avatarProfile
          }}
          style={{width: 80, height: 80, borderRadius: 100}}
        />
        <Text
          onPress={selectFile}
          style={{
            color: '#3493D9',
          }}>
          Change profile photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            onChangeText={(text) => handleChangeFullName('fullname', text)}
            value={fullnameUser}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text

            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="accountname"
            onChangeText={(text) => handleChangeUserName('username', text)}
            value={usernameUser}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Website"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Bio"
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Persnol information setting
        </Text>
      </View>
    </View>
  );
};

export default EditProfile;
