import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Rol } from '../../../Domain/entities/Rol';
import { MyColors } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

interface Props {
    rol: Rol,
    height: number,
    width: number,
    navigaion: StackNavigationProp<RootStackParamList, "RolesScreen", undefined>
}

export const RolesItem = ({rol, height, width, navigaion}: Props) => {
  return (
    <TouchableOpacity
        onPress={ () => {
            if(rol.name == 'ARTISTA'){
                navigaion.navigate('AdminTabsNavigator');
            }
            if(rol.name == 'ESPECTADOR'){
                navigaion.navigate('UserTabsNavigator');
            }
        }}
        style= {{...styles.container, height: height, width: width}}>
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: rol.image }}
            />
            <View style={styles.tittleContainer}>
                <Text style={styles.tittle}> { rol.name }</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingHorizontal: 7,
        color: MyColors.secondary
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        borderTopStartRadius: 18,
        borderTopEndRadius:18

    },
    imageContainer:{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 18
    },
    tittleContainer:{
        height: 50,
        backgroundColor: MyColors.primary,
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tittle: {
        color: MyColors.secondary
    }

})