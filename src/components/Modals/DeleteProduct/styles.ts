import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000CC;
  `;

export const ModalContent = styled.View`
  width: 90%;
  padding: 24px;
  border-radius: 20px;
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

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity<any>`
  height: 50px;
  margin-top: 15px;
  margin-right: 10px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: ${({ color }) => color};
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
