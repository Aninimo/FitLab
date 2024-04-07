import React, { useEffect, useState } from 'react';
import { Animated, View, FlatList, Text, Image } from 'react-native';
import { useQuery } from '@apollo/client';
import { Play } from 'react-native-feather';

import { EXERCISES } from '../../queries';
import { Info } from '../../constants';
import { Container, Content, Search, Title, DailyCard, WorkoutCard, PlayButton, ExerciseCard, Name } from './styles';
import { WorkoutComponent } from '../../constants/workout';

export function HomeScreen({ navigation, route }) {
  const [animation] = useState(new Animated.Value(0)); 
  
  const { data } = useQuery(EXERCISES);
  const Workout = WorkoutComponent();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const { user } = route.params

  return (
    <Container>
      <Animated.View style={{ opacity: animation, transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Content>
          <Title>Welcome, {user.fullName}!</Title>
          <Search placeholder='Search'/>
          <Title>Recent activity</Title>
          <FlatList
            data={Info}
            keyExtractor={item => item.id.toString()} // Converte o ID para string
            horizontal={true}
            renderItem={({ item }) => (
              <DailyCard bgColor={item.background}>
                <Image source={item.icon} style={{width: 50, height: 50}}/> {/* Usando componente Image */}
                <Text style={{color: '#ffffff', fontWeight: 'bold', marginTop: 8}}>{item.name}</Text>
              </DailyCard>
            )}
            showsHorizontalScrollIndicator={false}
          />
          <Title>Popular exercise</Title>
          {data &&
          <FlatList
            data={data.exercises}
            renderItem={({ item }) => (
              <ExerciseCard bgColor={item.background.hex}>
                <View>
                  <Text style={{width: 70, fontWeight: 'bold'}}>{item.name}</Text>
                  <PlayButton onPress={() => navigation.navigate('Exercise', item)}>
                    Play <Play/>
                  </PlayButton>
                </View>
                <Image source={{uri: item.image.url}} style={{width: 70, height: 70}}/> {/* Usando componente Image */}
              </ExerciseCard>
            )}
            keyExtractor={item => item.id.toString()} // Converte o ID para string
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 20 }}
          />
          }
          <Title>Workout process</Title>
          <FlatList
            data={Workout}
            renderItem={({ item }) => (
              <WorkoutCard>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                  <Name>{item.name}</Name>
                  <Image source={item.icon} style={{width: 50, height: 50}}/> {/* Usando componente Image */}
                </View>
                <Title>{item.value}</Title>
              </WorkoutCard>
            )}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </Content>
      </Animated.View>
    </Container>
  );
}
