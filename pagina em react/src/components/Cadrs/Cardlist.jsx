import product from "./product";
import Card from "./Card";


export default function Listagem() {
  let cards = [];
  for (let i = 0; i < product.length; i++) {
    cards.push(
      
        <Card produto={product[i]} />

    );
  }

  return <section className="cardsec"> <div className="col-cards">{cards}</div></section>
} 