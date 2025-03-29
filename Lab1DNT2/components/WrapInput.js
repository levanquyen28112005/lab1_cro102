import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
const WrapInput = ({ title, withColon, required, error, description, isFocus, ...rest }) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>
        {title} {required && <Text style={{ color: "red" }}>*</Text>}
        {withColon && " :"}
      </Text>

     
      <View style={[styles.inputContainer, isFocus && styles.inputFocused, error && styles.inputError]}>
        <TextInput style={styles.input} {...rest} />
        {error ? <Icon name="error-outline" size={20} color="red" style={styles.errorIcon} /> : null}
      </View>

    
      {error && <Text style={styles.errorText}>{error}</Text>}

      
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

// **CSS Styles**
const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
  },
  inputFocused: {
    borderColor: "blue",
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  description: {
    color: "#666",
    fontSize: 12,
    marginTop: 5,
  },
  errorIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default WrapInput;
