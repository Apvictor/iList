export const ProductSchema = {
  name: "Product",
  properties: {
    _id: "string",
    name: "string",
    price: "float",
    status: "bool",
    quantity: "int",
  },

  primaryKey: "_id",
};
