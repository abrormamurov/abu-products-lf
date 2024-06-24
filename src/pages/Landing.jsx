import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/index.jsx";

import ProductGrid from "../components/ProductsGrid.jsx";
import HomeFutter from "../components/HomeFutter";

export const loader = async () => {
  const req = await customFetch(`/?featured=true`);
  const product = await req.data;
  return { product };
};

function Landing() {
  let { product } = useLoaderData();
  let { data } = product;
  let images = [
    "/assets/hero1.webp",
    "/assets/hero2.webp",
    "/assets/hero3.webp",
    "/assets/hero4.webp",
  ];

  return (
    <>
      <div className="containerH flex justify-center  gap-20 items-center mt-16 lg:flex-row md:flex-col flex-col ">
        <div className="flex flex-col items-start gap-5  lg:w-[32rem]">
          <p className=" text-6xl font-bold ">
            We are changing the way people shop
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Link className="btn btn-secondary " to="/prodacts">
            Our Products
          </Link>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          {images.map((img, id) => {
            return (
              <div key={id} className="carousel-item">
                <img src={img} className="rounded-box w-80 object-cover" />
              </div>
            );
          })}
        </div>
      </div>
      <HomeFutter />
    </>
  );
}

export default Landing;
