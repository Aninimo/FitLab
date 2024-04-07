import { useEffect, useState } from 'react'
import { Animated, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import * as Progress from 'react-native-progress'

import { Button } from '../../components/button'
import { Water } from '../../constants'
import { incrementWater } from '../../redux'
import { Container, Content, Title, CardConsumed, Card, Grid, CardWater} from './styles'

export function Diet({ navigation, route }){
  const [totalGlasses, setTotalGlasses] = useState(0);

  const [maxCal] = useState(2500)
  const [maxProtein] = useState(2500)
  const [maxCarbs] = useState(1500)
  
  const [animation] = useState(new Animated.Value(0))
  
  const dispatch = useDispatch(); 

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  const added = useSelector((state) => state.added.added);
  
  const cal = added.map((item) => item.calories).reduce((curr,prev) => curr + prev,0);
  
  const protein = added.map((item) => item.protein).reduce((curr,prev) => curr + prev,0);
  
  const carbs = added.map((item) => item.carbs).reduce((curr,prev) => curr + prev,0);
  
  const totalWaterConsumed = useSelector(state => state.added.water);

  const handleIncrementWater = (ml) => {
    dispatch(incrementWater(ml));
    
    setTotalGlasses(prevTotal => prevTotal + 1); 
  };
  
  return(
    <Container>
      <Animated.View style={{ opacity: animation, transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Content> 
          <Title>Nutrition Intake</Title>
          <CardConsumed>
            <Text>Consumed today</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 6, marginBottom: 6}}>
              <Text style={{fontWeight: 'bold', fontSize: 20, color: '#7AE582'}}>{cal}</Text>
              <Text>/2,500 Cal</Text>
            </View>
            <Progress.Bar progress={cal / maxCal} width={370} color={'#7AE582'}/>
          </CardConsumed>
          <Grid>
            <Card>
             <Progress.Pie progress={cal / maxCal} size={50} color={'#FAA307'} />
             <View>
               <Text>Calories</Text>
               <Text style={{fontWeight: 'bold', color: '#FAA307'}}>{cal}cal</Text>
             </View>
           </Card>
         
           <Card>
            <Progress.Pie progress={protein / maxProtein} size={50} color={'#4CC9F0'} />
            <View>
             <Text>Protein</Text>
             <Text>{protein}cal</Text>
           </View>
         </Card>
         
         <Card>
           <Progress.Pie progress={carbs / maxCarbs} size={50} color={'#FFDD00'} />
           <View>
       <Text>Carbs</Text>
             <Text>{carbs}cal</Text>
           </View>
         </Card>
         
         <Card>
           <Progress.Pie progress={cal / maxCal} size={50} color={'#957FEF'} />
           <View>
             <Text>Calories</Text>
             <Text>{cal}cal</Text>
           </View>
         </Card>
       </Grid>
      <Button title='Add meal' onPress={() => navigation.navigate('Meal')}/>
        <Title>Water Intake</Title>
        <CardWater>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
              <Text>{totalGlasses} of {Water.length} glasses consumed</Text>
              <Text>{totalWaterConsumed}/3500ML</Text>
            </View>
            <img src='https://cdn-icons-png.flaticon.com/128/3248/3248369.png' width={32}/>
           </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12}}>
             {Water.map((item) => (
                <View key={item.id} style={{ flexDirection: 'column' }}>
                  <TouchableOpacity
                    style={{ marginTop: 20, marginBottom: 8 }}
                    onPress={() => handleIncrementWater(item.ml)}>
                    <img src={item.icon} width={30}/>
                  </TouchableOpacity>
                  <Text>{item.ml == 0 ? 0 : item.ml}ml</Text>
                </View>
              ))}
            </View>  
          </CardWater>
        </Content>
      </Animated.View>
    </Container>
  )
}
