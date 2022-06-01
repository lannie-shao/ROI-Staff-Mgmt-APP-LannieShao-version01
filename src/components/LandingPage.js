import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2015/11/25/01/09/abstract-background-1061100_1280.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>HR Management System</Text>
      <Image source={require('../images/logo_example02.png')} style={styles.imgStyle}></Image>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  imgStyle: { 
    resizeMode:'cover'
},
  text: {
    color: "#3b3b3b",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#D9D9D9"
  }
});

export default App;
