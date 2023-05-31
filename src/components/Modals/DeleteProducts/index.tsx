import { Modal } from 'react-native';

import theme from '../../../theme';

import { ProductService } from '../../../domain/product/product.service';

import { Button, ButtonText, Buttons, Header, ModalContainer, ModalContent, Title } from './styles';

interface Props {
  visible: boolean;
  setVisible: Function;
  setRefresh: Function;
}
export function DeleteProducts({ visible, setVisible, setRefresh }: Props) {

  async function deleteProducts() {
    const productService = new ProductService();

    productService.deleteAll();

    setVisible(false);
    setRefresh(true);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Deseja realmente limpar toda a lista ?</Title>
          </Header>

          <Buttons>
            <Button color={theme.COLORS.RED} onPress={() => setVisible(false)}>
              <ButtonText>Cancelar</ButtonText>
            </Button>

            <Button color={theme.COLORS.GREEN} onPress={() => deleteProducts()}>
              <ButtonText>Limpar</ButtonText>
            </Button>
          </Buttons>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}