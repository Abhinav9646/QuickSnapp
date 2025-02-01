import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import {  HeartIcon,WrenchScrewdriverIcon } from 'react-native-heroicons/outline';

const Instagram = () => {
  const [red,setRed] = useState (false);
  const DATA = [
    {
      id: 1,
      name: 'AbhinavSingh9646',
      image: require('../../../assest/image/Rectangle.png'),
      profile: require('../../../assest/image/profile.png'),
    },
    {
      id: 2,
      name: 'Raj',
      image: require('../../../assest/image/Rectangle.png'),
      profile: require('../../../assest/image/profile.png'),
    },
    {
      id: 3,
      name: 'Aman7987',
      image: require('../../../assest/image/Rectangle.png'),
      profile: require('../../../assest/image/profile.png'),
    },
    {
      id: 4,
      name: 'keshav7987',
      image: require('../../../assest/image/Rectangle.png'),
      profile: require('../../../assest/image/profile.png'),
    },
    {
      id: 5,
      name: 'Ansh7987',
      image: require('../../../assest/image/Rectangle.png'),
      profile: require('../../../assest/image/profile.png'),
    },
    {
      id: 6,
      name: 'rajat7987',
      image: require('../../../assest/image/Rectangle.png'),
      profile: require('../../../assest/image/profile.png'),
    },
  ];
   const handelColour=(index,item)=>{
    console.log(item.id,'id',index+1,'indec')
    if(index+1==item.id){
    setRed(!red);
  }
   }
  const renderPost = ({ item ,index}) => (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <Image style={styles.userProfile} source={item.profile} />
        <Text style={styles.userName}>{item.name}</Text>
      </View>

      <Image style={styles.postImage} source={item.image} />
 
      <View style={styles.postActions}>
        <View style={styles.actionIcons}>
          <TouchableOpacity key={index} onPress={()=>handelColour(index,item)}>
          <HeartIcon size={30} fill={red?'red':'white'}/>

          </TouchableOpacity>
          
          {/* <Image
            style={styles.actionIcon}
            source={require('../../../assest/image/heartlogo.png')}
          /> */}
          <Image
            style={styles.actionIcon}
            source={require('../../../assest/image/chat-bubble.png')}
          />
          <Image
            style={styles.actionIcon}
            source={require('../../../assest/image/send-mail.png')}
          />
        </View>
        <Image
          style={styles.bookmarkIcon}
          source={require('../../../assest/image/share.png')}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../../../assest/image/photo-camera.png')}
        />
        <Text style={styles.headerText}>Instagram</Text>
        <Image
          style={styles.headerIcon}
          source={require('../../../assest/image/messenger.png')}
        />
      </View>

     
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesContainer}>
        <View style={styles.story}>
          <Image
            style={styles.storyImage}
            source={require('../../../assest/image/profile.png')}
          />
          <Text style={styles.storyText}>Your Story</Text>
        </View>
        {DATA.map((story, index) => (
          <View key={index} style={styles.story}>
            <Image style={styles.storyImage} source={story.profile} />
            <Text style={styles.storyText}>{story.name}</Text>
          </View>
        ))}
      </ScrollView>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPost}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  headerIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  storiesContainer: {
    paddingVertical: 10,
    backgroundColor: '#fafafa',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  story: {
    alignItems: 'center',
    marginHorizontal:10,
  },
  storyImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  storyText: {
    // marginTop: 5,
    fontSize: 12,
    color: '#000',
    marginBottom:25
    
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userProfile: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userName: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  actionIcons: {
    flexDirection: 'row',
  },
  actionIcon: {
    height: 25,
    width: 25,
    // marginRight: 15,
    resizeMode: 'contain',
    marginHorizontal:15
  },
  bookmarkIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default Instagram;
