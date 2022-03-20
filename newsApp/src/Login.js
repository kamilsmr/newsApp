import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import { Input, Button} from './components';



const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
            source={require('./assets/icon.png')}
            style={styles.logoStyle}
          
        />
        <Text>Login</Text>
      </View>
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

