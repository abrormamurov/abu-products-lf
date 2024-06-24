import React, { Children } from "react";

function Input({ plesholder, name, type, children, inputRef, lebel, size }) {
  return (
    <label
      className={`flex input input-bordered items-center gap-2 form-control w-full max-w-xs ${size}`}
    >
      {children}
      {/* <div className="label">
        <span className="label-text">{lebel}</span>
      </div> */}
      <input
        type={type}
        className={`grow lg:w-72 h-12  `}
        placeholder={plesholder}
        name={name}
        ref={inputRef}
      />
    </label>
  );
}

export default Input;
