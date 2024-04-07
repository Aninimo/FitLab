import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #957FEF;
  margin-bottom: 20px;
  margin-top: 16px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

export const Description = styled.Text`
  width: 320px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 18px;
`

export const Footer = styled.View`
  width: 100%;
  height: 170px;
  background: #957FEF;
  position: absolute;
  margin-top: 160%;
`

export const Button = styled.TouchableOpacity`
  width: 150px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  margin-top: 80px;
  margin-left: 250px; 
`
