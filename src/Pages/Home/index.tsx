import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput , TouchableOpacity, ScrollView} from 'react-native';
import { styleLinksHeader, styleOneLinkHeader, styles } from './style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParamList} from '../types';

import {Post} from '../Post';

const OneLinkHeader = (props:any)=>{
    return(
        <View>
            <Text style={styleOneLinkHeader.link}>{props.nome}</Text>
        </View>
    );
};


const LinksHeader = ()=>{
    return(// Aqui dentro eu coloco meu JSX
        <View style={styleLinksHeader.container}>
            {/* <Text style={{color:"#4A4A4C"}}>Home</Text>
            <Text style={styleLinksHeader.link}>Post</Text>
            <Text>Videos</Text>
            <Text>Photos</Text>
            <Text>Community</Text> */}
            <OneLinkHeader nome="Home"/>
            <OneLinkHeader nome="Post"/>
            <OneLinkHeader nome="Videos"/>
            <OneLinkHeader nome="Photos"/>
            <OneLinkHeader nome="Community"/>
        </View>
    );
};
type HomePros = NativeStackNavigationProp<StackNavigatorParamList,'Home'>;

const Home = () => {
    const navigation = useNavigation<HomePros>();
    function irParaTelaLogin(){
        // console.log("oi");
        navigation.navigate('Login');
    }    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Image source={
                    require("../../assets/esquerd.png")
                    }>
                </Image>
                <View style={styles.inputTextView}>
                    <Image source={
                        require("../../assets/lup.png")
                        }>
                    </Image>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Search"
                        placeholderTextColor="#F5FFFF"
                        >
                        

                    </TextInput>
                </View>
                <Image source={
                    require("../../assets/ceta.png")
                    }>
                </Image>
            </View>
            <LinksHeader></LinksHeader>
            <ScrollView>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
            {/* <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={irParaTelaLogin}>
                    <Text style={styles.viewButtonText}> Ir para outra tela</Text>
                </TouchableOpacity>
                    
            </View> */}
        </View>
    );

}



export default Home;