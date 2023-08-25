import { useState } from "react";
import { Image, TouchableOpacity, View, FlatList, Alert } from "react-native";
import uuid from "react-native-uuid";

// Icons
import Feather from "@expo/vector-icons/Feather";

// Assets
import Logo from "../../assets/images/logo.png";

// Components
import { Input } from "../../components/Input";
import { TaskCard } from "../../components/TaskCard";
import { Header } from "../../components/Header";
import { Empty } from "../../components/Empty";

import { styles } from "./styles";
import { Button } from "../../components/Button";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: uuid.v4(),
      description: "Task test",
      isDone: false,
    },
    {
      id: uuid.v4(),
      description: "Task test 2",
      isDone: false,
    },
    {
      id: uuid.v4(),
      description: "Task test 2",
      isDone: true,
    },
  ]);
  const [taskDescription, setTaskDescription] = useState("");

  function handleAddNewTask() {
    const newTask = {
      id: uuid.v4(),
      description: taskDescription,
      isDone: false,
    };

    setTasks((prevState) => [...prevState, newTask]);

    setTaskDescription("");
  }

  function handleTaskDone(id) {
    console.log(id);

    setTasks((prevState) =>
      prevState.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.image} />
      </View>

      <View style={styles.form}>
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={(text) => setTaskDescription(text)}
          value={taskDescription}
        />
        <Button activeOpacity={0.75} onPress={handleAddNewTask} />
      </View>

      <View style={styles.content}>
        <FlatList
          data={tasks}
          ListHeaderComponent={<Header completedTasks={0} tasksCreated={0} />}
          ListEmptyComponent={Empty}
          showsVerticalScrollIndicator={false}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => console.log("delete")}
            />
          )}
        />
      </View>
    </View>
  );
}
