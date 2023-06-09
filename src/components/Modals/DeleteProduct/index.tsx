import { Modal } from 'react-native';

import { Button, ButtonText, Buttons, Header, ModalContainer, ModalContent, Title } from './styles';

import { ProductModel } from '../../../domain/product/product.model';
import { ProductService } from '../../../domain/product/product.service';

import theme from '../../../theme';

interface Props {
  visible: boolean;
  productDB: ProductModel;
  setVisible: Function;
  setLoading: Function;
}
export function DeleteProduct({ visible, setVisible, setLoading, productDB }: Props) {

  async function deleteProduct() {
    const productService = new ProductService();

    productService.delete(productDB._id);

    setVisible(false);
    setLoading(true);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Deseja realmente excluir este produto ?</Title>
          </Header>

          <Buttons>
            <Button color={theme.COLORS.REDD} onPress={() => {
              setVisible(false);
              setLoading(true);
            }}>
              <ButtonText>CANCELAR</ButtonText>
            </Button>

            <Button color={theme.COLORS.GREEN} onPress={() => deleteProduct()}>
              <ButtonText>EXCLUIR</ButtonText>
            </Button>
          </Buttons>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}