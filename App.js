
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'; 
import firebase from 'react-native-firebase'; 


export default class App extends Component {

  async componentDidMount(){
   const enabled =  await firebase.messaging().hasPermission(); 

   if (enabled) {
    const token = await firebase.messaging().getToken(); 
    console.log(token);
    firebase.notifications().onNotification( notefication => {
      alert("You recieved new noteficaions") ; 
      
    })
    firebase.notifications().onNotificationOpened()
   } else {
     try {
       firebase.messaging().requestPermission() ; 
     } catch (error) {
      alert("user reject permission")       
     }
   }

  }


  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponn </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  }
})