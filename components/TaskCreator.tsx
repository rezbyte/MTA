import { useState } from "react";
import { StyleSheet, TextInput, Button, View, ViewStyle } from "react-native";
import Task from "../utils/Task";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        maxHeight: 37,
    },
    input: {
        borderWidth: 1,
        flex: 2,
        paddingLeft: 10,
    },
});

interface Props {
    onAdd: (newTask: Task) => void;
    style?: ViewStyle;
}

export default function TaskCreator({
    onAdd,
    style = styles.container,
}: Props): JSX.Element {
    const [text, setText] = useState("");

    const addTask = () => {
        onAdd(new Task(text));
        setText("");
    };

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                onSubmitEditing={addTask}
                value={text}
            />
            <Button onPress={addTask} title="Add" />
        </View>
    );
}
