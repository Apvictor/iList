import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View``;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const SubtitleFilter = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const TotalProducts = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
`;

export const ButtonSort = styled.TouchableOpacity`
  margin-left: 5px;
`;
