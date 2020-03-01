import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModeComponent from '../../components/user/dashboard/ModeComponent';
import RoundButton from '../../components/user/dashboard/RoundButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface UserHomeProps {

}

interface UserHomeState {
  currentState: number;
  trashAmount: number[];
}
export default class UserHomeScreen extends React.Component<UserHomeProps, UserHomeState>
{
  constructor(props)
  {
    super(props);
    this.state = {
      currentState: 0,
      trashAmount: [0,0,0]
    }
  }

  
  render() 
  {
    let {currentState, trashAmount} = this.state;
    
    const colorModes = ['#FC5667', '#07CBC9', '#FDD800'];
    const typeTexts = ['FOOD WASTE', 'PAPER/CARDBOARD', 'PLASTIC BAGS'];
    const sizeStates = [
      [1.5,1,1],
      [1,1.5,1],
      [1,1,1.5],
    ];

    return (
      <ScrollView style={{flex:1,backgroundColor:'#FFFFFF'}}>
        <View style={styles.contentContainer}>
          <View style={[styles.jumbotron,{backgroundColor:colorModes[currentState]}]}>
            <View style={{flex:0.8,justifyContent:'center',padding:5}}>
              <Text style={{fontFamily: 'product-sans-bold',color:'#fff',fontSize:25}}>Home</Text>
            </View>
            <View style={{flex:2,justifyContent:'center', alignItems:'center', padding:5}}>
              <View style={{backgroundColor:'#E8E8E8',aspectRatio:1,flex:1,borderRadius:500,alignItems:'center',justifyContent:'center',elevation:12}}>
                <Ionicons name="md-cafe" size={60} style={{color:'#BDBDBD'}} />
              </View>
            </View>
            <View style={{flex:2, alignItems:'center'}}>
              <Text style={{paddingVertical:5,fontFamily:'product-sans-bold',fontSize:25,letterSpacing:0.3,color:'#fff'}}>UPNORMAL COFFEE</Text>
              <View style={{flex:1,paddingVertical:5}}>
                <Text style={styles.addressText}>Jln. Pisang Goreng Tepung No. 3</Text>
                <Text style={styles.addressText}>Kecamatan Pohon Pisang</Text>
                <Text style={styles.addressText}>Kota Banana Split</Text>
              </View>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row',padding:20}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <ModeComponent iconName={"md-pizza"} bgColor={colorModes[0]} fontColor="#FFFFFF" flexSize={sizeStates[currentState][0]} />
              <ModeComponent iconName={"logo-dropbox"} bgColor={colorModes[1]} fontColor="#FFFFFF" flexSize={sizeStates[currentState][1]} />
              <ModeComponent iconName={"md-basket"} bgColor={colorModes[2]} fontColor="#FFFFFF" flexSize={sizeStates[currentState][2]} />
            </View>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent:'flex-start',height:100}}>
            <View style={{width:250}}>
              <Text style={{fontFamily:'product-sans-bold',fontSize:32,textAlign:'center',color: colorModes[currentState],letterSpacing:0.3}}>
                {typeTexts[currentState]}
              </Text>
            </View>
          </View>
          <View style={{flexDirection:'row',width:'60%'}}>
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <View>
                <RoundButton iconName="md-remove" buttonColor={colorModes[0]} onPress={() =>{
                  let tmp = trashAmount;
                  tmp[currentState] = tmp[currentState]>0 ? tmp[currentState]-1 : tmp[currentState] ;
                  this.setState({trashAmount: tmp});
                }} />
              </View>
              <View>
                <Text style={{fontFamily:'product-sans-bold',fontSize:30,paddingHorizontal:30}}>{trashAmount[currentState]} kg</Text>
              </View>
              <View styles={{marginHorizontal:30}}>
                <RoundButton iconName="md-add" buttonColor={colorModes[1]} onPress={() =>{
                  let tmp = trashAmount;
                  tmp[currentState] = tmp[currentState]+1;
                  this.setState({trashAmount: tmp});
                }} />
              </View>
            </View>
          </View>
          <View style={{paddingVertical:30}}>
            <TouchableOpacity style={{backgroundColor:'#9b26af',paddingHorizontal:72,paddingVertical:18,borderRadius:7,elevation:4}} onPress ={() =>{
              let i = (currentState+1)%3;
              this.setState({currentState: i});
            }} >
              <Text style={{fontFamily:'product-sans-regular',fontSize:16,color:'#fff'}}>Proceed</Text>
            </TouchableOpacity>
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
  },
  addressText: {
    color:'#fff',
    fontFamily:'product-sans-regular',
    letterSpacing:0.3,
    textAlign:'center'
  }
});