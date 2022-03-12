import { useState } from "react";
import { StyleSheet, TextInput, Button, View, ViewStyle } from "react-native";

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
    const [text, onChangeText] = useState("");

    function createTask(name: string): Task {
        const currentDateTime = new Date(Date.now()).toISOString();
        const key = name + currentDateTime;
        return { key, name, done: false };
    }

    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Button onPress={() => onAdd(createTask(text))} title="Add" />
        </View>
    );
}
