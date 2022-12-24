import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Comment({postComment}) {
  console.log("postComment", postComment);
  return (
    <View>
        {
          postComment.map(comment => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                  source = {{
                    uri:  'https://res.cloudinary.com/ddxxozy4t/image/upload/v1671265141/upload/jmdxsusl4byh4eiq57ki.jpg'                
                  }}
                  style={{width: 20, height: 30}}
                /> 
                <Text>{comment.content}</Text>
              </View>
            )
          })
        }
    </View>
  )
}
