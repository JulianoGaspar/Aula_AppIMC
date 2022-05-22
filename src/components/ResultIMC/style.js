import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    information: {
        fontSize: 18,
        color: "#084C61",
    },
    numIMC: {
        fontSize: 48,
        color: "#177E89",
        fontWeight: 'bold',
    },
    boxButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30,
    },
    buttonShared: {
        backgroundColor: '#ffc49b',
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },
    textButtonShared: {
        fontSize: 20,
        color: '#fff',
        paddingHorizontal: 30,
    },
});

export default styles