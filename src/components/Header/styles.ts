import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  padding-left: 5px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Buttons = styled.View`
  flex-direction: row;
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.REDD};
`;

export const ButtonAdd = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
`;