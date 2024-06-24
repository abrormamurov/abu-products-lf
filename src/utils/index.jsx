import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api/products",
});
// format price
export let formatPrice = (price) => {
  let dollarAmout = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed(2));

  return dollarAmout;
};
export let genetarteAmoutOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    let amout = index + 1;
    return (
      <option key={amout} value={amout}>
        {amout}
      </option>
    );
  });
};
