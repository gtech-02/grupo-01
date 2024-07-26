import 'bootstrap/dist/css/bootstrap.min.css'
import "./Cardc.css"
import { Link } from 'react-router-dom';

export default function Card({ produto }) {
  console.log(produto )
  return ( 
    <div className="cardList">
        <img src={produto.image} id='img-dos-cards' className="card-img-top" alt="Produto" />
        <div className="card-body">
          <h5 className="card-title">{produto.nome}</h5>
          <h6 className='C-qualidades'>{produto.qualidades}</h6>
          <span className='preco'>{produto.preco}</span>
          <div className="bt">
          <Link to={`/Produtos/${produto.id}`}>
            <button id="botao"className="btn btn-primary" type="button">
             Comprar
            </button>
            </Link>
          </div>
        </div>
    </div>
  );
}