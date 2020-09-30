import React from 'react'
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
// import firebase from 'firebase';
// import database from '../config'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emaIl:'',
            passWord:''
        }
    }

    LoginUser = (email,password) =>{
        // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     return Alert.alert(errorMessage)
        //   })
        //   .then(()=>{
        //       this.props.navigation.navigate('NewsScreen')
              
        //   });
        this.props.navigation.navigate('NewsScreen')
        return Alert.alert("welcome")
    }
    render(){
        return(
            <View style={{backgroundColor:'#ffe0b2',flex:1}}>
                <View style={styles.container}>
                    <Text style={styles.title}>Welcome Screen</Text>
                    <Text style={styles.subtitle}> A Screen Where We Welcome You</Text>
                </View>
                <View style={{marginBottom:500}}>
                    <View style={{marginLeft:550}}>
                        <table>
                            <tr>
                                <td><Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>EMAIL</Text></td>
                                <td>
                                <View>
                                    <TextInput
                                    style={styles.textBox}
                                    keyboardType ={'email-address'}
                                    placeholder={"Email"}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            emailId:text
                                        })
                                    }}/>
                                </View>
                                </td>
                            </tr>
                        </table>
                    </View>

                    <View style={{marginLeft:550}}>
                        <table>
                            <tr>
                                <td><Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>PASSWORD</Text></td>
                                <td>
                                <View style={{marginRight:250}}>
                                    <TextInput
                                    style={styles.textBox}
                                    secureTextEntry={true}
                                    placeholder={"Password"}
                                    onChangeText={(text)=>{
                                        this.setState({
                                            passWord:text
                                        })
                                    }}/>
                                </View>
                                </td>
                            </tr>
                        </table>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContainer:'center',
      alignItems:'center'
    },
    title :{
        fontSize:60,
        fontWeight:'300',
        color : '#ff9800'
      },
      subtitle :{
        fontSize:20,
        fontWeight:'300',
        color : '#000000'
      },
      textBox:{
        width: 300,
        height: 35,
        borderBottomWidth: 1.5,
        borderColor:'#ffab91',
        fontSize: 20,
        marginBottom:20,
      }
  })