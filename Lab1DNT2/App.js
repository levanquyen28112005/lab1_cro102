import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import WrapInput from "./components/WrapInput";


const Stack = createStackNavigator();

export default function App() {
  return (
    //{bai1}
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Header" component={Bai1} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    //{bai2}
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Bài 2" component={Bai2} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // //{bai3}
    <View style={styles.container}>
      <WrapInput title="Title" required />
      <WrapInput title="Title" withColon />
      <WrapInput title="Title" required secureTextEntry />
      <WrapInput title="Title" required secureTextEntry error="Description" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
});