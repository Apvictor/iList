import { Modal } from 'react-native';

import theme from '../../../theme';

import { ProductModel } from '../../../domain/product/product.model';

import { ProductService } from '../../../domain/product/product.service';

import { Button, ButtonText, Buttons, Header, ModalContainer, ModalContent, Title } from './styles';

interface Props {
  visible: boolean;
  productDB: ProductModel;
  setVisible: Function;
  setRefresh: Function;
}
export function DeleteProduct({ visible, setVisible, setRefresh, productDB }: Props) {

  async function deleteProduct() {
    const productService = new ProductService();

    productService.delete(productDB._id);

    setVisible(false);
    setRefresh(true);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Deseja realmente deletar este produto ?</Title>
          </Header>

          <Buttons>
            <Button color={theme.COLORS.RED} onPress={() => {
              setVisible(false);
              setRefresh(true);
            }}>
              <ButtonText>Cancelar</ButtonText>
            </Button>

            <Button color={theme.COLORS.GREEN} onPress={() => deleteProduct()}>
              <ButtonText>Deletar</ButtonText>
            </Button>
          </Buttons>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}