import { Layout } from "../../Layout";
import Listagem from "../../components/Cadrs/Cardlist";
import Filtros from "../../components/filtros/filtros";
import CardLFeito from "../../components/Cadrs-Destaque/CardLFeito";
export default function Produtoslistingpage(){
    return(
    <>
    <Layout>
        <Filtros/>
        <CardLFeito/>
        <Listagem/>
    </Layout>
    </>
    )
}