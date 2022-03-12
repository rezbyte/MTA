import { StyleSheet, Text, ViewStyle, Button, View } from "react-native";

const styles = StyleSheet.create({
    disabledStyle: {
        textDecorationStyle: "dashed",
    },
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
    style?: ViewStyle;
    onClick: (newTask: Task) => void;
}

export default function TaskListItem({
    task,
    style = styles.view,
    onClick,
}: Props): JSX.Element {
    return (
        <View style={[styles.view, style]}>
            <Text
                style={[
                    task.done ? styles.disabledStyle : undefined,
                    styles.text,
                ]}
            >
                - {task.name}
            </Text>
            <Button title="X" onPress={() => onClick(task)} />
        </View>
    );
}
