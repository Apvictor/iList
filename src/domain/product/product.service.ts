import uuid from 'react-native-uuid';
import { getRealm } from "../../database/realm";
import { ProductModel } from './product.model';

export class ProductService {

  public async insert(data) {
    try {
      const realm = await getRealm();

      realm.write(() => {
        realm.create("Product", {
          _id: uuid.v4(),
          name: data.name,
          price: parseFloat(data.price),
          quantity: parseInt(data.quantity),
          status: false
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async update(_id, data) {
    try {
      const realm = await getRealm();

      const product = realm
        .objects<ProductModel>("Product")
        .filtered(`_id = '${_id}'`);

      if (product.length > 0) {
        realm.write(() => {
          product[0].name = data.name,
            product[0].quantity = data.quantity,
            product[0].price = data.price,
            product[0].status = data.status
        });
      }


    } catch (error) {
      console.error(error);
    }
  }

  public async delete(_id) {
    try {
      const realm = await getRealm();

      const product = realm
        .objects<ProductModel>("Product")
        .filtered(`_id = '${_id}'`);

      if (product.length > 0) {
        realm.write(() => {
          realm.delete(product[0])
        });
      }

    } catch (error) {
      console.error(error);
    }
  }

  public async deleteAll() {
    try {
      const realm = await getRealm();

      const product = realm
        .objects<ProductModel>("Product");

      if (product.length > 0) {
        realm.write(() => {
          realm.delete(product[0])
        });
      }

    } catch (error) {
      console.error(error);
    }
  }
}