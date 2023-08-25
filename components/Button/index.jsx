<<<<<<< HEAD
import { useState } from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

export function Input({ ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocus]}
      {...rest}
      placeholderTextColor="#808080"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}
=======
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
>>>>>>> c2a0a4548ab9fb779c106a871c3c93ec5bf9793d
