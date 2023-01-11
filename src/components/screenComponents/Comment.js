import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import DataContext from '../../context/DataContext';

export default function Comment({postComment}) {
  console.log("postComment", postComment);
  const {
    deleteComment
  } = useContext(DataContext);

  const handleDeleteComment = async(id) => {
    await deleteComment(id)
  }
  return (
    <View>
        {
          postComment.map(comment => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                  source = {{
                    uri:   comment.user.avatar
                  }}
                  style={{width: 20, height: 30}}
                /> 
                <Text>{comment.content}</Text>
                <View style={{flexDirection: 'row', marginLeft : 20}}>
                  <Entypo
                    name="eraser"
                    style={{fontSize: 15, color: 'red', marginRight: 10}}
                    onPress={() => handleDeleteComment(comment._id)}
                  />
                </View>
              </View>
            )
          })
        }
    </View>
  )
}
