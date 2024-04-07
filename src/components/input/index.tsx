import { InputContainer } from './styles'

interface Props{
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
}

export function Input({ placeholder, value, onChangeText, secureTextEntry }: Props){
  return(
    <InputContainer
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  )
}
