import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { RolesScreen } from './src/Presentation/views/roles/Roles';
import { AdminTabsNavigator } from './src/Presentation/navigator/AdminTabsNavigator';
import { UserTabsNavigator } from './src/Presentation/navigator/UserTabsNavigator';
import { ProfileUpdateScreen } from './src/Presentation/views/profile/update/ProfileUpdate';
import { UserAuth } from './src/Domain/entities/UserAuth';

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RolesScreen: undefined,
  AdminTabsNavigator: undefined,
  UserTabsNavigator: undefined,
  ProfileUpdateScreen: {user: UserAuth},
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: '',
            headerTransparent: true
          }}
        />

        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{
            headerShown: true,
            headerBackTitleVisible: false,
            title: 'Selecciona un Rol',      
          }}
        />

        <Stack.Screen 
          name="AdminTabsNavigator" 
          component={AdminTabsNavigator} 
        />

        <Stack.Screen 
          name="UserTabsNavigator" 
          component={UserTabsNavigator} 
        />

        <Stack.Screen 
          name="ProfileUpdateScreen" 
          component={ProfileUpdateScreen}
          options={{
            headerShown: true,
            title: 'Actualizar usuario',
            headerBackTitleVisible: false 
          }}
        />

      </Stack.Navigator>
      {/* Muestra el Toast sin la necesidad de setRef */}
      <Toast />
    </NavigationContainer>
  );
};

export default App;
