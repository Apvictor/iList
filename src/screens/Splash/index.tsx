import { useEffect } from 'react';
import { Notepad } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../theme';

import { Container, Title } from './styles';

export function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 3000);
  }, []);

  return (
    <Container>
      <Notepad size={100} color={theme.COLORS.GREEN} weight="fill" />
      <Title>iList</Title>
    </Container>
  );
}