import { useState } from 'react'
import { Text, View, TouchableOpacity, Pressable, Modal } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Agenda } from 'react-native-calendars'
import * as Progress from 'react-native-progress'
import { X } from 'react-native-feather';

import { incrementWalk } from '../../redux';
import { Container, Content, Grid, Card, CardStep, ContentStep, Center, ModalStep, Button, CenterModal } from './styles'

export function Repoart(){
  const [modalVisible, setModalVisible] = useState(false)
  const [steps, setSteps] = useState(0)
  const [maxSteps] = useState(100)
  
  const dispatch = useDispatch();
  
  const added = useSelector((state) => state.added.added)
  
  const cal = added.map((item) => item.calories)
    .reduce((curr,prev) => curr + prev, 0)
    
   const protein = added.map((item) => item.protein)
    .reduce((curr,prev) => curr + prev, 0)
   
  const totalWaterConsumed = useSelector(state => state.added.water);
  
  const exercises = useSelector(state => state.added.exerciseCount);

  const handleIncrementWalk = () => {
    dispatch(incrementWalk());
    setSteps(steps + 1); 
  };
  
  return(
    <Container>
      <Agenda/> 
      <Content>
        <Center>
          <ModalStep
            animationType='slide'
            visible={modalVisible}
            transparent={true}>
            <CenterModal>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={{position: 'absolute', top: '5%', left: '90%'}}>
                <X/>
              </TouchableOpacity>
              <ContentStep>
                <Progress.Circle progress={steps / maxSteps} size={300} color={'#7AE582'}/>
                <View style={{position: 'absolute', top: '20%', alignItems: 'center'}}>
                  <img src='https://cdn-icons-png.flaticon.com/128/5577/5577110.png' width={100}/>
                  <Text style={{color: '#7AE582', fontSize: 30, fontWeight: 'bold', marginTop: 40}}>{steps}</Text>
                </View>
              </ContentStep>
              <Button onPress={handleIncrementWalk}>
                <Text style={{color: '#ffffff', textAlign: 'center', marginTop: 8}}>Count step</Text>
              </Button>
            </CenterModal>
          </ModalStep>
        </Center>
        <Grid>
          <Card>
            <View style={{width: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 10, padding: 10, background: '#FF8FA3', borderRadius: 10}}>
              <img src='https://cdn-icons-png.flaticon.com/128/984/984855.png' width={30}/>
            </View>
        
            <Text>Burned</Text>
            <Text style={{color: '#FF8FA3', fontWeight: 'bold', fontSize: 24}}>{cal}cal</Text>
         </Card>
           
         <Card>
           <View style={{width: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 10, padding: 10, background: '#CAF0F8', borderRadius: 10}}>
              <img src='https://cdn-icons-png.flaticon.com/128/4007/4007761.png' width={30}/>
           </View>       
           <Text>Water Drank</Text>
           <Text style={{color: '#CAF0F8', fontWeight: 'bold', fontSize: 24}}>{totalWaterConsumed}ml</Text>
        </Card>
           
        <Card>
           <View style={{width: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 10, padding: 10, background: '#F4A261', borderRadius: 10}}>
             <img src='https://cdn-icons-png.flaticon.com/128/8012/8012855.png' width={30}/>
           </View>
          <Text>Workout</Text>
          <Text style={{color: '#F4A261', fontWeight: 'bold', fontSize: 24}}>{exercises} cal</Text>
       </Card>
           
       <Card>
         <View style={{width: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 10, padding: 10, background: '#C8B6FF', borderRadius: 10}}>
            <img src='https://cdn-icons-png.flaticon.com/128/9102/9102576.png' width={30}/>
         </View>
         <Text>Burned</Text>
         <Text style={{color: '#C8B6FF', fontWeight: 'bold', fontSize: 24}}>{cal}cal</Text>
      </Card>
     </Grid>
        
       <CardStep>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold'}}>Step tracker</Text>
            <Pressable 
              style={{color: '#E5E5E5', fontWeight: 'bold'}}
              onPress={() => setModalVisible(true)}>
              Details
            </Pressable>
          </View>
          <ContentStep>
            <Progress.Circle progress={steps / maxSteps} size={180} color={'#7AE582'} />
            <View style={{position: 'absolute', top: '20%'}}>
            <img src='https://cdn-icons-png.flaticon.com/128/5577/5577110.png' width={70}/>
             <Text style={{color: '#7AE582', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 5}}>{steps}</Text>
            
             <Text style={{color: '#7AE582', textAlign: 'center'}}>Steps</Text> 
           </View>
          </ContentStep>
        </CardStep>
       </Content>
    </Container>    
  )
}
