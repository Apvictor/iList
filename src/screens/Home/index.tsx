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
  const [refreshData, setRefreshData] = useState(false);
  const [refreshItem, setRefreshItem] = useState(false);
  const [modalInsertVisible, setModalInsertVisible] = useState(false);
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false);

  const [filterNotSelected, setFilterNotSelected] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);
  const [filterSort, setFilterSort] = useState(true);

  const [totalNotSelected, setTotalNotSelected] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [total, setTotal] = useState(0);

  async function productList() {
    const realm = await getRealm();

    const products = realm
      .objects<ProductModel[]>("Product")
      .sorted("name")
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

    if (filterSort) {
      setProducts(products.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0));
    } else {
      setProducts(products.sort((a, b) => (a.name < b.name) ? 1 : (b.name < a.name) ? -1 : 0));
    }

    if (filterNotSelected) {
      setProducts(products.filter((item) => (!item.status)));
    } else if (filterSelected) {
      setProducts(products.filter((item) => (item.status)));
    } else {
      setProducts(products);
    }

  }

  function refreshDataFlatList() {
    setProducts([]);
    productList();
    setRefreshData(false);
  }

  function refreshItemFlatList() {
    productList();
    setRefreshItem(false);
  }

  useEffect(() => {
    productList();

    if (refreshData) refreshDataFlatList();
    if (refreshItem) refreshItemFlatList();

  }, [modalInsertVisible, modalUpdateVisible, refreshItem, refreshData, filterNotSelected, filterSelected, filterSort])

  return (
    <Container>
      <Header setVisible={setModalInsertVisible} />
      <SubHeader total={products.length} filterSelected={filterSelected} filterNotSelected={filterNotSelected} filterSort={filterSort} setFilterSort={setFilterSort} />

      {
        products.length > 0
          ? <ProductList products={products} setRefresh={setRefreshItem} setVisible={setModalUpdateVisible} setProduct={setProduct} />
          : <ProductListEmpty />
      }

      <Footer
        total={total}
        totalSelected={totalSelected}
        totalNotSelected={totalNotSelected}
        setFilterSelected={setFilterSelected}
        setFilterNotSelected={setFilterNotSelected}
      />

      <NewProduct visible={modalInsertVisible} setVisible={setModalInsertVisible} setRefresh={setRefreshData} />
      <UpdateProduct visible={modalUpdateVisible} setVisible={setModalUpdateVisible} productDB={product} setRefresh={setRefreshData} />

    </Container >
  );
}