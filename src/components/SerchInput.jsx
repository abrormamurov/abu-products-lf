import React from "react";

function SerchInput({ lebel, name, list, defaultvalue, size, type }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {lebel}
      </label>
      <input
        type={type}
        className="input input-bordered w-full max-w-xs input-sm"
      />
    </div>
  );
}

export default SerchInput;
