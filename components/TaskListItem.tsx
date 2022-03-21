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
    onClick: (newTask: Task) => void;
    onEdit: (task: Task, newName: string) => void;
}

export default function TaskListItem({
    task,
    style,
    onClick,
    onEdit,
}: Props): JSX.Element {
    const change = (newValue: string) => {
        onEdit(task, newValue);
    };

    return (
        <View style={[styles.view, style]}>
            <Text style={style}>- </Text>
            <TextInput
                style={[styles.text, style]}
                value={task.name}
                onChangeText={change}
            />
            <Button title="X" onPress={() => onClick(task)} />
        </View>
    );
}
