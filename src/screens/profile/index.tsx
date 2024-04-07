import { useState, useEffect } from 'react'
import { Animated } from 'react-native'

import { Container, Title, InfoUser } from './styles'

export function Profile({ route }){
  const [animation] = useState(new Animated.Value(0)); 
  
  const { user } = route.params
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  return(
    <Container>
      <Animated.View style={{ opacity: animation, transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Title>Your Profile</Title>
        <InfoUser>Name: {user.fullName}</InfoUser>
        <InfoUser>Email: {user.email}</InfoUser>
      </Animated.View>
    </Container>
  )
}
