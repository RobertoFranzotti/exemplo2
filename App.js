import { useState } from "react";
import { FlatList, Text, View } from "react-native";

// Component
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { styles } from "./styles";

export default function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  function handleName() {
    setNames((prevState) => [...prevState, name]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.form}>
        <Input
          placeholder="Digite algo"
          onChangeText={(text) => setName(text)}
        />
        <Button
          activeOpacity={0.75}
          onPress={handleName}
          text="Adicionar Name"
        />
      </View>

      {/*<FlatList
        data={names}
        key={(name) => name}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        />*/}
    </View>
  );
}
