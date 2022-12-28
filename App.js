import React from 'react';
import react,{Component} from 'react';
import { SafeAreaView, TextInput, View ,AppRegistry, Text,Button} from 'react-native';
import UselessTextInput from './components/textInput.js';
import  textInput from './components/textInput.js';


const getcredit = () => {
return (
    <View style={{
      height: '100%' , width:'100%'
    }}> 
    <View style={{height:'20%',flexDirection:"row",backgroundColor:"purple",borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <View style={{color:"white",flex:3,fontSize:30,fontWeight:'bold',padding:40,fontcolor:"white",fontColor:"white"}}>Checkout</View>
      <View style={{color:"white",flex:3,flexDirection:"row-reverse",fontSize:30,fontColor:"white",padding:40,fontcolor:"white"}}>close</View>
      

    </View>
    
    <View style={{marginTop:-30,height:'90%',innerHeight:"40% ",borderRadius:50,backgroundColor:"white",marginHorizontal:40}}>
      <View style={{height:'90%'}}>
        <View style={{height:'10%',fontSize:25,marginLeft:50,marginTop:20 }}>DELIVERY ADDRESS</View>
        <UselessTextInput style={{flex:2,height:'20%'}} />


        {/* <UselessTextInput style={{flex:2,height:'20%'}}/>

        <UselessTextInput style={{flex:2,height:'20%'}}/>
        

        <UselessTextInput style={{flex:2,height:'20%'}}/> */}
       <View style ={{marginTop:40,marginHorizontal:35 }}> <Button title='PAYMENT' color={"purple"} ></Button>
       </View>
      </View>
    </View>
   

    </View>
  );
};


export default getcredit;