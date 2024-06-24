import React, { useState } from "react";
import ProductGrid from "../components/ProductsGrid";
import { customFetch } from "../utils/index";
import ProductList from "../components/ProducList";
import { LuLayoutGrid } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";

function ProductsContainer() {
  let [grid, setGrid] = useState("grid");
  let { meta } = useLoaderData();
  return (
    <>
      <div className=" containerH gap-2 my-5 flex justify-between items-center">
        <div>
          <p className="text-xl font-bold ">
            {meta.pagination.total} poduct
            {meta.pagination.total <= 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex gap-2  ">
          {" "}
          <button
            onClick={() => {
              setGrid("grid");
            }}
            className={`btn ${
              grid == "grid" ? "btn-primary btn-circle" : "btn-info"
            }`}
          >
            <LuLayoutGrid className=" size-4" />
          </button>
          <button
            onClick={() => {
              setGrid("list");
            }}
            className={`btn  ${
              grid == "list" ? "btn-primary btn-circle" : "btn-info"
            }`}
          >
            <LuLayoutList className=" size-4" />
          </button>
        </div>
      </div>
      <div className="  items-center flex justify-center">
        {meta.pagination.total == 0 ? (
          <p className="text-xl font-medium text-center">
            Sorry, no products matched your search...
          </p>
        ) : grid == "grid" ? (
          <ProductGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
