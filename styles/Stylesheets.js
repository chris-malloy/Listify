import { StyleSheet } from 'react-native';
import Window from '../constants/Layout';

export const AuthStyles = StyleSheet.create({
    container:{
        height: Window.window.height,
        backgroundColor: 'green',
    }
})

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

export const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    img: {
        borderWidth: 1,
        borderRadius: 58,
        borderColor: 'green'
    },
    field:{
        padding: 10
    }
})

export const ListStyles = StyleSheet.create({
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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