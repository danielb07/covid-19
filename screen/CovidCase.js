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
            userId:firebase.auth().currentUser.email,
            user:'',
            listItems:''
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
            let countries = []
            for(var country in countries_json){
                countries.push(country)
            }
            this.setState({
                listItems:countries
            })
            
        });
    }

    render(){
        return(
            <View>
            <ScrollView>
                <View style={{flex:1, justifyContent:'center', alignItems:'center', marginBottom:650,borderBottomWidth:2}}>
                    <Text style={styles.title}>
                        {this.state.user}
                    </Text>
                    
                </View>
                
            </ScrollView>

            
            
            <FlatList
            data={this.state.listItems}
            renderItem={({item})=>{
                <View>
                    <Text>{item}</Text>
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