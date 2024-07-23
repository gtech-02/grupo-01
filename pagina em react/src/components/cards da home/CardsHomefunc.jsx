import product from "../Cadrs/product";
import CardHome from "./CardsHome";


export default function ListagemHome() {
  let cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
        <CardHome produto={product[i]} />
    );
  }

  return <section><div className="col-md-4">{cards}</div></section>;
} 