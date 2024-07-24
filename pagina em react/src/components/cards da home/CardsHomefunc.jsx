import product from "../Cadrs/product";
import Card from "../Cadrs/Card";


export default function ListagemHome() {
  let cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
        <Card produto={product[i]} />
    );
  }

  return <section className="section-Homel"><div className="col-cards">{cards}</div></section>;
} 