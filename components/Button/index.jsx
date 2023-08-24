import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Button = ({ text, ...rest }) => {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};