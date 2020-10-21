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
                    Dummy2
                </Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    title :{
        fontSize:60,
        fontWeight:'300',
        color : '#ff9800'
      },
})