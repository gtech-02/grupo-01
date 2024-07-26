import { useParams } from "react-router-dom";
import products from "../../components/Cadrs/product";
import { Layout } from "../../Layout";
import './ProductView.css'

function ProductView() {
  let { id } = useParams();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <>
    <Layout>
      <div className="img-full">
        <div className="view-card">
          <div>
            <img src={product.image} class="card-img-top" alt={product.nome} />
          </div>

          <div className="mini-cards">
            <div id="card-und" class="card" aria-hidden="true">
              <img src={product.image} class="card-img-top" alt={product.nome} />
            </div>
            <div id="card-und" class="card" aria-hidden="true">
              <img src={product.image} class="card-img-top" alt={product.nome} />
            </div>
            <div id="card-und" class="card" aria-hidden="true">
              <img src={product.image} class="card-img-top" alt={product.nome} />
            </div>
            <div id="card-und" class="card" aria-hidden="true">
              <img src={product.image} class="card-img-top" alt={product.nome} />
            </div>
          </div>
        </div>
        
        <div className="details-top">
          <div className="detalhes">
            <h1>{product.nome}</h1>
            <h2>{product.qualidades}</h2>
            <h6>Descrição: {product.descricao}</h6>
          </div>
          <div className="details-bottom">
            <p>R$ {product.preco}</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>

      </Layout>

    </>
  );
}

 export default ProductView;