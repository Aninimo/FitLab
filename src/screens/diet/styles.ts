import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
 flex: 1;
`

export const Content = styled.ScrollView`
  padding-horizontal: 20px;
  padding-top: 20px;
`

export const Card = styled.View`
  width: 150px;
  height: 90px;
  flex-direction: row;
  align-items: center;
  gap: 12;
  background: #ffffff;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 10px;
`

export const CardConsumed = styled.View`
  flex-direction: column;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`

export const Grid = styled.View`
  display: grid;
  grid-template-columns: 200px 200px;
  gap: 16px;
  margin-top: 26px;
  margin-bottom: 20px;
`

export const CardWater = styled.View`
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
`
