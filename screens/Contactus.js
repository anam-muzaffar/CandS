import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

export default class Contactus extends React.Component {
  static navigationOptions = { header: null,};




  render() {
    return (
      <View>
      <Text style= {styles.text}> Contactus Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20 
    }
});
