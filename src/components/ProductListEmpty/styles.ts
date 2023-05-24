import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarImg = styled.Image`
  height: 140px;
  width: 140px;
`;

export const CarText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
`;