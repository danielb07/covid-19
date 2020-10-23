import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
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

    getCovidData=()=>{
       
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
        console.log(date)
        fetch('https://api.covid19tracking.narrativa.com/api/'+date)
        .then(response => response.json())
        .then(data =>  {
            let json_data = JSON.parse(JSON.stringify(data));
            let countries_json = json_data.dates[date].countries;
            console.log(countries_json);
            for(var country in countries_json){
                this.setState({
                    countries:[...this.state.countries,country]
                })
            }
            
            
        });
    }

    render(){

        return(
            <View>
            <ScrollView>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom:650,borderBottomWidth:2}}>
                    <Text style={styles.title}>
                        Welcome
                    </Text>
           
                </View>
            </ScrollView>
            

            
            
            <FlatList
            data={this.state.countries}
            renderItem={({item})=>{
                <View>
                    <Text>{item.country}</Text>
                </View>
            }}
            keyExtractor={(item,index)=>index.toString()}
            />
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    title :{
        fontSize:60,
        fontWeight:'300',
        color : '#ff9800',
       
      },
})