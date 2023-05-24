import { Notepad } from 'phosphor-react-native';

import theme from '../../theme';

import { ButtonAdd, ButtonAddText, Container, Content, Title } from './styles';

interface Props {
  setVisible: Function;
}
export function Header({ setVisible }: Props) {

  return (
    <Container>
      <Content>
        <Notepad size={24} color={theme.COLORS.GREEN} weight="fill" />
        <Title>iList</Title>
      </Content>
      <ButtonAdd onPress={() => setVisible(true)}>
        <ButtonAddText>
          Novo Produto
        </ButtonAddText>
      </ButtonAdd>
    </Container>
  );
}