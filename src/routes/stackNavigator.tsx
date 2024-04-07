import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Start } from '../screens/start'
import { Login } from '../screens/login'
import { Register } from '../screens/register'
import { BottomNavigator } from './bottomNavigator'
import { HomeScreen } from '../screens/home'
import { Meal } from '../screens/meal'
import { AddedMeals } from '../screens/addedMeals'
import { Exercise } from '../screens/exercise'

const Stack = createNativeStackNavigator()

export function StackNavigator({ route }){
  return(
    <Stack.Navigator
      screenOptions={{ 
        headerShown: false,
      }}>
        <Stack.Screen
          name='Start'
          component={Start}
        />
        
        <Stack.Screen
          name='Login'
          component={Login}
        />
        
        <Stack.Screen
          name='Register'
          component={Register}
        />
        
        <Stack.Screen
          name='BottomNavigator'
          component={BottomNavigator}
        />
        
        <Stack.Screen
          name='Meal'
          component={Meal}
        />
        <Stack.Screen
          name='AddedMeals'
          component={AddedMeals}
        />
        
        <Stack.Screen
          name='Exercise'
          component={Exercise}
        />
    </Stack.Navigator>
  )
}
