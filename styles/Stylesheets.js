import { StyleSheet } from 'react-native';
import Window from '../constants/Layout';
import Colors from '../constants/Colors';

export const AuthStyles = StyleSheet.create({
    container:{
        paddingTop: Window.window.height/6,
        height: Window.window.height,
        backgroundColor: Colors.appColor,
    },
    text:{
        color: Colors.fontColor
    },
    title:{
        textAlign: 'center',
        fontSize: 50
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