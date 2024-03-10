import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import React from "react";

export default function welcome() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          height: "50%",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 70,
        }}
      >
        <View style={{ height: 100, width: 100 }}>
          <Image
            source={require("./assets/image/pluse.png")}
            resizeMode="cover"
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View style={{ height: 300, width: 300 }}>
          <Image
            source={require("./assets/image/logo.png")}
            resizeMode="cover"
            style={{ height: 300, width: 300 }}
            
          />
        </View>
      </View>
      <View
        style={{
          height: "30%",
          alignItems: "center",
          marginHorizontal: 15,
          gap: 20,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Your<Text style={{ color: "green" }}> Everyday Doctor</Text> {"\n"}{" "}
          Appointment Medical app
        </Text>
        <Text style={{ fontSize: 10, textAlign: "center" }}>
          Talk to doctors,buy madications, or request an ambulance with ease
        </Text>
        <Pressable style={styles.container}>
          <Text style={{ color: "#fff" }}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.container}>
          <Text>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    width: "100%",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
});
