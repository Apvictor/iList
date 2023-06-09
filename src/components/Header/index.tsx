import { Notepad, Plus, Trash } from 'phosphor-react-native';

import { ButtonAdd, ButtonDelete, Buttons, Container, Content, Title } from './styles';

import theme from '../../theme';

interface Props {
  setModalCleanVisible: Function;
  setModalInsertVisible: Function;
  total: number;
}
export function Header({ setModalInsertVisible, setModalCleanVisible, total }: Props) {

  return (
    <Container>
      <Content>
        <Notepad size={42} color={theme.COLORS.GREEN} weight="fill" />
        <Title>iList</Title>
      </Content>
      <Buttons>
        {
          total > 0 &&
          <ButtonDelete onPress={() => setModalCleanVisible(true)}>
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