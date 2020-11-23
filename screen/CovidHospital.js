import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    FlatList
} from 'react-native'


export default class CovidHospital extends React.Component{
    constructor(){
        super() 
        this.state = {
            adress:[]
        }
    }
    getTestCenters=()=>{

        let testcenters = {
            "candidates" : [
               {
                  "formatted_address" : "Block B, Mohan Nagar, Ghaziabad, Uttar Pradesh 201007, India",
                  "geometry" : {
                     "location" : {
                        "lat" : 28.679407,
                        "lng" : 77.3848971
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 28.68076787989273,
                           "lng" : 77.38610407989272
                        },
                        "southwest" : {
                           "lat" : 28.67806822010728,
                           "lng" : 77.38340442010727
                        }
                     }
                  },
                  "name" : "Pathology Laboratory -Narinder Mohan Hospital & Heart Centre",
                  "rating" : 5
               },
               {
                  "formatted_address" : "GT Road, nr. Ghanta Ghar, Bihari Pura, Sarai Nagar, Ghaziabad, Uttar Pradesh 201001",
                  "geometry" : {
                     "location" : {
                        "lat" : 28.679407,
                        "lng" : 77.3848971
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 28.68076787989273,
                           "lng" : 77.38610407989272
                        },
                        "southwest" : {
                           "lat" : 28.67806822010728,
                           "lng" : 77.38340442010727
                        }
                     }
                  },
                  "name" : "MMG Hospital",
                  "rating" : 5
               }
            ],
            "status" : "OK"
         }
         let json_data = JSON.parse(JSON.stringify(testcenters));
         for(var i=0;i<json_data.candidates.length;i++){
             var candidate = json_data.candidates[i];
             console.log(candidate.formatted_address);
             console.log(candidate.name);
         }
         this.setState({
            testcenters:testcenters
         })
    }

    componentDidMount(){
        this.getTestCenters()
    }
    
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    CovidHospital
                </Text>
                <ScrollView>
                    
                    =-0<SafeAreaView>
                        <FlatList
                            data={this.state.adress}
                            renderItem={({item}) => {
                                <Text></Text>
                            }}
                        />
                    </SafeAreaView>
                </ScrollView>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    title :{
        alignSelf:'center',
        fontSize:60,
        fontWeight:'300',
        color : '#ff9800'
      },
})