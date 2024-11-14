import React, { useState } from 'react'
import { Dimensions, FlatList, Text, View, StyleSheet } from 'react-native'
import useViewModel from './ViewModel';
import { RolesItem } from './Item';
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MyColors } from '../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'>{};


export const RolesScreen = ({navigation, route}: Props) => {

  const { user } = useViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [mode, setMode] = useState<any>('stack-horizontal-left');
  const [snapDirection, setSnapDirection] = useState<'left'|'right'>('left');

  return (    
      <GestureHandlerRootView style = {styles.container}>         
        <View style= {styles.carousel}>
          <Text style= {styles.info}>Desliza pillamos los roles</Text>
          <Carousel
            loop={false}
            width={width}
            height={height / 2}
            autoPlay={false}
            data={user?.roles!}
            scrollAnimationDuration={1000}
            panGestureHandlerProps={{
              activeOffsetX: [-10, 10],
            }}
            renderItem={ ({item}) => <RolesItem rol={ item } height={ 420 } width={ width -100 } navigaion={navigation}/>}
            modeConfig={{
              snapDirection,
              stackInterval: 30,
              
            }}
            mode={mode}
          />        
        </View>
      </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent:'center',
    backgroundColor: MyColors.secondary
  },
  carousel: {
    alignItems: 'center',
    alignContent:'center',
    marginTop: '30%'
  },
  info: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16
  }

});
