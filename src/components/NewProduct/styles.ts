import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000CC;
  `;

export const ModalContent = styled.View`
  position: absolute;
  bottom: 0;

  width: 100%;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.SHAPEP};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Close = styled.TouchableOpacity``;

export const Form = styled.View``;

export const Input = styled.TextInput`
  height: 54px;
  padding: 0 20px;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.TEXT};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  margin-top: 15px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
