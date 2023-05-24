import { Check, CurrencyDollar } from 'phosphor-react-native';

import { CheckBox, Container, Content, Line, Total, TotalNotSelected, TotalSelected } from './styles';

import theme from "../../theme";
interface Props {
  totalNotSelected: number,
  total: number,
  totalSelected: number,
}
export function Footer({ total, totalNotSelected, totalSelected }: Props) {

  return (
    <>
      <Line />
      <Container>
        <Content>
          <CheckBox status={false}>

          </CheckBox>
          <TotalNotSelected>R$ {totalNotSelected.toFixed(2)}</TotalNotSelected>
        </Content>
        <Content>
          <CurrencyDollar size={28} weight="bold" color={theme.COLORS.GREENL} />
          <Total>R$ {total.toFixed(2)}</Total>
        </Content>
        <Content>
          <CheckBox status={true}>
            {<Check size={24} weight="bold" />}
          </CheckBox>
          <TotalSelected>R$ {totalSelected.toFixed(2)}</TotalSelected>
        </Content>
      </Container>
    </>
  );
}