import React from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Modal,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native'
import firebase from 'firebase'
import database from '../config'

export default class SignUpScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            email:'',
            password:'',
            firstName:'',
            lastName:''
        }
    }
    SignUp = (email,password) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.navigate('Drawer')

            database.collection('user').add({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                email:this.state.email,
                profilePicture:"#"
            })
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                {/* TO DO : remove the red line */}
                <Modal>
                    <View style={styles.modalContainer}>
                        <ScrollView style={{width:'100%'}}>
                            <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                                <Text style={styles.modalTitle}>
                                    Registration
                                </Text> 
                                <View style={{margin:10}}>
                                    
                                    <TextInput
                                    style={styles.textbox}
                                    placeholder="FirstName"
                                    placeholderTextColor="orange"
                                    onChangeText={(text)=>{
                                        this.setState({
                                            firstName:text
                                        })
                                    }}/>
                                </View>
                                <View style={{margin:10}}>
                                    <TextInput
                                    style={styles.textbox}
                                    placeholder="LastName"
                                    placeholderTextColor="orange"
                                    onChangeText={(text)=>{
                                        this.setState({
                                            lastName:text
                                        })
                                    }}/>
                                </View>
                                <View style={{margin:10}}>
                                    <TextInput
                                    style={styles.textbox}
                                    placeholder="Email"
                                    keyboardType={'email-address'}
                                    placeholderTextColor="orange"
                                    onChangeText={(text)=>{
                                        this.setState({
                                            email:text
                                        })
                                    }}/>
                                </View>
                                <View style={{margin:10}}>
                                    <TextInput
                                    style={styles.textbox}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    placeholderTextColor="orange"
                                    onChangeText={(text)=>{
                                        this.setState({
                                            password:text
                                        })
                                    }}
                                    />
                                </View>

                                <View>
                                    <TouchableOpacity
                                    style={styles.registerButton}
                                    onPress={()=>{
                                        this.SignUp(this.state.email,this.state.password);
                                    }}><Text style={styles.registerButtonText}>Register</Text></TouchableOpacity>
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffe0b2'
    },
    title :{
        fontSize:60,
        fontWeight:'300',
        color : '#ff9800'
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle :{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#ff5722',
        margin:50
      },
    textbox:{
        width:"95%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffff",
        marginRight:30,
        marginLeft : 640,
        marginTop:80,
        marginBottom:80,
    },
    registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30,
        marginBottom:20
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
    
})