import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';


export default class CovidCountryCase extends React.Component{
    constructor(){
        super()
        this.state ={
            isDetailVisible:false,
            countryData:'',
            dropDown:'V'
        }
    }    

    // showCountryData(name){
    //     console.log(this.state.countries_json['India']);
    // }    



    render(){
        return(
            
            <View style={styles.flatList}>
            <Text style={styles.flatListText}>{this.props.name}</Text>
            <View>
            <table>
                <tbody>
                    <tr>
                        <td>{this.state.totalCases}</td><td>{this.state.countryData.today_confirmed}</td>
                    </tr>
                    <tr>
                        <td>{this.state.newCases}</td><td>{this.state.countryData.today_new_confirmed}</td>
                    </tr>
                    <tr>
                        <td>{this.state.totalDeaths}</td><td>{this.state.countryData.today_deaths}</td>
                    </tr>
                    <tr>
                        <td>{this.state.newDeaths}</td><td>{this.state.countryData.today_new_deaths}</td>
                    </tr>
                    <tr>
                        <td>{this.state.totalRecovered}</td><td>{this.state.countryData.today_recovered}</td>
                    </tr>
                </tbody>
            </table>
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

                    <Text style={styles.flatListText}>{this.state.dropDown}</Text>
            </TouchableOpacity>
            

            </View>
            
        </View>
    

       )
    }
}


const styles = StyleSheet.create({
    flatList:{
        alignItem:'center',
        justifyContent:'center',
        borderWidth:5,
        borderRadius:'12px',
        marginLeft:'30%',
        padding: 20,
        marginVertical: 8,
        width:'40%',
        paddingTop:10,
        paddingBottom:10,
      },
      
      flatListText:{
          fontSize:37,
          justifyContent:'center',
          alignSelf:'center'
      },
})
