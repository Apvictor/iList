import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;