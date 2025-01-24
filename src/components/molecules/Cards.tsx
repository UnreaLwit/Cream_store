import { products } from "../../data/cardProducts";
import { Card } from "../atoms/card/Card";

export const Cards = () => {
  return (
    <div>
      {products.map((product) => {
        return (
          <span className="inline-block" key={product.id}>
            <span
              className="flex flex-wrap mt-12 ml-4 w-auto h-auto"
              key={product.id}
            >
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                oldprice={product.oldprice}
                src={product.src}
              />
            </span>
          </span>
        );
      })}
    </div>
  );
};
