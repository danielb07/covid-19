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

export default class CovidCase extends React.Component{
    constructor(){
        super()
        this.state ={
            countries:[],
            userId:firebase.auth().currentUser.email,
            user:'',
            listItems:'',
        }
    }

    userName = (userId) =>{
        db.collection('user').where("email","==", userId).get()
            .then((snapshot)=>{
                snapshot.forEach((doc) => {
                this.setState({
                    "user" : "Welcome "+ doc.data().first_name + " " + doc.data().last_name
                })
            });
        })
    }

    
    componentDidMount(){
        this.userName(this.state.userId);
        this.getCovidData();
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
                this.setState({
                    countries:[...this.state.countries,country]
                })
            }  
            
            
            
        });
    }

    render(){

        return(
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <Text style={styles.titlex}>Welcome</Text>
                    <SafeAreaView>
                        <FlatList
                            data={this.state.countries}
                            renderItem={({item}) => <Country name={item} countryData={this.state.countries_json[item]}/>}
                        />
                        
                    </SafeAreaView>
                </ScrollView>
                
            </View>
        )
    }
}




const Country = ({ name,countryData }) => (
    <View style={styles.flatList}>
        <TouchableOpacity  onPress={() => {
            console.log(countryData)
        }}>
            <Text style={styles.flatListText}>{name}</Text>
        </TouchableOpacity>
    </View>
  );


const styles = StyleSheet.create({
    title :{
        fontSize:60,
        fontWeight:'300',
        color : '#ff9800',
       
      },
      flatlistContainer:{
        
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
       
      },
      flatList:{
        backgroundColor: '#f9c2ff',
        marginLeft:'25%',
        padding: 20,
        marginVertical: 8,
        width:'50%',
        height:'90%',
        alignItem:'center',
        justifyContent:'center',
        borderRadius:'15px',
        borderWidth:2
      },
      flatListText:{
          fontSize:18,
          fontWeight:'bold',
          justifyContent:'center',
          alignSelf:'center'
      }
      
})