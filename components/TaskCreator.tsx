import React from 'react';
import { StyleSheet, TextInput, Button, View, ViewStyle} from "react-native";

export default function TaskCreator(props:{onAdd:Function, style?:ViewStyle}):JSX.Element {
    const [text,onChangeText] = React.useState("");

    function createTask(name:string):Task {
        const currentDateTime = new Date(Date.now()).toISOString();
        const key = name + currentDateTime;
        return {key:key, name:name, done:false}
    }

    return (
        <View style={[styles.container, props.style]}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
            <Button onPress={() => props.onAdd(createTask(text))} title="Add" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:"row",
        maxHeight:37,
    },
    input: {
        flex:2,
        paddingLeft:10,
        borderWidth: 1,
    },
});