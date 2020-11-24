import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';


export default class CovidHospital extends React.Component{
    constructor(){
        super()
        this.state ={
            isDetailVisible:false,
            countryData:'',
            dropDown:'V'
        }
    }    

    render(){
        return(
            
            <View style={styles.flatList}>
                <Text style={styles.flatListText}>{this.props.name}</Text>
            <View>

                    
            <TouchableOpacity onPress={() => {
                this.state.dropDown === 'V'?
                this.setState({
                    totalCases:'Total confirmed:',
                    totalDeaths:'Total deaths',
                    newCases:'New cases',
                    newDeaths:'New deaths',
                    totalRecovered:'Total recovered',
                    countryData:this.props.countryData,
                    dropDown:'^'
                    
                }):
                this.setState({
                    totalCases:'',
                    totalDeaths:'',
                    newCases:'',
                    newDeaths:'',
                    countryData:'',
                    totalRecovered:'',
                    dropDown:'V'

                })
                // console.log(this.state.countryData)
            }}>

                    <Text style={styles.flatListText}>{this.props.address}</Text>
            </TouchableOpacity>
            

            </View>
            
        </View>
    

       )
    }
}


const styles = StyleSheet.create({
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
      mycountryflatList:{
        backgroundColor: '#267eb5',
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
})
