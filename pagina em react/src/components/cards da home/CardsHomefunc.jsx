import product from "../Cadrs/product";
import Card from "../Cadrs/Card";
import './Cardcs.css'


export default function ListagemHome() {
  let cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
        <Card produto={product[i]} />
    );
  }

  return <section id="sec-h-cards"><div className="cardsec">{cards}</div></section>;
} 