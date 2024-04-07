import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Coffee, PieChart, User } from 'react-native-feather';

import { HomeScreen } from '../screens/home'
import { Diet } from '../screens/diet'
import { Repoart } from '../screens/repoart'
import { Profile } from '../screens/profile'

const Tab = createBottomTabNavigator()

export function BottomNavigator({ route }){
  return(
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        paddingBottom: '10px',
        paddingTop: '5px'
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        initialParams={route.params}
        options={{
          tabBarIcon: () => 
          <Home/>
        }}
      />
      <Tab.Screen
        name='Diet'
        component={Diet}
        options={{
          tabBarIcon: () => 
          <Coffee/>
        }}
      />
      <Tab.Screen
        name='Repoart'
        component={Repoart}
        options={{
          tabBarIcon: () => 
          <PieChart/>
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        initialParams={route.params}
        options={{
          tabBarIcon: () => 
          <User/>
        }}
      />
    </Tab.Navigator>
  )
}
