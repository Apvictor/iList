import { useEffect, useState } from 'react';

import { getRealm } from '../../database/realm';

import { ProductModel } from '../../domain/product/product.model';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { InputText } from '../../components/InputText';
import { SubHeader } from '../../components/SubHeader';
import { ProductList } from '../../components/ProductList';
import { ProductListEmpty } from '../../components/ProductListEmpty';

import { DeleteProduct } from '../../components/Modals/DeleteProduct';
import { CleanProduct } from '../../components/Modals/CleanProduct';
import { NewProduct } from '../../components/Modals/NewProduct';
import { UpdateProduct } from '../../components/Modals/UpdateProduct';

import { Container } from './styles';

import theme from '../../theme';

export function Home() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [product, setProduct] = useState<ProductModel>({});

  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [modalInsertVisible, setModalInsertVisible] = useState(false);
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [modalCleanVisible, setModalCleanVisible] = useState(false);

  const [filterNotSelected, setFilterNotSelected] = useState(false);
  const [filterSelected, setFilterSelected] = useState(false);
  const [filterSort, setFilterSort] = useState(true);
  const [filterActiveSearch, setFilterActiveSearch] = useState(false);
  const [filterSearch, setFilterSearch] = useState("");

  const [totalNotSelected, setTotalNotSelected] = useState(0);
  const [totalSelected, setTotalSelected] = useState(0);
  const [total, setTotal] = useState(0);

  async function productList() {
    const realm = await getRealm();

    const products = realm
      .objects<ProductModel[]>("Product")
      .filtered(`name CONTAINS '${filterSearch}'`)
      .sorted("name", !filterSort)
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

    if (filterNotSelected) {
      setProducts(products.filter((item) => (!item.status)));
    } else if (filterSelected) {
      setProducts(products.filter((item) => (item.status)));
    } else {
      setProducts(products);
    }

    filterActiveSearch == false && setFilterSearch("");

    setRefresh(false);
    setLoading(false);
  }

  useEffect(() => {
    productList();


  }, [modalInsertVisible, modalUpdateVisible, refresh, loading, filterNotSelected, filterSelected, filterSort, filterActiveSearch, filterSearch])

  return (
    <Container>

      <Header
        setModalInsertVisible={setModalInsertVisible}
        setModalCleanVisible={setModalCleanVisible}
        total={products.length}
      />
      <SubHeader
        total={products.length}
        filterActiveSearch={filterActiveSearch}
        setFilterActiveSearch={setFilterActiveSearch}
        filterSelected={filterSelected}
        filterNotSelected={filterNotSelected}
        filterSort={filterSort}
        setFilterSort={setFilterSort}
      />

      {
        filterActiveSearch &&
        <InputText bg={theme.COLORS.SHAPEP} placeholder='Pesquisar' value={filterSearch} setValue={setFilterSearch} />
      }

      {
        products.length > 0
          ?
          loading
            ? <Loading />
            : <ProductList
              products={products}
              setProduct={setProduct}
              setRefresh={setRefresh}
              setModalUpdateVisible={setModalUpdateVisible}
              setModalDeleteVisible={setModalDeleteVisible}
            />
          : <ProductListEmpty />
      }

      <Footer
        total={total}
        totalSelected={totalSelected}
        totalNotSelected={totalNotSelected}
        setFilterSelected={setFilterSelected}
        setFilterNotSelected={setFilterNotSelected}
      />

      <CleanProduct
        setVisible={setModalCleanVisible}
        visible={modalCleanVisible}
        setLoading={setLoading}
      />
      <NewProduct
        setVisible={setModalInsertVisible}
        visible={modalInsertVisible}
        setLoading={setLoading}
      />
      <UpdateProduct
        setVisible={setModalUpdateVisible}
        visible={modalUpdateVisible}
        setLoading={setLoading}
        productDB={product}
      />
      <DeleteProduct
        setVisible={setModalDeleteVisible}
        visible={modalDeleteVisible}
        setLoading={setLoading}
        productDB={product}
      />

    </Container >
  );
}