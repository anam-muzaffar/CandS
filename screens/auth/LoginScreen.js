
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }
    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }
    onBackToLoginPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "Login"})]
        });
        this.props.navigation.dispatch(navActions);
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>
            <ImageBackground source={require("../../assets/images/bckgrnd.png")} style={{width: '100%', height: '100%'}}>

                <Text style ={styles.title}>Crafting & Stitching</Text>

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

                <View style={{paddingTop:10}} />

                <TextInput
                    style={styles.inputbox}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                    placeholder="Password (confirm)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={{paddingTop:20}} />
                <Button
                 title="Signup"
                 onPress={this.onSignupPress}
                 color="#DAA520" />
                <View style={{paddingTop:150}} />
                <Button
                 title="Back to Home"
                 onPress={this.onBackToLoginPress}
                 color="#DAA520"  />
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  title: {
   paddingTop:50,
   color: "yellow",
   fontSize:50,
   textAlign:"center",
 },
 inputbox:{
   width: 400,
   height: 50,
   borderWidth: 0,
   color: "#c4c633",
   fontSize: 18
 }
});
