import 'bootstrap/dist/css/bootstrap.min.css'
import './Cardc.css'

export default function CardHome({ produto }) {
  return (
    <div className="card">
      <img src={produto.image} className="card-img-top" alt="Produto" />
      <div className="card-body">
        <h5 className="card-title">{produto.nome}</h5>
        <h6>{produto.qualidades}</h6>
        <span>{produto.preco}</span>
        <div className="d-grid gap-2 col-6 mx-auto">
<button id="botao"className="btn btn-primary" type="button">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}