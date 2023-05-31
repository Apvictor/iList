import { Notepad, Plus, Trash } from 'phosphor-react-native';

import theme from '../../theme';

import { ButtonAdd, ButtonDelete, Buttons, Container, Content, Title } from './styles';

interface Props {
  setModalClearVisible: Function;
  setModalInsertVisible: Function;
  total: number;
}
export function Header({ setModalInsertVisible, setModalClearVisible, total }: Props) {

  return (
    <Container>
      <Content>
        <Notepad size={32} color={theme.COLORS.GREEN} weight="fill" />
        <Title>iList</Title>
      </Content>
      <Buttons>
        {
          total > 0 &&
          <ButtonDelete onPress={() => setModalClearVisible(true)}>
            <Trash size={24} color={theme.COLORS.WHITE} />
          </ButtonDelete>
        }

        <ButtonAdd onPress={() => setModalInsertVisible(true)}>
          <Plus size={24} color={theme.COLORS.WHITE} />
        </ButtonAdd>
      </Buttons>
    </Container>
  );
}