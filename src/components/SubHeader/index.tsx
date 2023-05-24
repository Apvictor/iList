import { Container, Subtitle, TotalItems } from './styles';

interface Props {
  total: number;
}
export function SubHeader({ total }: Props) {
  return (
    <Container>
      <Subtitle>Lista de compras</Subtitle>
      <TotalItems>{total} itens</TotalItems>
    </Container>
  );
}