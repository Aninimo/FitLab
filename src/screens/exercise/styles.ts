import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const Content = styled.View`
  padding: 20px;
`

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
  margin-top: 10px;
`

export const Description = styled.Text`
  margin-bottom: 18px;
`

export const Card = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ADB5BD;
  margin-bottom: 20px;
  
`

export const ButtonPlayer = styled.TouchableOpacity`
  width: 120px;
  background: #957FEF;
  border-radius: 10px;
  padding: 10px;
  margin-top: 12px;
`

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
