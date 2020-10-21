import React from 'react'
import {View, Text, StyleSheet, TextInput, Alert,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import database from '../config'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            passWord:''
        }
    }

    LoginUser = (emailId,password) =>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate('Drawer')
          })
        .catch((error)=>{
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage)
          });
            
       
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
                                            email:text
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
                    <TouchableOpacity
                    style={[styles.button,{marginBottom:20, marginTop:20,marginLeft:640}]}
                    onPress = {()=>{
                        this.LoginUser(this.state.email, this.state.passWord)
                    }}
                    >
                    <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{marginTop:10,marginLeft:720}}>Don't have an account ?</Text>
                   <TouchableOpacity
                    style={[styles.button,{marginLeft:640}]}
                    onPress={()=>{
                        this.props.navigation.navigate('SignUpScreen')
                    }}><Text style={styles.buttonText}>SignUp</Text></TouchableOpacity>
                    
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
      },
      button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#ff9800",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
        padding: 10
      },
      buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
      }
  })