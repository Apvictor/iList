import { MagnifyingGlassMinus, MagnifyingGlassPlus, SortAscending, SortDescending } from 'phosphor-react-native';

import { ButtonSort, Container, Content, Subtitle, SubtitleFilter, TotalProducts } from './styles';

import theme from '../../theme';

interface Props {
  total: number;
  filterSort: boolean;
  setFilterSort: Function;

  filterSelected: boolean;
  filterNotSelected: boolean;

  filterActiveSearch: boolean;
  setFilterActiveSearch: Function;
}
export function SubHeader({ total, filterNotSelected, filterSelected, filterSort, setFilterSort, filterActiveSearch, setFilterActiveSearch }: Props) {

  return (
    <Container>
      <Subtitle>Lista de compras
        <SubtitleFilter>
          {filterNotSelected && "\nFiltrado por não selecionados"}
          {filterSelected && "\nFiltrado por selecionados"}
        </SubtitleFilter>
      </Subtitle>

      <Content>
        <TotalProducts>{total} {total <= 1 ? "produto" : "produtos"}</TotalProducts>
        <ButtonSort onPress={() => setFilterSort(!filterSort)}>
          {
            filterSort
              ? <SortAscending size={32} color={theme.COLORS.PLACEHOLDER} />
              : <SortDescending size={32} color={theme.COLORS.PLACEHOLDER} />
          }
        </ButtonSort>
        <ButtonSort onPress={() => setFilterActiveSearch(!filterActiveSearch)}>
          {
            filterActiveSearch
              ? <MagnifyingGlassMinus size={24} color={theme.COLORS.PLACEHOLDER} />
              : <MagnifyingGlassPlus size={24} color={theme.COLORS.PLACEHOLDER} />

          }
        </ButtonSort>
      </Content>
    </Container>
  );
}