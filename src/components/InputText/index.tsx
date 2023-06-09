import { KeyboardTypeOptions } from 'react-native';

import { Container, Input, Text, TextRequired } from './styles';

import theme from '../../theme';

interface Props {
  bg?: string;
  value: string;
  text?: string;
  color?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  setValue: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
}
export function InputText({ value = "", color = theme.COLORS.TEXT, bg = theme.COLORS.BACKGROUND, disabled = true, text = null, keyboardType, required = false, placeholder = null, setValue }: Props) {

  return (
    <Container>
      {
        text &&
        <Text style={{ color: color }}>
          {text} {required && <TextRequired>*</TextRequired>}
        </Text>
      }
      <Input
        value={value == "NaN" ? "0.00" : value}
        editable={disabled}
        style={{ color: color, backgroundColor: bg }}
        onChangeText={setValue}
        onFocus={() => setValue("")}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={theme.COLORS.PLACEHOLDER}
      />
    </Container>
  );
}