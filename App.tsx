import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import TaskListItem from "./components/TaskListItem";
import TaskCreator from "./components/TaskCreator";

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
    const [tasks, setTasks] = useState([
        { key: "0", name: "Welcome to my minimal todo list!", done: false },
    ]);

    const addTask = (newTask: Task) => {
        setTasks(tasks.concat(newTask));
    };

    const removeTask = (task: Task) => {
        const newTasks = tasks.slice();
        const index = newTasks.indexOf(task);
        newTasks.splice(index, 1);
        setTasks(newTasks);
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
