
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ImageBackground,
  KeyboardAvoidingView  } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
    };
}
onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => { }, (error) => { Alert.alert(error.message); });
}
onCreateAccountPress = () => {
    var navActions = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: "Signup"})]
    });
    this.props.navigation.dispatch(navActions);
}
onForgotPasswordPress = () => {
    var navActions = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: "ForgotPassword"})]
    });
    this.props.navigation.dispatch(navActions);
}

render() {
    return (
        <View style={styles.loginpage}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          >
          <ImageBackground source={require("../../assets/images/bckgrnd.png")} style={{width: '100%', height: '100%'}}>

            <Text style ={styles.title}>CandS</Text>
            <Text style = {styles.subheading}> Crafting and Stitching</Text>

            <View style={{paddingTop:50}} />

            <TextInput style={styles.inputbox}
                value={this.state.email}
                onChangeText={(text) => { this.setState({email: text}) }}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

            <View style={{paddingTop:10}} />

            <TextInput style={styles.inputbox}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text}) }}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />
          <View style={{paddingTop:15}} />

            <Button
            title="Login"
            onPress={this.onLoginPress}
            color="#DAA520"
            textAlign= "center"
            />

          <View style={{paddingTop:200}} />


 <View style={styles.grid}>
  <View style={styles.sidebox}>
            <Button
            title="Sign Up"
            onPress={this.onCreateAccountPress}
            color="#DAA520"
          />
  </View>
  <View style={styles.sidebox}>
            <Button
             title="Forgot Password?"
             onPress={this.onForgotPasswordPress}
             color="black"
              />
  </View>
</View>
    </ImageBackground>
    </KeyboardAvoidingView>
</View>
    );
}
}

const styles = StyleSheet.create({

loginpage:{
 paddingTop:10,
 alignItems:"center",
 flex: 1,
  },

title: {
 paddingTop:50,
 color: "yellow",
 fontSize:50,
 textAlign:"center",
},

subheading: {
 color: "yellow",
 fontSize:20,
 textAlign:"center",
},

inputbox:{
  width: 400,
  height: 50,
  borderWidth: 2,
  borderColor: 'gray',
  color: "#c4c633",
  fontSize: 18
},
  grid: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sidebox: {
        flex: 1,
    }
});
