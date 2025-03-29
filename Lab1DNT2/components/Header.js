import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const Header = ({ title, iconLeft, onPressLeft, iconRight, onPressRight }) => {
  const renderLeft = () => {
    return (
      <View style={styles.containerLeft}>
        {iconLeft ? (
          <Pressable hitSlop={15} onPress={onPressLeft}>
            <Image source={iconLeft} style={styles.icon} />
          </Pressable>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
    );
  };

  const renderCenter = () => {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const renderRight = () => {
    return (
      <View style={styles.containerRight}>
        {iconRight ? (
          <Pressable hitSlop={15} onPress={onPressRight}>
            <Image source={iconRight} style={styles.icon} />
          </Pressable>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  containerLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  containerCenter: {
    flex: 2,
    alignItems: "center",
  },
  containerRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#000",
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
  },
});

export default Header;
