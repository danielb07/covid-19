import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'


export default class Dummy extends React.Component{
    
    render(){
        return(
            <View>
                <Text style={styles.title}>
                    MyTravelHistory
                </Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    title :{
        alignSelf:'center',
        fontSize:60,
        fontWeight:'300',
        color : '#0a0593'
      },
})