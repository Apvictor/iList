import { useEffect, useState } from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { ProductListEmpty } from '../../components/ProductListEmpty';
import { SubHeader } from '../../components/SubHeader';

import { Container } from './styles';
import { ProductModel } from '../../domain/product/product.model';
import { NewProduct } from '../../components/NewProduct';
import { getRealm } from '../../database/realm';
import { UpdateProduct } from '../../components/UpdateProduct';

export function Home() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [product, setProduct] = useState<ProductModel>({});
  const [refresh, setRefresh] = useState(false);
  const [modalInsertVisible, setModalInsertVisible] = useState(false);
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false);

  const [totalNotSelected, setTotalNotSelected] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [total, setTotal] = useState(0);

  async function productList() {
    setProducts([]);
    const realm = await getRealm();

    const products = realm
      .objects<ProductModel[]>("Product")
      .toJSON();


    let total = 0;
    let totalSelected = 0;
    let totalNotSelected = 0;
    products.map((item) => {
      if (!item.status) {
        totalNotSelected += item.price * item.quantity;
      }
      if (item.status) {
        totalSelected += item.price * item.quantity;
      }
      total += item.price * item.quantity;
    });

    setTotalNotSelected(totalNotSelected);
    setTotalSelected(totalSelected);
    setTotal(total);

    setProducts(products);
  }

  function refreshProducts() {
    productList();
    setRefresh(false);
  }

  useEffect(() => {
    productList();

    if (refresh) refreshProducts();

  }, [modalInsertVisible, modalUpdateVisible, refresh])

  return (
    <Container>
      <Header setVisible={setModalInsertVisible} />
      <SubHeader total={products.length} />

      {
        products.length > 0
          ? <ProductList products={products} setRefresh={setRefresh} setVisible={setModalUpdateVisible} setProduct={setProduct} />
          : <ProductListEmpty />
      }

      <Footer total={total} totalSelected={totalSelected} totalNotSelected={totalNotSelected} />

      <NewProduct visible={modalInsertVisible} setVisible={setModalInsertVisible} />
      <UpdateProduct visible={modalUpdateVisible} setVisible={setModalUpdateVisible} productDB={product} />

    </Container >
  );
}