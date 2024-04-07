import { NavigationContainer } from '@react-navigation/native'

import { StackNavigator } from './stackNavigator'

export function Routes(){
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}
