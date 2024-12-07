import { StyleSheet } from 'react-native';
import { MyColors } from '../../theme/AppTheme';

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        bottom: '35%'
    },
    form: {
        width: '100%',
        height: '83%',
        backgroundColor: MyColors.secondary,
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding:30
    },
    formText:{
        fontWeight: 'bold',
        fontSize: 16
    },
    formIcon:{
        width: 30,
        height: 30,
        marginTop: 5
    },
    formInput:{
        flexDirection: 'row',
        marginTop: 30
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#979B8D',
        marginLeft: 15
    },
    formRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: '#5C7457',
        borderBottomWidth: 1,
        borderBottomColor: '#5C7457',
        fontWeight: 'bold',
        marginLeft: 10
    },
    loading: {
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
        position: 'absolute'
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center'
    },
    checkbox: {
        borderRadius:100,
        marginRight: 10,
        borderColor: MyColors.primary,
    },
    link: {
        color: MyColors.primary,
        textDecorationLine: 'underline',
    }

});

export default RegisterStyles;