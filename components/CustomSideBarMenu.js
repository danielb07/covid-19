import React, { Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'
import {Avatar} from 'react-native-elements'
import firebase from 'firebase';
import db from '../config';
import * as ImagePicker from 'expo-image-picker';
export default class CustomSidebarMenu extends Component{
  constructor(){
    super();
    this.state ={
      userId:firebase.auth().currentUser.email,
      user:'',
      image:'#',
      name:"",
    }
  }

  getUserName = () =>{
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + " " + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.setState({
        image:uri
      })
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  componentDidMount(){
    this.getUserName();
    this.fetchImage(this.state.userId);

  }
  render(){
    return(
      <View style={{flex:1}}>
        <Avatar
          rounded
          source={{
            uri:this.state.image
          }}
          
          size="xlarge"
          onPress={()=>{
            this.selectPicture();
          }}
          icon={{name: 'user', type: 'font-awesome'}}
          showEditButton
          />
          <Text style={{fontWeight:'100',fontSize:20, paddingTop:10}}>{this.state.name}</Text>
        <DrawerItems {...this.props}/>
        <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
          <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}