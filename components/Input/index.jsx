<<<<<<< HEAD
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";

export function Button({ ...rest }) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Feather name="plus-circle" color="#f2f2f2" size={18} />
    </TouchableOpacity>
  );
}
=======
import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';


export const Input = (props) => {
  return <TextInput style={styles.input} />;


}
>>>>>>> c2a0a4548ab9fb779c106a871c3c93ec5bf9793d
