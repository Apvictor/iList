import { Modal } from 'react-native';
import { X } from 'phosphor-react-native';
import { useEffect, useState } from 'react';

import theme from '../../theme';

import { ProductService } from '../../domain/product/product.service';
import { ProductModel } from '../../domain/product/product.model';

import { Button, ButtonText, Close, Form, Header, Input, ModalContainer, ModalContent, Title } from './styles';

interface Props {
  productDB: ProductModel,
  visible: boolean;
  setVisible: Function;
  setRefresh: Function;
}
export function UpdateProduct({ productDB, visible, setVisible, setRefresh }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  async function saveProduct() {
    if (name.trim() != "") {

      const productService = new ProductService();

      const data = {
        name: name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        status: productDB.status
      };

      productService.update(productDB._id, data);

      setVisible(false);
      setRefresh(true);
    }
  }

  useEffect(() => {
    if (productDB.name != null) {
      setName(productDB.name);
    }
    if (productDB.price != null) {
      setPrice(productDB.price + "");
    }
    if (productDB.quantity != null) {
      setQuantity(productDB.quantity + "");
    }
  }, [visible]);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Atualizar Produto</Title>
            <Close onPress={() => setVisible(!visible)}>
              <X size={32} color={theme.COLORS.PLACEHOLDER} />
            </Close>
          </Header>

          <Form>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Produto *"
              placeholderTextColor={theme.COLORS.PLACEHOLDER}
            />
            <Input
              value={price}
              onChangeText={setPrice}
              placeholder="Preço"
              keyboardType="numeric"
              placeholderTextColor={theme.COLORS.PLACEHOLDER}
            />
            <Input
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              placeholder="Quantidade"
              placeholderTextColor={theme.COLORS.PLACEHOLDER}
            />

            <Button onPress={() => saveProduct()}>
              <ButtonText>Atualizar</ButtonText>
            </Button>
          </Form>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}