import React, { useState } from "react";
import ProductGrid from "../components/ProductsGrid";
import { customFetch } from "../utils/index";
import ProductList from "../components/ProducList";
import { LuLayoutGrid } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import ProductsContainer from "../components/ProductsContainer";
import FormSearch from "../components/FormSearch";

export const loader = async () => {
  const req = await customFetch(``);
  const product = await req.data;
  let meta = await req.data.meta;
  return { product, meta };
};
function Products() {
  return (
    <div className=" containerH mb-5">
      <FormSearch />
      <ProductsContainer />
    </div>
  );
}

export default Products;
