import { Layout } from "../../Layout";
import Listagem from "../../components/Cadrs/Cardlist";
import Filtros from "../../components/filtros/filtros";
export default function Produtoslistingpage(){
    return(
    <>
    <Layout>
        <Filtros/>
        <Listagem/>
    </Layout>
    </>
    )
}