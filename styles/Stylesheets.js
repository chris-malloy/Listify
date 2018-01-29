import { StyleSheet } from 'react-native'

export const HomeStyles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
});

export const ListStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listInput: {
        height: 40,
        width: 270,
        borderBottomColor: 'green',
        borderBottomWidth: 1
    },
    addHandler: {
        alignItems: 'center',
        margin: 10,
    },
    addHandlerText: {
        color: 'green'
    }
});