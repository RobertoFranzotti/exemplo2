<<<<<<< HEAD
import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";


export function Header({ tasksCreated, completedTasks }) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={[styles.text, { color: "#4EA8DE" }]}>Criadas</Text>
        <Text style={styles.bandle}>{tasksCreated}</Text>
      </View>

      <View style={styles.column}>
        <Text style={[styles.text, { color: "#8284FA" }]}>Concluídas</Text>
        <Text style={styles.bandle}>{completedTasks}</Text>
      </View>
    </View>
  );
}
=======
import { App } from "react-native";

export function Header(){
    
}
>>>>>>> c2a0a4548ab9fb779c106a871c3c93ec5bf9793d
