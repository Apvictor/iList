import { Notepad, Plus, Trash } from 'phosphor-react-native';

import theme from '../../theme';

import { ButtonAdd, ButtonDelete, Buttons, Container, Content, Title } from './styles';

interface Props {
  setModalDeleteVisible: Function;
  setModalInsertVisible: Function;
  total: number;
}
export function Header({ setModalInsertVisible, setModalDeleteVisible, total }: Props) {

  return (
    <Container>
      <Content>
        <Notepad size={32} color={theme.COLORS.GREEN} weight="fill" />
        <Title>iList</Title>
      </Content>
      <Buttons>
        {
          total > 0 &&
          <ButtonDelete onPress={() => setModalDeleteVisible(true)}>
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