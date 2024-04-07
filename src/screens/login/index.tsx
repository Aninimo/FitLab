import React, { useEffect, useState } from 'react';
import { Animated, Text,  TouchableOpacity } from 'react-native';

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { firebase } from '../../firebase/config'

import { Container, Title } from './styles'

export function Login({ navigation }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
         .doc(uid)
         .get()
         .then(firestoreDocument => {
           if (!firestoreDocument.exists) {
            alert('User does not exist anymore.')
            return;
           }
          const user = firestoreDocument.data()
          navigation.navigate('BottomNavigator', {user: user})
      })
      .catch(error => {
        alert(error)
      });  
    })
    .catch(error => {
      alert(error)
    })
  }
  
  return(
    <Container>
      <Animated.View style={{ opacity: animation, transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Title>Login</Title>
        <Input
          placeholder='Email'
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        
        <Input
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Button title='Login' onPress={() => onLoginPress()}/>
        <TouchableOpacity style={{color: '#ADB5BD', marginTop: 12, textAlign: 'center'}} onPress={() => navigation.navigate('Register')}>
          Not have an account yet? Register
        </TouchableOpacity>
      </Animated.View>
    </Container>
  )
}
