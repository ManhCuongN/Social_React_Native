import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Carouse from './Carouse';
import DataContext from '../../context/DataContext';
import AuthContext from '../../context/AuthContext';
import Comment from './Comment';
const Post = ({postInfo}) => {
  
  
  const [isLike, setIsLike] = useState(false)
  
  const [loadLike, setLoadLike] = useState(false)
  const {userInfo} = useContext(AuthContext);
  const {
    postState: {comments},
    deletePost,likePost,unLikePost, commentPost,findPost, setShowModalUpdatePost} =
    useContext(DataContext);
  const deletePostItem = async _id => {
  
     await deletePost(_id);
  };
  
  const onUpdatePost = id => {  
    findPost(id);
    setShowModalUpdatePost(true);
  };
   
   
  if(userInfo) {
    useEffect(() => {
      if(postInfo.likes.find(like => like._id === userInfo._id)){
          setIsLike(true)
      }else{
          setIsLike(false)
      }
  }, [postInfo.likes, userInfo._id])
  }
  const handleLike = async (is, _id) => {
     if(loadLike) return;
     setIsLike(true)
     if(isLike) {
      setIsLike(false)
      await unLikePost(_id, userInfo._id)
     } else {
      setIsLike(true)
      await likePost(_id, userInfo._id)
     }
    // if(loadLike) return;
    // setIsLike(true)
    // setLoadLike(true)
    // await likePost(_id, userInfo._id)
    setLoadLike(false)
}


  const [comment, setComment] = useState('');

  const handleSubmitComment = async(postId,postUserId ) => {
     await commentPost(comment,postId,  postUserId, )
  };
  return (
    
          <View
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Carouse
                   imagesInfo={data.images}
                 
                /> */}
                <Image 
                source={{
                uri: postInfo.user.avatar
                }}
                style={{
                  resizeMode: 'cover',
                  width: 35,
                  height: 35,
                  borderRadius: 100,
                }}
                />   
                <View style={{paddingLeft: 5}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                    {postInfo.user.username}
                  </Text>
                </View>
              </View>
              <Feather
                name="x-circle"
                style={{fontSize: 20}}
                onPress={() => deletePostItem(postInfo._id)}
              />
            </View>
            <Carouse imagesInfo={postInfo.images} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <AntDesign
                  name={isLike ? 'heart' : 'hearto'}
                  onPress={()=> handleLike(setIsLike(!isLike)  , postInfo._id )}
                   style={{
                     paddingRight: 10,
                     fontSize: 20,
               
                     color: isLike ? 'red' : 'black',
                   }}
                  
                  />
                </TouchableOpacity>

                <TouchableOpacity>
               
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{fontSize: 20, paddingRight: 10}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{fontSize: 20}} />
                </TouchableOpacity>
              </View>
              <Feather
                name="edit"
                style={{fontSize: 20}}
                onPress={() => onUpdatePost(postInfo._id)}
              />
            </View>
            <View style={{paddingHorizontal: 15}}>
              {/* <Text>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes.length + 1 : data.likes.length} others
              </Text> */}
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  paddingVertical: 2,
                }}>
                {postInfo.content}
              </Text>
              {/* <Text style={{opacity: 0.4, paddingVertical: 2}}>
                View all comments
              </Text> */}
              
              <Comment postComment={postInfo.comments}/>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={{
                      
                    uri: postInfo.user.avatar}}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment "
                    style={{opacity: 0.5}}
                    onChangeText={text => setComment(text)}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
                    onPress={() => handleSubmitComment(postInfo._id, postInfo.user._id)}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{fontSize: 15, color: 'pink', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: 'red'}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
};

export default Post;
