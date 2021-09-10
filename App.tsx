import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

const LinksHeader = ()=> {
  return(// Aui dentro eu colo meu JSX
    <View style={StyleLinksHeader.container}> 
      <Text>Ola</Text>
    </View>
  );
};

const StyleLinksHeader = StyleSheet.create({
  container:{
     backgroudColor:"blue", color:"white"
  }
 });

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
            <Image source={
                require("./src/assets/imagem1.png")}></Image>
           <View style={styles.inputTextView}> 
         <Image source={
                require("./src/assets/imagem2.png")}></Image>
               <TextInput 
                 style={styles.textInput}
                 placeholder="Search"
                 placeholderTextColor="#F5FFFF"
                 >  


                 </TextInput>
          </View>
              <Image source={
                require("./src/assets/imagem3.png")}></Image> 
                 
                </View>
       <LinksHeader></LinksHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  header:{
    minHeight:70,
    backgroudColor:"#4369B0",
    paddingVertical:30, 
    paddingTop:50,
    flexDirection:"row",
    justifyCountent:"space-batween",
    alignItem:"center",
    paddingHorizontal:30,
   
  },
  inputTextView:{
      borderRadius:28,
      backgroundColor:"#2c4877",
      height:40, 
      alignItems: "center",
      flexDirection:"row",
  },
  textInput:{
     flex:1,
     paddingRight:10,
     color:"#F5FFFF",
  },
});
