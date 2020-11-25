import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    SafeAreaView,
    FlatList
} from 'react-native'
import CovidHospital from './CovidHospital';
import {Header} from 'react-native-elements'


export default class CovidHospitals extends React.Component{
    constructor(){
        super();
        this.state={
            testcenters:{}
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
         this.setState({
             testcenters: json_data.candidates
         })
         
    }


    componentDidMount(){
        this.getTestCenters();
    }
    render(){
        return(
            <View style={{ flex: 1 }}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'COVID HOSPITAL', style: { color: '#fff' } }}
                    />
                    <View style={{alignItems:'center',justifyContent:'center',borderWidth:3,marginRight:200,marginLeft:200}}>
                        <Text style={[styles.subtitle,{alignItems:'center',justifyContent:'center'}]}>
                            Get the name and address of Covid testing centers near you.
                            Click on a test center to get the navigation to the test center.
                        </Text>
                    </View>
                <ScrollView>
                    
                    <SafeAreaView>
                        <FlatList
                            data={this.state.testcenters}
                            renderItem={({item}) => <CovidHospital name={item.name} address={item.formatted_address} />}
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
        fontSize:40,
        fontWeight:'300',
        color : '#0a0593'
      },
})