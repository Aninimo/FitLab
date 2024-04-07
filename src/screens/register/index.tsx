import React, { useEffect, useState } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { firebase } from '../../firebase/config'

import { Container, Title } from './styles'

export function Register({ navigation }){
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    firebase
      .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
       const uid = response.user.uid
       const data = {
         id: uid,
         email,
         fullName,
       };
       const usersRef = firebase.firestore().collection('users')
       usersRef
         .doc(uid)
         .set(data)
         .then(() => {
            navigation.navigate('Login')
         })
         .catch((error) => {
          alert(error)
         });
      })
      .catch((error) => {
         alert(error)
    });
  }
  
  return(
    <Container>
      <Animated.View style={{ opacity: animation, transform: [{ translateY: animation.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] }}>
        <Title>Register</Title>
        <Input
          placeholder='Name'
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        
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
        
        <Input
          placeholder='Confirm password'
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
        />
        <Button title='Login' onPress={() => onRegisterPress()}/>
        <TouchableOpacity style={{color: '#ADB5BD', marginTop: 12, textAlign: 'center'}} onPress={() => navigation.navigate('Login')}>
          Already have an account? log in
        </TouchableOpacity>
      </Animated.View>
    </Container>
  )
}
