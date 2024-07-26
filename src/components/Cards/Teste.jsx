import Produto from './Product'

let cards = [];
for (let i = 0; i < Produto.length; i++) {
  cards.push(
    <div className="col-md-4">
      <Card Produto={Produto[i]} />
    </div>
  );
  return cards;
}