import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.SHAPEP};
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const CheckBox = styled.TouchableOpacity<any>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ status, theme }) => status ? theme.COLORS.GREENL : theme.COLORS.SHAPET};
`;

export const ProductName = styled.Text<any>`
  font-size: 16px;
  color: ${({ status, theme }) => status ? theme.COLORS.PLACEHOLDER : theme.COLORS.TEXT};
  text-decoration: ${({ status }) => status ? "line-through" : "none"};
`;

export const ProductPrice = styled.Text<any>`
  color: ${({ status, theme }) => status ? theme.COLORS.PLACEHOLDER : theme.COLORS.TEXT};
  text-decoration: ${({ status }) => status ? "line-through" : "none"};  font-size: 16px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonMore = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: 16px;
`;

export const ButtonLess = styled.TouchableOpacity`
  margin-right: 5px;
`;