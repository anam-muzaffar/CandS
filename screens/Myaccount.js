import React from 'react';
import {  ImageBackground,
          ScrollView,
          StyleSheet,
          Text,
          View,
          TextInput,
          Button,
          Linking,
          Alert, } from 'react-native';
import * as firebase from 'firebase';

export default class Myaccount extends React.Component {
  static navigationOptions = {header: null};
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }
  onSignoutPress = () => {
    firebase.auth().signOut();
  }
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }
  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        Alert.alert("Password was changed");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }
  render() {
    return (
      <ImageBackground source={require("../assets/images/bckgrnd.png")} style={{width: '100%', height: '100%'}}>
      <ScrollView style={{flex: 1, flexDirection: "column"}}>
        <Button
        title="Sign out"
        onPress={this.onSignoutPress}
        color="#DAA520" />

        <View style={{paddingTop:50}} />
        //picture
        <View style={styles.grid}>
          <View style={styles.sidebox}>
            <Button
              title = 'Upload Pic'
              color="#DAA520"/>
          </View>
          <View style={styles.sidebox}>
            <Text style={{fontSize: 20, color:'#fff'}}> Place Holder </Text>
          </View>
        </View>
        <View style={{paddingTop:80}} />
        //Name
        <View style={styles.grid}>
          <View style={styles.sidebox}>
             <Text style={{fontSize: 20, color:'#fff'}}>Full Name </Text>
          </View>
          <View style={styles.sidebox}>
             <TextInput style={styles.textInput} placeholder='Joey Tribbiani'></TextInput>
             <View style={{paddingTop:10}} />
          </View>
        </View>
        //Email
        <View style={styles.grid}>
          <View style={styles.sidebox}>
             <Text style={{fontSize: 20, color:'#fff'}}>Email </Text>
          </View>
          <View style={styles.sidebox}>
             <TextInput style={styles.textInput}placeholder="example@cands.com"></TextInput>
             <View style={{paddingTop:10}} />
          </View>
        </View>
        //Contact
        <View style={styles.grid}>
          <View style={styles.sidebox}>
             <Text style={{fontSize: 20, color:'#fff'}}>Contact </Text>
             <Text style={{fontSize: 20, color:'#fff'}}>(Opt.) </Text>
          </View>
          <View style={styles.sidebox}>
             <TextInput style={styles.textInput}placeholder=" 0900-78601 "></TextInput>
             <View style={{paddingTop:10}} />
          </View>
        </View>
        //Address 1
        <View style={styles.grid}>
          <View style={styles.sidebox}>
             <Text style={{fontSize: 20, color:'#fff'}}>Address 1 </Text>
          </View>
          <View style={styles.sidebox}>
             <TextInput style={styles.textInput } placeholder="Address 1"></TextInput>
             <View style={{paddingTop:10}} />
          </View>
        </View>
        //Address 2
        <View style={styles.grid}>
          <View style={styles.sidebox}>
             <Text style={{fontSize: 20, color:'#fff'}}>Address 2 </Text>
          </View>
          <View style={styles.sidebox}>
             <TextInput style={styles.textInput} placeholder="Address 2"></TextInput>
             <View style={{paddingTop:10}} />
          </View>
        </View>
        //Change Password
        <View style={{paddingTop:20}} />
        <View style={styles.grid}>
          <View style={styles.sidebox}>
             <Text style={{fontSize: 20, color:'#fff'}}> Change </Text>
             <Text style={{fontSize: 20, color:'#fff'}}> Password </Text>

          </View>
          <View style={styles.sidebox}>
            <TextInput style={styles.passchange}
              value={this.state.currentPassword}
              placeholder="Current"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => { this.setState({currentPassword: text}) }}
            />

          </View>
        </View>
        <View style={styles.grid}>
          <View style={styles.sidebox}>
          <Button
            title="Update"
            onPress={this.onChangePasswordPress}
            color="#DAA520" />
          </View>
          <View style={styles.sidebox}>
          <TextInput style={styles.passchange}
              value={this.state.newPassword}
              placeholder="New"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={(text) => { this.setState({newPassword: text}) }}
            />
          </View>
        </View>

      </ScrollView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
   },
  textInput: {
    borderWidth:1,
    borderColor:"gray",
    marginVertical: 10,
    padding:10,
    height:40,
    width:200,
    fontSize: 18
   },
  grid: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    },
  sidebox: {
   flex:1,
   marginRight: 100
  },
  passchange: {
    borderWidth:1,
    borderColor:"gray",
    marginVertical: 5,
    marginRight:15,
    padding:2,
    height:40,
    width:400,
    fontSize: 18
   },
});
