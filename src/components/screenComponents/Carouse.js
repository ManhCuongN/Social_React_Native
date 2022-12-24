import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Carouse({imagesInfo}) {
  return (
    <View>
      {imagesInfo.map((image, index) => {
        return (
          <View
            key={index}
            style={{
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: image.url,
              }}
              style={{width: 300, height: 400}}
            />
          </View>
        );
      })}
    </View>
  );
}
