import { StyleSheet, Text, View, Modal, Pressable, } from "react-native";
import React from "react";

const ModalTask = ({
    modalVisible,
    setModalVisible,
    taskActive,
    onPressStatus,
    onDeleteTask
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{taskActive.task}</Text>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.button, styles.buttonFinished]}
                            onPress={() => onPressStatus(true)}
                        >
                            <Text style={styles.textStyle}>Finish</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonUnfinished]}
                            onPress={() => onPressStatus(false)}
                        >
                            <Text style={styles.textStyle}>Pending</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonDelete]}
                            onPress={() => onDeleteTask(taskActive.id)}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTask;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#023E8A",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderColor: "#1D81FF",
        borderBottomWidth: 5,
        borderRightWidth: 5,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonFinished: {
        backgroundColor: "#00D315",
        borderColor: "#1DAC2B",
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    buttonUnfinished: {
        backgroundColor: "#C1B302",
        borderColor: "#FBE900",
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    buttonDelete: {
        backgroundColor: "#FF0000",
        borderColor: "#FF6464",
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    buttonClose: {
        backgroundColor: "#4A4A4A",
        borderColor: "#858585",
        borderBottomWidth: 2,
        borderRightWidth: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
});