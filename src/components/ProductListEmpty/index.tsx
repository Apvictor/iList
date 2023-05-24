import { ShoppingCart } from 'phosphor-react-native';

import theme from "../../theme";

import { CarText, Container } from './styles';

export function ProductListEmpty() {

  return (
    <Container>
      <ShoppingCart size={64} color={theme.COLORS.TEXT}/>
      <CarText>Nenhum produto na lista</CarText>
    </Container>
  );
}