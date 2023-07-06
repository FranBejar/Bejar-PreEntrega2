import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const RenderItemTask = ({item, onPressTask}) => {
    return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={item.completed ? styles.taskCompleted : styles.task} key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
    )
}

export default RenderItemTask

const styles = StyleSheet.create({
    task: {
        width: 250,
        padding: 10,
        backgroundColor: "#48CAE4",
        borderRadius: 10,
        borderColor: "#000",
        borderBottomWidth: 5,
        borderRightWidth: 5,
        marginBottom: 15,
    },
    taskCompleted: {
        width: 250,
        padding: 10,
        backgroundColor: "#04FF00",
        borderRadius: 10,
        borderColor: "#000",
        borderBottomWidth: 5,
        borderRightWidth: 5,
        marginBottom: 15,
    },
    taskText: {
        fontSize: 20,
        textAlign: "center",
    },
})