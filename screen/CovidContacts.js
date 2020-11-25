import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import RNCountry from 'react-native-countries';
import CovidCountry from './CovidContact'
import CovidContact from './CovidContact';
import {Header} from 'react-native-elements'

export default class CovidContacts extends React.Component{
    constructor(){
        super();
        this.state ={
            userId:firebase.auth().currentUser.email,
            user:'',
            listItems:'',
            countries_json:'',
            myState:'',
            isDetailVisible:false,
            test:'',
            isLoading:true
        }
    }

    userName = (userId) =>{
        db.collection('user').where("email","==", userId).get()
            .then((snapshot)=>{
                snapshot.forEach((doc) => {
                this.setState({
                    "user" : doc.data().first_name + " " + doc.data().last_name
                })
            });
        })
    }

    

    
    getCovidData=()=>{
       
        
        // console.log(date)
        fetch('https://api.rootnet.in/covid19-in/contacts')
        .then(response => response.json())
        .then(data =>  {
            let json_data = JSON.parse(JSON.stringify(data));
            // console.log(json_data.data.contacts.primary)
            let regionalData = json_data.data.contacts.regional;
            if(regionalData != this.state.myState){
                this.setState({
                    regionalData:regionalData
                });
            }

            
            this.setState({
                isLoading:false
            })
            
            
        });
    }
    

    getLocation = () =>{
        // console.log('here')
        // let proxy_url = 'https://cors-anywhere.herokuapp.com/';
        // var fetch_url = 'https://freegeoip.net/json/';
        // fetch(proxy_url + fetch_url)
        // .then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(responseJson);
        //     this.setState({
        //     countryName: responseJson.country_name,
        //     regionName: responseJson.region_name
        //     });
        //     console.log(this.state.countryName);
        // })
        // .catch((error) => {
        // //console.error(error);
        // });

    }
    getState = () =>{
        this.setState({
            
            myState:"Uttar Pradesh"
        })
        
    }

    componentDidMount(){
        this.userName(this.state.userId);
        this.getState();
        this.getCovidData();
        this.getLocation();
        
    }

    render(){

        return(
            <View style={{ flex: 1 }}>
                    <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'CONTACTS', style: { color: '#fff' } }}
                    />
                    <View style={{alignItems:'center',justifyContent:'center',borderWidth:3,marginRight:500,marginLeft:500}}>
                        <Text style={[styles.subtitle,{alignItems:'center',justifyContent:'center'}]}>
                            Get the contact number for your state
                        </Text>
                    </View>
                    {this.state.isLoading &&
                        <Text style={[styles.title,{alignItems:'center',justifyContent:'center',color:'#ff9800'}]}>Please wait. Contact data is Loading...</Text>
                    }
                <ScrollView>
                    <SafeAreaView>
                        <FlatList
                            data={this.state.primary}
                            renderItem={({item}) => <CovidContact loc={item.loc} phone={item.number} />}
                        />
                    </SafeAreaView>
                    
                    <SafeAreaView>
                        <FlatList
                            data={this.state.regionalData}
                            renderItem={({item}) => <CovidContact loc={item.loc} phone={item.number} />}
                        />
                    </SafeAreaView>
                </ScrollView>
            </View>
        )
    }
}







const styles = StyleSheet.create({
    title :{
        fontSize:60,
        fontWeight:'300',
        color : '#0a0593',
        alignSelf:'center',
        justifyContent:'center'
       
      },
      subtitle :{
        fontSize:20,
        fontWeight:'300',
        color : '#000000'
      },
      flatlistContainer:{
        
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 8,
       
      },
      flatList:{
        backgroundColor: '#44DE28',
        marginLeft:'25%',
        padding: 20,
        marginVertical: 8,
        width:'50%',
        paddingTop:50,
        paddingBottom:50,
        alignItem:'center',
        justifyContent:'center',
      },
      flatListText:{
          fontSize:37,
          justifyContent:'center',
          alignSelf:'center'
      },
      mycountryText:{
          fontSize:37,
          justifyContent:'center',
          alignSelf:'center',
          
      },
      mycountryButton:{
          backgroundColor:'#267EB5',
          width:'50%',
          height:150,
          justifyContent:'center',
          alignItem:'center',
          marginLeft:330

      }
      
})