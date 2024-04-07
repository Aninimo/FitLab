import styled, { css } from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`

export const Content = styled.View`
  justifyContent: center;
  alignItems: center;
  padding: 20px;
`

export const Grid = styled.View`
  display: grid;
  grid-template-columns: 160px 160px;
  gap: 28px;
`

export const Card = styled.View`
  width: 160px;
  height: 160px;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
`

export const CardStep = styled.View`
  width: 100%;
  background: #ffffff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
`

export const ContentStep = styled.View`
  justify-content: center;
  align-items: center;
`

export const Center = styled.View`
  flex: 1;
  justifyContent: center;
  align-items: center;
`

export const CenterModal = styled.View`
  flex: 1;
  justifyContent: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
`

export const ModalStep = styled.Modal`
  justifyContent: center;
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  background: #7AE582;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
`
