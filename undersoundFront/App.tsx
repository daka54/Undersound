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
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import { UserProvider } from './src/Presentation/context/UserContext';
import { QuestionaryScreen } from './src/Presentation/views/questionary/Questionary';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  RolesScreen: undefined,
  QuestionaryScreen: undefined,
  AdminTabsNavigator: undefined,
  UserTabsNavigator: undefined,
  ProfileUpdateScreen: {user: UserAuth},
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <UserState>      
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
            name="QuestionaryScreen"
            component={QuestionaryScreen}
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              title: 'Veamos tus gustos',      
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
        <Toast/>
      </UserState>
    </NavigationContainer>
  );
};

const UserState = ({children}: any) => {
  return (
    <UserProvider>
      { children }
    </UserProvider>
  )
}
export default App;
