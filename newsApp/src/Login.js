import React from 'react';
import {SafeAreaView, ScrollView,KeyboardAvoidingView, Platform, View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { Input, Button} from './components';



const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#b2dfdb'}}>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS == 'android' ? null : "padding">
        <ScrollView style={{flex:1}} bounces={false}>
          <View style={{ flex: 1}}>
            <Image
                source={require('./assets/icon.png')}
                style={styles.logoStyle}
              
            />
            <Input holder="E-posta adresinizi giriniz.." />
            <Input holder="Şifrenizi giriniz.." />

            <Button text="Giriş Yap" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;


const styles = StyleSheet.create({
    logoStyle:{
        backgroundColor:'red',
        resizeMode:'contain',
        width:Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.40
        
    }

})

