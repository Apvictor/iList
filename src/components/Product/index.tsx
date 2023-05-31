import { useEffect, useState } from 'react';
import { Check, PlusCircle, MinusCircle } from 'phosphor-react-native';

import theme from "../../theme";

import { ProductModel } from '../../domain/product/product.model';

import { ProductService } from '../../domain/product/product.service';

import { ButtonContainer, ButtonLess, ButtonMore, ButtonText, CheckBox, Container, ProductName, ProductPrice } from './styles';

interface Props {
  productDB: ProductModel,
  setRefresh: Function,
  setModalUpdateVisible: Function;
  setModalDeleteVisible: Function;
  setProductDB: Function;
}
export function Product({ productDB, setRefresh, setModalUpdateVisible, setModalDeleteVisible, setProductDB }: Props) {
  const [product, setProduct] = useState(productDB);

  function productLess() {
    setProduct({
      _id: product._id,
      name: product.name,
      price: product.price,
      status: product.status,
      quantity: product.quantity - 1,
    });

    setRefresh(true);
  }

  function productMore() {
    setProduct({
      _id: product._id,
      name: product.name,
      price: product.price,
      status: product.status,
      quantity: product.quantity + 1,
    });

    setRefresh(true);
  }

  function productStatus() {
    setProduct({
      _id: product._id,
      name: product.name,
      price: product.price,
      status: !product.status,
      quantity: product.quantity,
    });

    setRefresh(true);
  }

  useEffect(() => {
    const productService = new ProductService();

    if (product.quantity >= 1) {
      productService.update(product._id, product);
    }
    else {
      setModalDeleteVisible(true);
      setProductDB(product);
    }

  }, [product])

  return (
    <Container onPress={() => {
      setModalUpdateVisible(true);
      setProductDB(product);
    }

    }>
      <CheckBox status={product.status} onPress={() => productStatus()}>
        {product.status && <Check size={32} weight="bold" />}
      </CheckBox>
      <ProductName status={product.status}>{product.name}</ProductName>
      <ProductPrice status={product.status}>R$ {(product.price * product.quantity).toFixed(2)}</ProductPrice>

      <ButtonContainer>
        <ButtonLess onPress={() => productLess()}>
          <MinusCircle
            size={32}
            weight="bold"
            color={theme.COLORS.REDD}
          />
        </ButtonLess>
        <ButtonText>{product.quantity}</ButtonText>
        <ButtonMore onPress={() => productMore()}>
          <PlusCircle
            size={32}
            weight="bold"
            color={theme.COLORS.GREEND}
          />
        </ButtonMore>
      </ButtonContainer>
    </Container>
  );
}