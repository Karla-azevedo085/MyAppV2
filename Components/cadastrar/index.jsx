import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
const Api_ID = 'QQiCHP7Fa2V2b0JAeJ6NsUx23AhcKoe2uiGXshOz';
const JS_Key = 'uhmrpW1eNHf3Edr6azJOrchIl6boiCDP4d0XXQaM';
Parse.initialize(Api_ID,JS_Key);
Parse.serverURL = 'https://parseapi.back4app.com/';

import 'react-native-get-random-values';

export default function Cadastrar() {
 
  return (
    <SafeAreaView style={styles.container__safe}>
      <View style={styles.container}>
        <TextInput
        placeholder={'Produto'}
        style={style.input}
        />
        <TextInput
        placeholder={'Valor R$0,00'}
        style={styles.input}
        numeric
        keyboardType={'numeric'}
        />
        
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container__safe:{
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:300,
    height:44,
    padding:5,
    marginTop:10,
    marginBottom:10,
    backgroundColor: '#e8e8e8',
  },
});
