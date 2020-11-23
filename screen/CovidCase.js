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
import CovidCountry from './CovidCountry'

export default class CovidCase extends React.Component{
    constructor(){
        super()
        this.state ={
            countries:[],
            myCountry:[],
            userId:firebase.auth().currentUser.email,
            user:'',
            listItems:'',
            countries_json:'',
            isDetailVisible:false,
            countryName:''
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

    
    

    showCountryData(name){
        console.log(this.state.countries_json['India']);
    }
    
    getCovidData=()=>{
       
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
        // console.log(date)
        fetch('https://api.covid19tracking.narrativa.com/api/'+date)
        .then(response => response.json())
        .then(data =>  {
            let json_data = JSON.parse(JSON.stringify(data));
            let countries_json = json_data.dates[date].countries;
            this.setState({
                countries_json:countries_json
            });
            
            for(var country in countries_json){
                if (country !== this.state.myCountry){
                    this.setState({
                        countries:[...this.state.countries,country],     
                    })
                }
            }
            this.state.countries.unshift(this.state.myCountry)
            
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
    getMyCountry = () =>{
        this.setState({
            
            myCountry:"India"
        })
    }

    componentDidMount(){
        this.userName(this.state.userId);
        this.getMyCountry();
        this.getCovidData();
        this.getLocation();
    }

    render(){

        return(
            <View style={{ flex: 1 }}>
                    <Text style={[styles.title,{alignItems:'center',justifyContent:'center'}]}>Welcome</Text>
                <ScrollView>
                    
                    <SafeAreaView>
                        <FlatList
                            data={this.state.countries}
                            renderItem={({item}) => <CovidCountry name={item} mycountry={this.state.myCountry} countryData={this.state.countries_json[item]}/>}
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
        color : '#ff9800',
        alignSelf:'center',
        justifyContent:'center'
       
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