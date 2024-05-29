import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

import { Link } from "react-router-dom";

const cImages = [hero1, hero2, hero3, hero4];
function Hero() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Our Products
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          {cImages.map((image) => {
            return (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  alt=""
                  className="rounded-box h-full w-80 object-cover"
                />
              </div>
            );
          })}
        </div>
        <section>
          {" "}
          <h2 className="text-3xl mb-5 font-bold">Featured Products</h2>
        </section>
      </div>
      <div>
        <hr className="mb-10 font-bold border-2" />
        <div className="flex">
          <Link to="/products">
            <div to="/products" className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/public/image.png"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Avant-Garde Lamp</h2>
                <p>$179.99</p>
              </div>
            </div>
          </Link>
          <Link to="/products">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Coffee Table</h2>
                <p>$179.99</p>
              </div>
            </div>
          </Link>
          <Link to="/products">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Comfy Bed</h2>
                <p>$129.99</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
