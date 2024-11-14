import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { UserGenreListScreen } from '../views/user/genre/list/GenreList';
import { UserEventListScren } from '../views/user/event/list/EventList';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const UserTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="UserGenreListScreen"
        component={UserGenreListScreen}
        options={{
          title: 'Generos',
          tabBarLabel:'Generos',
          tabBarIcon: ({ color }) => (
            <Image
              source={ require('../../../assets/list.png') }
              style={{ width: 25, height: 25}}
            />
          )
        }}
      />

      <Tab.Screen 
        name="UserEventListScren"  
        component={UserEventListScren}
        options={{
          title: 'Eventos',
          tabBarLabel:'Eventos',
          tabBarIcon: ({ color }) => (
            <Image
              source={ require('../../../assets/event.png') }
              style={{ width: 25, height: 25}}
            />
          )
        }}
      />

      <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen}
        options={{
          title: 'Perfil',
          tabBarLabel:'Perfil',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={ require('../../../assets/user.png') }
              style={{ width: 25, height: 25}}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
}