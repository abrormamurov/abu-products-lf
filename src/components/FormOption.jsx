import React from "react";

function FormOption({ lebel, name, list, defaultvalue, size }) {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        {lebel}
      </label>
      <select
        defaultValue={defaultvalue}
        className={` select select-bordered ${size}`}
        name={name}
        id=""
      >
        {list &&
          list.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default FormOption;
