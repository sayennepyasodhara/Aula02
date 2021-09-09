import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
              <Image source={
                require("./src/assets/imagem1.png")}></Image>

                <Image source={
                require("./src/assets/imagem2.png")}></Image>

              <Image source={
                require("./src/assets/imagem3.png")}></Image>
                
      </View>
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
    paddingTop:30,
    flexDirection:"row",
    justifyCountent:"space-batween",
    alignItem:"center",
    paddingHorizontal:30,
  },
});
