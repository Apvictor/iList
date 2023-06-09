import { Modal } from 'react-native';

import { Button, ButtonText, Buttons, Header, ModalContainer, ModalContent, Title } from './styles';

import { ProductService } from '../../../domain/product/product.service';

import theme from '../../../theme';

interface Props {
  visible: boolean;
  setVisible: Function;
  setLoading: Function;
}
export function CleanProduct({ visible, setVisible, setLoading }: Props) {

  async function deleteProducts() {
    const productService = new ProductService();

    productService.deleteAll();

    setVisible(false);
    setLoading(true);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Deseja realmente limpar toda a lista ?</Title>
          </Header>

          <Buttons>
            <Button color={theme.COLORS.REDD} onPress={() => setVisible(false)}>
              <ButtonText>CANCELAR</ButtonText>
            </Button>

            <Button color={theme.COLORS.GREEN} onPress={() => deleteProducts()}>
              <ButtonText>LIMPAR</ButtonText>
            </Button>
          </Buttons>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}