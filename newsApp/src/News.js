import React from 'react';
import {SafeAreaView, View, Text, ScrollView, Flatlist } from 'react-native';

myArray = Array.from(Array(1500).keys());

const News = () => {
  return (
    <SafeAreaView style={{ flex:1}}>
      {/* <ScrollView>
        {
          myArray.map(u => <Text style={{ fontSize: 30 }}>{u}</Text>)
        } 
      </ScrollView> */}
      
    </SafeAreaView>
  );
};

export default News;
