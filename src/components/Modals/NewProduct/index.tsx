import { Modal } from 'react-native';
import { X } from 'phosphor-react-native';
import { useEffect, useState } from 'react';

import { Button, ButtonSelected, ButtonSelectedText, ButtonText, Close, Form, Header, Inline, ModalContainer, ModalContent, Title } from './styles';

import { ProductService } from '../../../domain/product/product.service';

import { InputText } from '../../InputText';

import theme from '../../../theme';

interface Props {
  visible: boolean;
  setVisible: Function;
  setLoading: Function;
}
export function NewProduct({ visible, setVisible, setLoading }: Props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState(false);
  const [quantity, setQuantity] = useState("");

  async function saveProduct() {
    if (name.trim() != "") {
      const productService = new ProductService();

      const data = {
        name: name,
        price: price == "" ? "0" : price,
        quantity: quantity == "" ? "1" : quantity,
        status: status,
      };

      productService.insert(data);

      setVisible(false);
      setLoading(true);

      setName("");
      setPrice("");
      setQuantity("");
    }
  }

  useEffect(() => {
    setStatus(false);
  }, []);

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

            <Button onPress={() => saveProduct()}>
              <ButtonText>CADASTRAR</ButtonText>
            </Button>
          </Form>

        </ModalContent>
      </ModalContainer>

    </Modal>
  );
}