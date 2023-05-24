import Realm from "realm";

import { ProductSchema } from "./Schemas/ProductSchema";

export const getRealm = async () => await Realm.open({
  path: "ilist",
  schema: [ProductSchema],
  schemaVersion: 3
});
