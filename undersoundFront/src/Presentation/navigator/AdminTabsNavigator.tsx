import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminGenreListScreen } from '../views/admin/genre/list/GenreList';
import { AdminEventListScren } from '../views/admin/event/list/EventList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="AdminGenreListScreen"
        component={AdminGenreListScreen}
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
        name="AdminEventListScren"  
        component={AdminEventListScren}
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