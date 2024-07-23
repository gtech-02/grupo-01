import lista from './ListProductView'
import produto from '../../components/Cadrs/Cardlist'


function AppView(produto) {

    return (
      <>
      <div>
        <h1>PRODUTO</h1>
        {produto.id}
      </div>
        <div>
        {lista.filter(id => {
            {id.descricao}
        })}
        </div>
      </>
    )
  }
  
  export default AppView;