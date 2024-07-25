import { useParams } from "react-router-dom";
import products from "../../components/Cadrs/product";
import './ProductView.css'

function ProductView() {
  let { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <>
      <div className="view-card">
        <div>
          <img src={product.image} class="card-img-top" alt={product.nome} />
        </div>

        <div className="mini-cards">
          <div class="card" aria-hidden="true">
            <img src={product.image} class="card-img-top" alt={product.nome} />
          </div>
          <div class="card" aria-hidden="true">
            <img src={product.image} class="card-img-top" alt={product.nome} />
          </div>
          <div class="card" aria-hidden="true">
            <img src={product.image} class="card-img-top" alt={product.nome} />
          </div>
          <div class="card" aria-hidden="true">
            <img src={product.image} class="card-img-top" alt={product.nome} />
          </div>
        </div>
      </div>
        
    </>
        );
  }
        {/* <h2>{product.nome}</h2>
    // <img src={product.image} class="card-img" alt={product.nome} />
<img src={product.image} alt={product.nome} />
<p>Qualidades: {product.qualidades}</p>
<p>Preço: {product.preco}</p>
<p>Descrição: {product.descricao}</p> */}

        export default ProductView;