import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextStyle,
    ViewStyle,
    Button,
    View,
} from "react-native";
import Task from "../utils/Task";

const styles = StyleSheet.create({
    text: {
        flex: 1,
    },
    view: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: 373,
    },
});

interface Props {
    task: Task;
    style?: (ViewStyle & TextStyle)[];
    onDelete: (newTask: Task) => void;
    onEdit: (task: Task, newName: string) => void;
}

export default function TaskListItem({
    task,
    style,
    onDelete,
    onEdit,
}: Props): JSX.Element {
    const [value, setValue] = useState(task.name);

    const deleteTask = () => {
        onDelete(task);
    };

    const change = () => {
        onEdit(task, value);
    };

    return (
        <View style={[styles.view, style]}>
            <Text style={style}>- </Text>
            <TextInput
                style={[styles.text, style]}
                value={value}
                onChangeText={setValue}
                onEndEditing={change}
            />
            <Button title="X" onPress={deleteTask} />
        </View>
    );
}
