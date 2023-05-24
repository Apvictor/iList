import { useState } from 'react';
import { Modal } from 'react-native';
import { X } from 'phosphor-react-native';

import theme from '../../theme';

import { ProductService } from '../../domain/product/product.service';

import { Button, ButtonText, Close, Form, Header, Input, ModalContainer, ModalContent, Title } from './styles';

interface Props {
  visible: boolean;
  setVisible: Function;
}
export function NewProduct({ visible, setVisible }: Props) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  async function saveProduct() {
    if (name.trim() != "") {

      const productService = new ProductService();

      const data = {
        name: name,
        price: price == "" ? "0" : price,
        quantity: quantity == "" ? "1" : quantity,
      };

      productService.insert(data);

      setVisible(false);

      setName("");
      setPrice("");
      setQuantity("");
    }
  }

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Novo Produto</Title>
            <Close onPress={() => setVisible(!visible)}>
              <X size={24} color={theme.COLORS.PLACEHOLDER} />
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
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </Form>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}