import { SortAscending, SortDescending } from 'phosphor-react-native';

import theme from '../../theme';

import { ButtonSort, Container, Content, Subtitle, SubtitleFilter, TotalItems } from './styles';

interface Props {
  total: number;
  filterSort: boolean;
  setFilterSort: Function;
  filterSelected: boolean;
  filterNotSelected: boolean;
}
export function SubHeader({ total, filterNotSelected, filterSelected, filterSort, setFilterSort }: Props) {

  return (
    <Container>
      <Subtitle>Lista de compras
        <SubtitleFilter>
          {filterNotSelected && "\nFiltrado por não selecionados"}
          {filterSelected && "\nFiltrado por selecionados"}
        </SubtitleFilter>
      </Subtitle>

      <Content>
        <TotalItems>{total} {total <= 1 ? "item" : "itens"}</TotalItems>
        <ButtonSort onPress={() => setFilterSort(!filterSort)}>
          {
            filterSort
              ? <SortAscending size={32} color={theme.COLORS.PLACEHOLDER} />
              : <SortDescending size={32} color={theme.COLORS.PLACEHOLDER} />
          }
        </ButtonSort>
      </Content>
    </Container>
  );
}