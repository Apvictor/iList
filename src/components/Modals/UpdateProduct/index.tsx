import { Modal } from 'react-native';
import { X } from 'phosphor-react-native';
import { useEffect, useState } from 'react';

import { Button, ButtonSelected, ButtonSelectedText, ButtonText, Close, Form, Header, Inline, ModalContainer, ModalContent, Title } from './styles';

import { InputText } from '../../InputText';

import { ProductModel } from '../../../domain/product/product.model';
import { ProductService } from '../../../domain/product/product.service';

import theme from '../../../theme';
interface Props {
  productDB: ProductModel,
  visible: boolean;
  setVisible: Function;
  setLoading: Function;
}
export function UpdateProduct({ productDB, visible, setVisible, setLoading }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);
  const [quantity, setQuantity] = useState("");

  async function saveProduct() {
    if (name.trim() != "") {

      const productService = new ProductService();

      const data = {
        name: name,
        price: parseFloat(price),
        quantity: parseInt(quantity),
        status: status
      };

      productService.update(productDB._id, data);

      setVisible(false);
      setLoading(true);
    }
  }

  useEffect(() => {
    if (productDB.name != null) setName(productDB.name);
    if (productDB.price != null) setPrice(productDB.price.toFixed(2) + "");
    if (productDB.quantity != null) setQuantity(productDB.quantity + "");
    setStatus(productDB.status);
  }, [visible]);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <ModalContainer>
        <ModalContent>
          <Header>
            <Title>Atualizar Produto</Title>
            <Close onPress={() => setVisible(!visible)}>
              <X size={24} color={theme.COLORS.PLACEHOLDER} />
            </Close>
          </Header>

          <Form>
            <InputText
              value={name}
              text="Produto"
              required={true}
              setValue={setName}
              placeholder="Nome do produto"
            />

            <Inline>
              <InputText
                text="Preço"
                value={price}
                setValue={setPrice}
                keyboardType="numeric"
                placeholder="Preço do produto     "
              />

              <InputText
                value={quantity}
                text="Quantidade"
                setValue={setQuantity}
                keyboardType="numeric"
                placeholder="Quantidade do produto"
              />
            </Inline>

            <InputText
              text="Preço x Quantidade"
              value={(parseFloat(price) * parseInt(quantity)).toFixed(2)}
              disabled={false}
              setValue={setPrice}
              keyboardType="numeric"
              placeholder="Preço x Quantidade"
              color={theme.COLORS.PLACEHOLDER}
            />

            <ButtonSelected color={status} onPress={() => setStatus(!status)}>
              <ButtonSelectedText>
                {status ? "SELECIONADO" : "NÃO SELECIONADO"}
              </ButtonSelectedText>
            </ButtonSelected>

            <Button onPress={saveProduct}>
              <ButtonText>ATUALIZAR</ButtonText>
            </Button>
          </Form>

        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}