import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default Cards = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.box, styles.text1]}>cards</Text>
      <Text style={[styles.box, styles.text2]}>cards</Text>
      <Text style={[styles.box, styles.text3]}>cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 5,
    height: 250,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 5,
  },
  box: {
    width: 50,
    height: 50,
  },
  text1: {
    backgroundColor: "red",
  },
  text2: {
    backgroundColor: "blue",
  },
  text3: {
    backgroundColor: "yellow",
  },
});
