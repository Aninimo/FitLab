import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Modal, FlatList, Animated, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { ChevronLeft, X } from 'react-native-feather';

import { incrementExerciseCount } from '../../redux'; 
import { Button } from '../../components/button';
import { EXERCISES } from '../../queries';
import { Container, Content, Name, Description, Card, ButtonPlayer, Center } from './styles'

export function Exercise({ navigation, route }) {
  const dataParams = route.params;
  const { data } = useQuery(EXERCISES);
  const [animation] = useState(new Animated.Value(-100));
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  const handleCompleteExercise = () => {
    dispatch(incrementExerciseCount());
    setModalVisible(true);
  };

  const exerciseCount = useSelector(state => state.added.exerciseCount);
  
  return (
    <Container>
      <Animated.View style={{ transform: [{ translateY: animation }] }}>
        <Content>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{marginBottom: 24}}>
            <ChevronLeft/>
          </TouchableOpacity>
          
          <video src={dataParams.video.url} controls>
          </video>
          <Name>{dataParams.name}</Name>
          <Description>{dataParams.description}</Description>
          <Button title='Mark as complete' onPress={handleCompleteExercise}/> 
          <Name>Recommended</Name>
          {data &&
            <FlatList
              data={data.exercises}
              renderItem={({ item }) => 
                <Card>
                  <img src={item.image.url} width={80}/>
                  <View>
                    <Text>{item.name}</Text>
                    <ButtonPlayer onPress={() => navigation.navigate('Exercise', item)}>
                      <Text style={{color: '#ffffff', textAlign: 'center'}}>Play</Text>
                    </ButtonPlayer>
                  </View>
                </Card>
              }
            />
          }
          <Modal
            animationType='slide'
            visible={modalVisible}>
            <Center>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{position: 'absolute', top: '5%', left: '90%'}}>
                <X/>
              </TouchableOpacity>
              <img src='https://cdn-icons-png.flaticon.com/128/4213/4213475.png'/>
              <Text style={{fontWeight: 'bold', fontSize: 24, marginTop: 20, marginBottom: 20}}>
                Congratulations
              </Text>
              <Text style={{marginBottom: 12}}>You just lost {dataParams.kcal}Kcal</Text>
            </Center>
          </Modal>
        </Content>
      </Animated.View>
    </Container>
  );
}
