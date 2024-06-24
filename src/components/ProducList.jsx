import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/index";
function ProductList() {
  let { product } = useLoaderData();
  let { data } = product;

  return (
    <div className="flex flex-col gap-5 w-full containerH  align-element">
      {data &&
        data.map((product) => {
          let { image, company, price, title } = product.attributes;
          let priceAmout = formatPrice(price);
          return (
            <Link
              key={product.id}
              to={`/prodact/${product.id}`}
              className=" bg-white drop-shadow-lg hover:drop-shadow-xl p-5 rounded-xl flex justify-between items-top group hover:bg-base-200"
            >
              <div className="flex gap-10  ">
                <figure className="    ">
                  <img
                    className="rounded-lg size-32 object-cover group-hover:drop-shadow-xl"
                    src={image}
                    alt=""
                  />
                </figure>
                <ul className="">
                  <li className=" capitalize text-2xl font-medium">{title}</li>
                  <li className=" text-xl font-bold opacity-60 pt-2">
                    {company}
                  </li>
                </ul>
              </div>
              <p className="text-xl font-bold  p-4">{priceAmout}</p>
            </Link>
          );
        })}
    </div>
  );
}

export default ProductList;
