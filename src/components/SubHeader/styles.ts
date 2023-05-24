import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const TotalItems = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
`;


export const ButtonSort = styled.TouchableOpacity`
  margin-left: 5px;
`;
