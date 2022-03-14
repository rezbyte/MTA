import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import TaskListItem from "./components/TaskListItem";
import TaskCreator from "./components/TaskCreator";
import Task from "./utils/Task";
import removeFromArray from "./utils/arrayHelpers";

const white = "#fff";
const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        backgroundColor: white,
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 10,
    },
    creator: {
        flex: 1,
    },
    task: {
        marginBottom: 5,
    },
    taskList: {
        flex: 3,
        marginTop: 10,
    },
});

export default function App(): JSX.Element {
    const initialTask = new Task("Welcome to my minimal todo list!");
    const [tasks, setTasks] = useState([initialTask]);

    const addTask = (newTask: Task) => {
        setTasks(tasks.concat(newTask));
    };

    const removeTask = (task: Task) => {
        setTasks(removeFromArray(tasks, task));
    };

    const renderItem = ({ item }: { item: Task }) => (
        <TaskListItem task={item} onClick={removeTask} style={styles.task} />
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <TaskCreator onAdd={addTask} style={styles.creator} />
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
