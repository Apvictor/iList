import { FlatList } from 'react-native';

import { Product } from '../Product';

import { ProductModel } from '../../domain/product/product.model';

import { Container } from './styles';

interface Props {
  products: ProductModel[],
  setRefresh: Function,
  setVisible: Function;
  setProduct: Function;
}
export function ProductList({ products, setRefresh, setVisible, setProduct }: Props) {

  return (
    <Container>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Product productDB={item} setRefresh={setRefresh} setVisible={setVisible} setProductDB={setProduct} />}
        contentContainerStyle={{ paddingBottom: 10 }}
        showsVerticalScrollIndicator={true}
        style={{ flex: 1 }}
      />
    </Container>
  );
}