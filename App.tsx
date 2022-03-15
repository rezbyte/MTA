import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList, useColorScheme } from "react-native";
import { useState } from "react";
import { white, black } from "./constants/colors";
import TaskListItem from "./components/TaskListItem";
import TaskCreator from "./components/TaskCreator";
import Task from "./utils/Task";
import removeFromArray from "./utils/arrayHelpers";

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 10,
    },
    containerDark: {
        backgroundColor: black,
    },
    containerLight: {
        backgroundColor: white,
    },
    creator: {
        flex: 1,
    },
    creatorDark: {
        borderColor: white,
        color: white,
    },
    creatorLight: {
        color: black,
    },
    task: {
        marginBottom: 5,
    },
    taskDark: {
        color: white,
    },
    taskLight: {
        color: black,
    },
    taskList: {
        flex: 3,
        marginTop: 10,
    },
});

export default function App(): JSX.Element {
    const colourScheme = useColorScheme();
    const containerColor =
        colourScheme === "dark" ? styles.containerDark : styles.containerLight;
    const creatorColor =
        colourScheme === "dark" ? styles.creatorDark : styles.creatorLight;
    const taskColor =
        colourScheme === "dark" ? styles.taskDark : styles.taskLight;

    const initialTask = new Task("Welcome to my minimal todo list!");
    const [tasks, setTasks] = useState([initialTask]);

    const addTask = (newTask: Task) => {
        setTasks(tasks.concat(newTask));
    };

    const removeTask = (task: Task) => {
        setTasks(removeFromArray(tasks, task));
    };

    const renderItem = ({ item }: { item: Task }) => (
        <TaskListItem
            task={item}
            onClick={removeTask}
            style={[styles.task, taskColor]}
        />
    );

    return (
        <SafeAreaProvider style={containerColor}>
            <SafeAreaView style={styles.container}>
                <TaskCreator
                    onAdd={addTask}
                    style={[styles.creator, creatorColor]}
                />
                <FlatList
                    data={tasks}
                    renderItem={renderItem}
                    style={styles.taskList}
                />
                <StatusBar />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
