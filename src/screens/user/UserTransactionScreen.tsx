import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import RecapBannerComponent from '../../components/user/transaction/RecapBannerComponent';

interface UserTransactionProps {
  backFunction: Function
}

interface UserTransactionState {}

export default class UserTransactionScreen extends React.Component<UserTransactionProps,UserTransactionState> {
  render() 
  {
    const colorModes = ['#FC5667', '#07CBC9', '#FDD800'];
    const iconModes = ['md-pizza', 'logo-dropbox', 'md-basket'];
    const {backFunction} = this.props;

    return (
      <ScrollView style={{flex:1,backgroundColor:'#fff'}}>
        <View style={{flex:1,flexDirection:'row',marginVertical:60}}>
          <View style={{flex:1, alignItems:'center',padding:5}}>
            <TouchableOpacity onPress={backFunction}>
              <Ionicons name="md-arrow-back" color="#000" size={50} />
            </TouchableOpacity>
          </View>
          <View style={{flex:5,padding:5}}>
            <Text style={{fontFamily:'product-sans-bold',fontSize:35,letterSpacing:0.3}}>Transaction Details</Text>
          </View>
        </View>
        <View style={{margin:15}}>
          <Text style={{fontFamily:'product-sans-regular'}}>Add notes for collector...</Text>
          <TextInput
            style={{padding:10,borderWidth:1,borderColor:'#aaaaaa',height:100,backgroundColor:'#eeeeee',borderRadius:7,marginVertical:10,fontFamily:'product-sans-regular'}}
            editable
            multiline={true}
          />
        </View>
        <View>
          <RecapBannerComponent backgroundColor={colorModes[0]} iconName={iconModes[0]} amount={8} price={"80.000"} />
          <RecapBannerComponent backgroundColor={colorModes[1]} iconName={iconModes[1]} amount={12} price={"160.000"} />
          <RecapBannerComponent backgroundColor={colorModes[2]} iconName={iconModes[2]} amount={7} price={"812.345"} />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',width:'70%'}}>
            <View style={{paddingVertical:30}}>
              <TouchableOpacity style={{backgroundColor:'#9b26af',paddingHorizontal:72,paddingVertical:18,borderRadius:7,elevation:4}}>
                <Text style={{fontFamily:'product-sans-regular',fontSize:16,color:'#fff'}}>Proceed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

    )
  }
}