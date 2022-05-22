import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',
        paddingTop: 30,
        marginTop: 30,
    },
    form: {
        width: '100%',
        height: 'auto',
    },
    formLabel: {
        color: "#084C61",
        fontSize: 20,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#EEEEEE',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#177E89',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: '#fff'
    },
    errorMessage: {
        fontSize: 12,
        color: '#DB3A34',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    Result: {
        width: '100%',
        height: '50%'
    },
    FlatList: {
        margin: 20,
        width: '90%',

    },
    FlatListItem: {
        fontSize: 16,
        color: '#177E89',
        backgroundColor: "#E6E9ED",
        height: 40,
        width: '100%',
        padding: 10,
        marginTop: 2,

    }
});

export default styles