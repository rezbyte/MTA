import { StyleSheet, Text, ViewStyle, Button, View } from "react-native";

export default function TaskListItem(props:{task:Task, style?:ViewStyle, onClick:(newTask:Task)=>void}):JSX.Element {
    return (
        <View style={[styles.view, props.style]}>
            <Text style={[props.task.done ? styles.disabledStyle : undefined, styles.text]}>- {props.task.name}</Text>
            <Button title="X" onPress={() => props.onClick(props.task)} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:373,
    },
    disabledStyle: {
        textDecorationStyle:"dashed",
    },
    text: {
        flex:1,
    },
});