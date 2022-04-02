import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
    Platform,
    PlatformColor,
    StyleSheet,
    FlatList,
    useColorScheme,
    Alert,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { white, black } from "./constants/colors";
import TaskListItem from "./components/TaskListItem";
import TaskCreator from "./components/TaskCreator";
import Task from "./utils/Task";
import { removeFromArray, editInArray } from "./utils/arrayHelpers";

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flex: 1,
        justifyContent: "flex-start",
        marginHorizontal: 10,
    },
    containerDark: {
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor("systemBackground"),
            },
            android: {
                backgroundColor: PlatformColor(
                    "@android:color/background_dark"
                ),
            },
            default: { backgroundColor: black },
        }),
    },
    containerLight: {
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor("systemBackground"),
            },
            android: {
                backgroundColor: PlatformColor(
                    "@android:color/background_light"
                ),
            },
            default: { backgroundColor: white },
        }),
    },
    creator: {
        flex: 1,
    },
    creatorDark: {
        borderColor: white, // PlatformColor crashes the app when used with borderColor
        ...Platform.select({
            ios: {
                color: PlatformColor("label"),
            },
            android: {
                color: PlatformColor("@android:color/primary_text_dark"),
            },
            default: { color: white },
        }),
    },
    creatorLight: {
        borderColor: black,
        ...Platform.select({
            ios: {
                color: PlatformColor("label"),
            },
            android: {
                color: PlatformColor("@android:color/primary_text_light"),
            },
            default: { color: black },
        }),
    },
    task: {
        marginBottom: 5,
    },
    taskDark: {
        ...Platform.select({
            ios: {
                color: PlatformColor("label"),
            },
            android: {
                color: PlatformColor("@android:color/primary_text_dark"),
            },
            default: { color: "white" },
        }),
    },
    taskLight: {
        ...Platform.select({
            ios: {
                color: PlatformColor("label"),
            },
            android: {
                color: PlatformColor("@android:color/primary_text_light"),
            },
            default: { color: "black" },
        }),
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

    function showError(message: string, error: Error) {
        Alert.alert(
            "An Error Occurred",
            `${message}\nException: ${error.message}`
        );
    }

    const initialTask = new Task("Welcome to my minimal todo list!");

    const getRawTasks = async (): Promise<[string, string | null][]> => {
        const keys = await AsyncStorage.getAllKeys();
        return AsyncStorage.multiGet(keys);
    };

    const getTasks = (): Task[] => {
        try {
            let tasks: Task[] | null = null;
            getRawTasks().then(
                (rawTasks) => {
                    tasks = rawTasks.map(
                        (item: [string, string | null]): Task => ({
                            key: item[0],
                            name: item[1] ?? "Unknown Task",
                        })
                    );
                },
                () => {
                    throw new Error("Failed to get tasks");
                }
            );
            return tasks ?? [initialTask];
        } catch (error) {
            showError("Failed to retieve tasks from storage", error as Error);
            return [initialTask];
        }
    };

    const [tasks, setTasks] = useState(getTasks);

    const storeTask = async (task: Task) => {
        await AsyncStorage.setItem(task.key, task.name);
    };

    const deleteTask = async (task: Task) => {
        await AsyncStorage.removeItem(task.key);
    };

    const mergeTask = async (task: Task, newName: string) => {
        const stringified = JSON.stringify({ key: task.key, value: task.name });
        await AsyncStorage.mergeItem(stringified, newName);
    };

    const addTask = (newTask: Task) => {
        storeTask(newTask).then(
            () => {
                setTasks(tasks.concat(newTask));
            },
            (error) => {
                showError("Failed to add task", error as Error);
            }
        );
    };

    const removeTask = (task: Task) => {
        deleteTask(task).then(
            () => {
                setTasks(removeFromArray(tasks, task));
            },
            (error) => {
                showError("Failed to delete task", error as Error);
            }
        );
    };

    const updateTask = (task: Task, newName: string) => {
        mergeTask(task, newName).then(
            () => {
                setTasks(editInArray(tasks, task, new Task(newName)));
            },
            (error) => {
                showError("Failed to update task", error as Error);
            }
        );
    };

    const renderItem = ({ item }: { item: Task }) => (
        <TaskListItem
            task={item}
            onDelete={removeTask}
            onEdit={updateTask}
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
