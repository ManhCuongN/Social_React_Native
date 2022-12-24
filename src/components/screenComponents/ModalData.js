import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {TextInput} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import ImagesPicker from './ImagesPicker';
import imageUpload from '../../utils/imagesUpload';
import DataContext from '../../context/DataContext';

export default function ModalData() {
  const {showModalAddPost, setShowModalAddPost, addPost, setShowToast} =
    useContext(DataContext);

  const [singleFile, setSingleFile] = useState(null);
  const [images, setImages] = useState(null);
  const [textInput, setTextInput] = useState('');

  // //New Post
  // const [newPost, setNewPost] = useState({
  //   content: '',
  //   images: '',
  // });

  const uploadPost = async () => {
    await addPost(singleFile, textInput);
    setShowModalAddPost(false);
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
      setSingleFile(media);
    } catch (err) {
      setSingleFile(null);
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
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModalAddPost}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.mainBody}>
              <TextInput
                placeholder="abc"
                style={styles.textInput}
                onChangeText={text => {
                  setTextInput(text);
                }}
              />
              <TouchableOpacity activeOpacity={0.5}>
                <Text>Select File</Text>
              </TouchableOpacity>
              {/*Showing the data of selected Single file*/}
              {singleFile != null ? (
                <ImagesPicker singleFile={singleFile} />
              ) : (
                <View>
                  <Text>abc</Text>
                </View>
              )}

              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={selectFile}>
                <Text style={styles.buttonTextStyle}>Select File</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={uploadPost}>
                <Text style={styles.buttonTextStyle}>Upload File</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: 'center',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 105,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    height: 50,
    width: 120,
  },
});
// const styles = StyleSheet.create({
// centeredView: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   marginTop: 22,
// },
// modalView: {
//   margin: 20,
//   backgroundColor: 'white',
//   borderRadius: 20,
//   padding: 105,
//   alignItems: 'center',
//   shadowColor: '#000',
//   shadowOffset: {
//     width: 0,
//     height: 2,
//   },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
//   elevation: 5,
// },
// button: {
//   borderRadius: 20,
//   padding: 10,
//   elevation: 2,
// },
// buttonOpen: {
//   backgroundColor: '#F194FF',
// },
// buttonClose: {
//   backgroundColor: '#2196F3',
// },
// textStyle: {
//   color: 'white',
//   fontWeight: 'bold',
//   textAlign: 'center',
// },
// modalText: {
//   marginBottom: 15,
//   textAlign: 'center',
// },
//   textInput: {
//     height: 50,
//     width: 120,
//   },
// });
