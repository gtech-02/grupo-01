import product from "./product";
import Card from "./Card";


export default function Listagem() {
  let cards = [];
  for (let i = 0; i < product.length; i++) {
    cards.push(
      <div className="col-md-4">
        <Card produto={product[i]} />
      </div>
    );
  }

  return <div className="row">{cards}</div>;
} 