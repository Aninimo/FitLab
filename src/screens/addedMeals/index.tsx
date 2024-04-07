import React, { useEffect, useState } from 'react';
import { Animated, View, TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ChevronLeft } from 'react-native-feather'

import { RootState } from '../../redux';
import { Container, Card, Info } from './styles'

export function AddedMeals({ navigation }){
  
  const meals = useSelector((state) => state.added.added)
  const [animation] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ flex: 1, transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 100] }) }] }}>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Meal')}>
          <ChevronLeft width={42}/>
        </TouchableOpacity>
        {meals.map((item, index) => (
           <Card key={index}>
             <img src={item.image.url} width={70}/>
             <View>
               <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
               <Info>
                 <Text style={{color: '#ffffff'}}>{item.calories}cal</Text>
                </Info>
            </View>
          </Card>
        ))}
      </Container>
    </Animated.View>
  );
};
