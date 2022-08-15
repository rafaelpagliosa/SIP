import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Task from './src/pages/Task/';
import NewTask from './src/pages/NewTask/';
import Details from './src/pages/Details/';
import Visualizar from './src/pages/Visualizar/';
import Login from './src/pages/Login/';
import NewUser from './src/pages/NewUser/';
import MyChamados from './src/pages/MyChamados';
import Account from './src/pages/Account';
import Map from './src/pages/Map';

import styles from './styles';
const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          style={styles.container}
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          style={styles.container}
          name="NewUser"
          component={NewUser}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          style={styles.container}
          name="Task"
          component={Task}
          options={{
            headerTintColor: "#2506DE",
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Novo Chamado"
          component={NewTask}
          options={{
            headerTintColor: "#2506DE",
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#2506DE",
          }}
        />

        <Stack.Screen
          name="Visualizar"
          component={Visualizar}
          options={{
            headerTintColor: "#2506DE",
          }}
        />

        <Stack.Screen
          name="Meus Chamados"
          component={MyChamados}
          options={{
            headerTintColor: "#2506DE",
          }}
        />

        <Stack.Screen
          name="Perfil"
          component={Account}
          options={{
            headerTintColor: "#2506DE",
          }}
        />

        <Stack.Screen
          name="Mapa"
          component={Map}
          options={{
            headerTintColor: "#2506DE",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


