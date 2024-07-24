import product from "../Cadrs/product";
import CardHome from "./CardsHome";


export default function ListagemHome() {
  let cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
        <CardHome produto={product[i]} />
    );
  }

  return <section className="section-Homel"><div className="col-cards">{cards}</div></section>;
} 