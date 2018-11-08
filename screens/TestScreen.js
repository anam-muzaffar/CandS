import React from 'react';
import { ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Linking,
  Alert,
  ImageBackground,
  Dimensions} from 'react-native';
import { TestComponent, PhoneButton } from './../components/AppComponents';
import * as firebase from 'firebase';
import Carousel from 'react-native-looped-carousel';
const { width, height } = Dimensions.get('window');

export default class TestScreen extends React.Component {

  static navigationOptions = {header: null, };
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
      size: { width, height },
    };
  }
  _onLayoutDidChange = (e) => {
  const layout = e.nativeEvent.layout;
  this.setState({ size: { width: layout.width, height: layout.height } });
}
  onSignoutPress = () => {
    firebase.auth().signOut();
  }
  myaccount=()=>{
    var navActions = NavigationActions.reset({
        actions: [NavigationActions.navigate({routeName: "Myaccount"})]
    });
    this.props.navigation.dispatch(navActions);
  }
  placeorder=()=>{
    var navActions = NavigationActions.reset({
        actions: [NavigationActions.navigate({routeName: "Placeorder"})]
    });
    this.props.navigation.dispatch(navActions);
  }
  contactus=()=>{
    var navActions = NavigationActions.reset({
        actions: [NavigationActions.navigate({routeName: "Contactus"})]
    });
    this.props.navigation.dispatch(navActions);
  }

  render() {
    return (
      <ImageBackground source={require("../assets/images/bckgrnd.png")} style={{width: '100%', height: '100%'}}>

      <View style={{ flex: 2 ,width: 400, height:250}} onLayout={this._onLayoutDidChange}>
         <Carousel
           delay={5000}
           style={this.state.size}
           autoplay
           pageInfo
           onAnimateNextPage={(p) => console.log(p)}
         >
         <View>
            <Image
              style={{width: 400, height:200}}
              source={{uri: 'https://firebasestorage.googleapis.com/v0/b/cands-71015.appspot.com/o/b473890e7ec4349595d8e7a753e68b16.png?alt=media&token=e4f8f0ce-3c21-474e-8dc7-521705fa90ac'}}
            />
              <Text>1</Text>
            </View>

          <View >
            <Image
            style={{width: 400, height:200}}
              source={{uri: 'https://firebasestorage.googleapis.com/v0/b/cands-71015.appspot.com/o/5605b264c55d1ce57c3a0cac9a18b355.jpg?alt=media&token=13c22aff-65c4-4e24-8126-e8752ba9d056'}}
            />
            <Text>2</Text>
          </View>

          <View>
             <Image
             style={{width: 400, height:200}}
               source={{uri: 'https://firebasestorage.googleapis.com/v0/b/cands-71015.appspot.com/o/Elan-Eden-Eid-Collection-7.jpg?alt=media&token=cbc0feb7-cb27-4b23-9279-694b93b2c53a'}}
             />
            <Text>3</Text>
           </View>

         </Carousel>
       </View>
       <Button
          title="Place an Order"
          onPress={this.placeorder}
          color="#DAA520"
      />

       <View style={styles.grid}>
        <View style={styles.sidebox}>
                  <Button
                  title="My Account"
                  onPress={this.Myaccount}
                  color="#DAA520"
                />
        </View>
        <View style={styles.sidebox}>
                  <Button
                   title="Contact Us"
                   onPress={this.contactus}
                   color="#DAA520"
                    />
        </View>
       </View>
        <Button
           title="Sign out"
           onPress={this.onSignoutPress}
           color="#DAA520"
           />
        <View style={{ paddingTop:250}} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({

  text: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
       },

  textInput: {
        borderWidth:1,
        borderColor:"gray",
        marginVertical: 20,
        padding:10,
        height:40,
        alignSelf: "stretch",
        fontSize: 18,
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
