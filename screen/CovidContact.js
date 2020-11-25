import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image
} from 'react-native';

export default class CovidHospital extends React.Component{
     

    render(){
        return(
            
            <View style={styles.flatList}>
                <Text style={[styles.flatListText,{fontWeight:'bold'}]}>{this.props.loc}</Text>
            <View>
                    
            <TouchableOpacity>
                <Text style={styles.flatListText}>{this.props.phone}</Text>
            </TouchableOpacity>

            </View>
            
        </View>
    

       )
    }
}


const styles = StyleSheet.create({
    flatList:{
        borderWidth:5,
        borderRadius:'12px',
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
        fontSize:17,
        justifyContent:'center',
        alignSelf:'center',
        
      },
})
