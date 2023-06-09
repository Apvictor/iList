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
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.TITLE};
`;

export const Close = styled.TouchableOpacity``;

export const Form = styled.View`
  width: 100%;
`;

export const Inline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonSelected = styled.TouchableOpacity<any>`
  height: 40px;
  margin-top: 5px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme, color }) => color ? theme.COLORS.GREEN : theme.COLORS.GREEN};
  background-color: ${({ theme, color }) => color ? theme.COLORS.GREEN : theme.COLORS.SHAPEP};
`;

export const ButtonSelectedText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
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
