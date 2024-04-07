import { Container } from './styles'

interface Props{
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: Props){
  return(
    <Container onPress={onPress}>
      {title}
    </Container>
  )
}
