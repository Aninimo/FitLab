import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.ScrollView`
  padding-horizontal: 20px;
  padding-top: 20px;
`

export const Search = styled.TextInput`
  background: #E5E5E5;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`

export const DailyCard = styled.View`
  width: 200px;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  background-color: ${props => props.bgColor || '#FFFFFF'};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`

export const WorkoutCard  = styled.View`
  width: 180px;
  height: 180px;
  border: 1px solid #ADB5BD;
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
`

export const ExerciseCard = styled.View`
  width: 240px;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  background-color: ${props => props.bgColor || '#FFFFFF'};
  margin-right: 14px;
  gap: 30px;
`

export const PlayButton = styled.TouchableOpacity`
  width: 100px;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 12px;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`

export const Name = styled.Text`
  font-weight: bold;
  margin-bottom: 16px; 
`
