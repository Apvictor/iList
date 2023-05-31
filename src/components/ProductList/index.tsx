import { FlatList } from 'react-native';

import { Product } from '../Product';

import { ProductModel } from '../../domain/product/product.model';

import { Container } from './styles';

interface Props {
  products: ProductModel[],
  setRefresh: Function,
  setModalUpdateVisible: Function;
  setModalDeleteVisible: Function;
  setProduct: Function;
}
export function ProductList({ products, setRefresh, setModalUpdateVisible, setModalDeleteVisible, setProduct }: Props) {

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Product
          productDB={item}
          setRefresh={setRefresh}
          setModalUpdateVisible={setModalUpdateVisible}
          setModalDeleteVisible={setModalDeleteVisible}
          setProductDB={setProduct}
        />}
        showsVerticalScrollIndicator={true}
        style={{ flex: 1 }}
      />
    </Container>
  );
}