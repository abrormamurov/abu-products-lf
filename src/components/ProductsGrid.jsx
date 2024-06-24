import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/index";
function ProductGrid() {
  let { product } = useLoaderData();
  let { data } = product;

  return (
    <div className="containerH w-full ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-5  ">
        {data &&
          data.map((product) => {
            let { price, image, title } = product.attributes;

            let amoutPrice = formatPrice(price);
            return (
              <Link
                key={product.id}
                to={`/prodact/${product.id}`}
                className="card w-96 bg-base-100 shadow-xl align-element hover:drop-shadow-2xl  "
              >
                <figure className="px-10 pt-10">
                  <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl size-40 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize">{title}</h2>

                  <div className="card-actions">
                    <button className="">{amoutPrice}</button>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default ProductGrid;
