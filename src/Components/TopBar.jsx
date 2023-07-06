import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from "react-native";
import React from "react";

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
    return (
        <View style={styles.topBarContainer}>
            <TextInput
                placeholder="Agregar Tarea"
                style={styles.input}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity style={styles.button} onPress={onAddTask}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    topBarContainer: {
        height: "12%",
        flexDirection: "row",
        gap: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "#CAF0F8",
        width: "100%"
    },
    input: {
        width: 200,
        height: 35,
        borderBottomColor: "#0096C7",
        borderBottomWidth: 3,
        color: "gray",
        fontSize: 20,
    },
    button: {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#0096C7",
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
    },
});