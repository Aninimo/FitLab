import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { ChevronLeft, X } from 'react-native-feather';
import { Feather } from '@expo/vector-icons';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { Button } from '../../components/button'
import { addMeal } from '../../redux'
import { PerServing, MealInfo } from '../../constants'
import { CATEGORIES, MEALS } from '../../queries';
import { Container, Categories, Title, CardServing, Center } from './styles'

export function Meal({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { loading: loadingCategories, error: errorCategories, data: categoriesData } = useQuery(CATEGORIES);
  const { loading: loadingMeals, error: errorMeals, data: mealsData } = useQuery(MEALS);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const dispatch = useDispatch();
  
  const addMealItem = (item) => {
   dispatch(addMeal(item));
   setModalVisible(true)
 }
  
  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  let mealsToDisplay = [];

  if (!loadingMeals && !loadingCategories) {
    if (selectedCategory === "ALL") {
      mealsToDisplay = mealsData.meals.categoryMeals;
    } else {
      mealsToDisplay = categoriesData.categoryMeals.find(category => category.name === selectedCategory).meals;
    }
  }

  if (loadingMeals || loadingCategories) return <Text>Loading...</Text>;
  if (errorMeals || errorCategories) return <Text>Error :(</Text>;

  return (
    <Container>
       <TouchableOpacity onPress={() => navigation.navigate('BottomNavigator')}>
        <ChevronLeft/>
     </TouchableOpacity>
      <Categories>
        {categoriesData.categoryMeals.map(category => (
          <TouchableOpacity 
            key={category.name} 
            onPress={() => handleCategoryPress(category.name)}
            style={{ marginRight: 20 }}>
            <Text style={{fontSize: 18}}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </Categories>
      <FlatList
        data={mealsToDisplay}
        renderItem={({ item }) => (
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width}}>
            <img src={item.image.url} width={180}/>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 15, marginBottom: 15}}>{item.name}</Text>
            <Text style={{width: 320}}>{item.description}</Text>
            <TouchableOpacity onPress={() => addMealItem(item)} style={{marginTop: 24, marginBottom: 24}}>
              <img src='https://cdn-icons-png.flaticon.com/128/3196/3196994.png' width={80}/>
            </TouchableOpacity>
          </View>
         )}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}                      
     />
      
      <FlatList
        data={MealInfo}
        renderItem={({ item }) => (
          <View style={{width: 120, height: 120, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: item.background, padding: 10, borderRadius: 10, marginRight: 10}}>
            <img src={item.icon} width={50}/>
            <Text style={{color: '#ffffff', marginTop: 12}}>{item.name}</Text>
          </View>
        )}
       keyExtractor={item => item.id}
       horizontal={true}
       style={{justifyContent: 'center', marginTop: 20, marginBottom: 20}}
     />
     <Title>Per serving</Title>
     <FlatList
        data={PerServing}
        renderItem={({ item }) => (
          <CardServing>
            <img src={item.image } style={{ width: 50, height: 50 }} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 8}}>
                <Text>{item.value1}%</Text>
                <Text>({item.value2}g)</Text>
              </View>
            </View>
          </CardServing>
        )}
        keyExtractor={item => item.id}
        horizontal={true}
        style={{justifyContent: 'center', marginBottom: 16}}
      />
      <Button 
        title='Added meals'
        onPress={() => navigation.replace('AddedMeals')}
      />
      <Modal
        animationType='slide'
        visible={modalVisible}>
          <Center>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{position: 'absolute', top: '5%', left: '90%'}}>
                <X/>
            </TouchableOpacity>
            <img src='https://cdn-icons-png.flaticon.com/128/5022/5022633.png'/>
            <Title>Meal added successfully</Title>
          </Center>
      </Modal>
    </Container>
  );
}
