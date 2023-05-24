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
`;

export const LogoImg = styled.Image`
  height: 40px;
  width: 40px;
`;

export const Title = styled.Text`
  padding-left: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ButtonAdd = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const ButtonAddText = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
