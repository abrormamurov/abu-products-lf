import React from "react";
import Input from "./Input";
import { Form, useLoaderData } from "react-router-dom";
import FormOption from "./FormOption";
import SerchInput from "./SerchInput";
import { formatPrice } from "../utils";
function FormSearch() {
  let { meta } = useLoaderData();
  console.log(meta);
  return (
    <div className=" containerH mt-20">
      <Form
        method="post"
        className=" containerH  w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 grid-cols-1 items-center justify-center bg-base-200 rounded-lg p-5 px-10 "
      >
        {/* <label className="label flex-col items-start h-16 justify-between">
          <span className=" label-text text-lg pb-1 pl-1">Search</span>
          <Input
            lebel="Search products"
            name="search"
            type="search"
            size="input-sm px-8    "
          />
        </label> */}
        <SerchInput lebel="Serch products" type="search" />
        <FormOption
          lebel="Search categories"
          list={meta.categories}
          size="select-sm"
          name="categories"
          defaultvalue="all"
        />
        <FormOption
          lebel="Search companies
          "
          list={meta.companies}
          size="select-sm"
          name="companies"
          defaultvalue="all"
        />
        <FormOption
          lebel="Sort by
          "
          list={["a-z", "z-a", "high", "low"]}
          size="select-sm"
          name="companies"
          defaultvalue="all"
        />
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Price</span>
            <span className="label-text-alt text-bold text-lg">
              {formatPrice(50000)}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max="100"
            className="range range-secondary"
          />
          <div className="label text-2xl font-bold">
            <span className="label-text-alt">0</span>
            <span className="label-text-alt">Max: {formatPrice(100000)}</span>
          </div>
        </label>
        <div className="form-control">
          <label className="label cursor-pointer flex-col gap-2">
            <span className="label-text">Free shipping</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
        <button className="btn btn-success uppercase btn-sm">Search</button>
        <button className="btn btn-primary btn-sm uppercase">Reset</button>
      </Form>
    </div>
  );
}

export default FormSearch;
