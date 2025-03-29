import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const Bai1 = ({ navigation }) => {
  return (
    <View>
      {/* Header chính */}
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Header" titleStyle={styles.centerTitle} />
        <Appbar.Action icon="account-circle" onPress={() => console.log("Profile pressed")} />
      </Appbar.Header>

      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Trang chủ" titleStyle={styles.centerTitle1} />
      </Appbar.Header>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="" titleStyle={styles.centerTitle} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  centerTitle: {
    textAlign: "center", 
    fontSize: 25, 
    fontWeight: "bold", 
  },
  centerTitle1: {
    paddingLeft: 200,
    fontSize: 25,
    fontWeight: "bold",
  }
});

export default Bai1;
