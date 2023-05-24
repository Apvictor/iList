import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  margin: 5px 0;
`;

export const TotalNotSelected = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
`;

export const TotalSelected = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Total = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GREENL};
`;

export const CheckBox = styled.TouchableOpacity<any>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  background-color: ${({ status, theme }) => status ? theme.COLORS.GREEN : theme.COLORS.SHAPET};
`;