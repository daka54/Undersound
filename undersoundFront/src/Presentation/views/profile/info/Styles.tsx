import { StyleSheet } from "react-native";
import { MyColors } from "../../../theme/AppTheme";


const ProfileInfoStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        resizeMode: 'cover',
        position: 'absolute'
    },
    form: {
        width: '100%',
        height: '45%',
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
    formInfo:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    formTextDescription: {
        fontSize: 12,
        color: 'gray'
    },
    formContent:{
        marginLeft: 15
    },
    formImage: {
        width: 30,
        height: 30
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '20%'
    },
    logoText: {
        color: '#d3d0c1',
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
    },
    logoImage: {
        width: 180,
        height: 180,
        borderRadius:100,
        borderColor: MyColors.secondary,
        borderWidth: 2
    },
    logout: {     
        position: 'absolute',   
        top: 50,
        right: 20,
        zIndex: 1,
    },
    logoutImage: {        
        width: 60,
        height: 60,
    },
});

export default ProfileInfoStyles;