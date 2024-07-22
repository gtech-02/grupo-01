import Product from "./Product";
import Card from "./Card";

export default function Listagem(){
let cards = [];
for (let i = 0; i < Product.length; i++) {
  cards.push(
    <div className="col-md-4">
      <Card produto={Product[i]} />
    </div>
  );
}

return <div className="row">{cards}</div>;}