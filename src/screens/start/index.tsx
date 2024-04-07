import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { ChevronsRight } from 'react-native-feather';
import { Container, Logo, Title, Description, Footer, Button } from './styles';

export function Start({ navigation }) {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Container>
      <Animated.View style={{ opacity: animation, transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <img src='https://cdn-icons-png.flaticon.com/128/2928/2928144.png'/>
      </Animated.View>
      <Animated.View style={{ opacity: animation, transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Logo>FITLAB</Logo>
      </Animated.View>
      <Animated.View style={{ opacity: animation, transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Title>You ARE READY TO GO!</Title>
      </Animated.View>
      <Animated.View style={{ opacity: animation, transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Description>
          Stay motivated with 3,000+ Classes across categories like running, yoga and strength training all over the world.
        </Description>
      </Animated.View>
      <Footer>
        <Animated.View style={{ opacity: animation }}>
          <Button onPress={() => navigation.navigate('Login')}>
            Let's do it <ChevronsRight/>
          </Button>
        </Animated.View>
      </Footer>
    </Container>
  );
}
