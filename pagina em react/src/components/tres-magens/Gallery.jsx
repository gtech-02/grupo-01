import FuncGallery from "./FuncGallery"

export default function Gallery() {
  let complementos = [
    {
      image: "src/components/tres-magens/imagens-da-g/g-img-2.jpg",
      id: "b1"
    },

    {
      image: "src/components/tres-magens/imagens-da-g/g-img-1.jpg",
      id: "b2"
    },

    {
      image: "src/components/tres-magens/imagens-da-g/g-img-3.jpg",
      id: "b3"
    }];

  let Galeria = [];
  for (let i = 0; i < complementos.length; i++) {
    Galeria.push(

      <FuncGallery complementos={complementos[i]} />
    );
  }

  return <section className="element"> {Galeria} </section>
}




