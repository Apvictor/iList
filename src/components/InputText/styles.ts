import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  padding-bottom: 6px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const TextRequired = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.REDD};
`;

export const Input = styled.TextInput`
  height: 54px;
  padding: 0 20px;
  border-radius: 6px;
`;
