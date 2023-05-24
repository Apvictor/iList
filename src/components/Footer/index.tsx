import { TouchableOpacity } from 'react-native';
import { Check, CurrencyDollar } from 'phosphor-react-native';

import { CheckBox, Container, Content, Line, Total, TotalNotSelected, TotalSelected } from './styles';

import theme from "../../theme";
interface Props {
  totalNotSelected: number,
  total: number,
  totalSelected: number,
  setFilterNotSelected: Function,
  setFilterSelected: Function,
}
export function Footer({ total, totalNotSelected, totalSelected, setFilterNotSelected, setFilterSelected }: Props) {


  return (
    <>
      <Line />
      <Container>
        <Content>
          <CheckBox status={false} onPress={() => {
            setFilterNotSelected(true);
            setFilterSelected(false);
          }}></CheckBox>
          <TotalNotSelected>R$ {totalNotSelected.toFixed(2)}</TotalNotSelected>
        </Content>
        <Content>
          <TouchableOpacity onPress={() => {
            setFilterNotSelected(false);
            setFilterSelected(false);
          }}>
            <CurrencyDollar size={28} weight="bold" color={theme.COLORS.GREENL} />
          </TouchableOpacity>
          <Total>R$ {total.toFixed(2)}</Total>
        </Content>
        <Content>
          <CheckBox status={true} onPress={() => {
            setFilterSelected(true);
            setFilterNotSelected(false);
          }}>
            {<Check size={24} weight="bold" />}
          </CheckBox>
          <TotalSelected>R$ {totalSelected.toFixed(2)}</TotalSelected>
        </Content>
      </Container>
    </>
  );
}