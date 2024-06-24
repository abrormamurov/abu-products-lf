import React from "react";
import SectionTitle from "./SectionTitle";
import ProductGrid from "./ProductsGrid";
function HomeFutter() {
  return (
    <div className="containerH flex justify-center  mb-5 items-center  md:flex-col flex-col">
      <SectionTitle text="Featured Products" />
      <ProductGrid />
    </div>
  );
}

export default HomeFutter;
