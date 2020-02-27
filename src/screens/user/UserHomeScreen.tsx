import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface UserHomeProps {

}

interface UserHomeState {
  mainColor: string;
  sizeState: number[];
  currentState: number;
}
export default class UserHomeScreen extends React.Component<UserHomeProps, UserHomeState>
{
  constructor(props)
  {
    super(props);
    this.state = {
      mainColor: '#FC5667',
      currentState: 0,
    }
  }

  render() 
  {
    let {mainColor, sizeState, currentState} = this.state;

    const colorModes = ['#FC5667', '#07CBC9', '#FDD800'];
    const typeTexts = ['PAPER/CARDBOARD', 'FOOD WASTE', 'PLASTIC BAGS'];
    const sizeStates = [
      [1.5,1,1],
      [1,1.5,1],
      [1,1,1.5],
    ];

    return (
      <ScrollView style={{flex:1}}>
        <View style={styles.contentContainer}>
          <View style={[styles.jumbotron,{backgroundColor:mainColor}]}>
            <View style={{flex:0.8,justifyContent:'center',padding:5}}>
              <Text style={{fontFamily: 'product-sans-bold',color:'#fff',fontSize:25}}>Home</Text>
            </View>
            <View style={{flex:2,justifyContent:'center', alignItems:'center', padding:5}}>
              <View style={{backgroundColor:'#E8E8E8',aspectRatio:1,flex:1,borderRadius:500,alignItems:'center',justifyContent:'center'}}>
                <Ionicons name="md-cafe" size={60} style={{color:'#BDBDBD'}} />
              </View>
            </View>
            <View style={{flex:2, alignItems:'center'}}>
              <Text style={{paddingVertical:5,fontFamily:'product-sans-bold',fontSize:25,letterSpacing:0.3,color:'#fff'}}>UPNORMAL COFFEE</Text>
              <View style={{flex:1,paddingVertical:5}}>
                <Text style={{color:'#fff',fontFamily:'product-sans-regular',letterSpacing:0.3,textAlign:'center'}}>Jln. Pisang Goreng Tepung No. 3</Text>
                <Text style={{color:'#fff',fontFamily:'product-sans-regular',letterSpacing:0.3,textAlign:'center'}}>Kecamatan Pohon Pisang</Text>
                <Text style={{color:'#fff',fontFamily:'product-sans-regular',letterSpacing:0.3,textAlign:'center'}}>Kota Banana Split</Text>
              </View>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row',padding:20}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <View style={{flex:sizeStates[currentState][0],backgroundColor:'red',aspectRatio:1,alignItems:'center',justifyContent:'center',margin:5,borderRadius:500}}>

              </View>
              <View style={{flex:sizeStates[currentState][1],backgroundColor:'purple',aspectRatio:1,alignItems:'center',justifyContent:'center',margin:5,borderRadius:500}}>
                <Text>lol</Text>
              </View>
              <View style={{flex:sizeStates[currentState][2],backgroundColor:'green',aspectRatio:1,alignItems:'center',justifyContent:'center',margin:5,borderRadius:500}}>
                <Text>lol</Text>
              </View>
            </View>
          </View>
          <View>
            <Button title="next" onPress={()=>{
              let i = currentState+1;
              this.setState({currentState: i,sizeState: sizeStates[i]});
            }} />
            <Button title="prev" onPress={()=>{
              let i = currentState-1;
              this.setState({currentState: i,sizeState: sizeStates[i]});
            }} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jumbotron: {
    flex:1,
    width:'100%',
    alignContent:'center',
    justifyContent:'center',
    height:400,
    padding:20,
  }
});