import React from "react";

function SectionTitle({ text }) {
  return (
    <div className=" border-b p-5  containerH mb-2 text-center ">
      <h2 className="text font-semibold capitalize text-3xl  ">{text}</h2>
    </div>
  );
}

export default SectionTitle;
