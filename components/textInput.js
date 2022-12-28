import { View } from "react-native";

export default function UselessTextInput() {
  const placeholder = 'Your message';

  return (
    <View>
      <input type="text" placeholder="Address" 
      style={{
        borderBottomWidth: 1,
        
        borderWidth: 2,marginTop:20 ,padding:10,marginLeft:40,marginRight:40,fontWeight:"bold"}}/>
      <View style={{height:'10%',fontSize:25,marginLeft:50,marginTop:20 }}>PAYMENT METHOD</View>

      <input type="number" placeholder="*************4242" 
      style={{
        borderBottomWidth: 1,
        marginVertical:9,
        marginHorizontal:45,
        borderWidth: 2,marginTop:20 ,
        padding:10,marginLeft:40,marginRight:40
        ,fontWeight:"bold"}}/>

      <input type="text" placeholder={placeholder} 
      style={{
        borderBottomWidth: 1,
        marginVertical:9,
        marginHorizontal:45,
        borderWidth: 2,marginTop:20,padding:10,marginLeft:40,marginRight:40,fontWeight:"bold"}} />

      <input
        type="text"
        placeholder={'hi'.length === 2 ? 'My placeholder' : 'Your placeholder'}
        style={{
          borderBottomWidth: 1,
          marginVertical:9,
          marginHorizontal:45,
          borderWidth: 2,marginTop:20,padding:10
      ,marginLeft:40,marginRight:40,fontWeight:"bold" }}
      />
    </View>
  );
}
