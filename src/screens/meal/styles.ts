import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  justify-content: center;
  padding: 10px;
`

export const Content = styled.ScrollView`
  padding-horizontal: 20px;
  padding-top: 20px;
`

export const Categories = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`

export const Card = styled.View`
  width: 120px;
  height: 120px;
  justify-content: center;
  aling-items: center;
  border-radius: 10px;
  padding: 10px;
  background: #4CC9F0;
  color: #ffffff;
  text-align: center;
`

export const CardServing = styled.View`
  flex-direction: row;
  margin-right: 8;
  gap: 4px;
`
export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
