import cards from "./cards.js";

let card = document.getElementById("card");

let props = [
    {
      nome:"Tênis Nike Flex Experience Run 12 Feminino",
      image:"https://imgcentauro-a.akamaihd.net/360x360/M140YG03.jpg",
      qualidades:"Cinza",
      preço:"R$279,99"  
    },
    
    {
        nome:"Tênis Nike Revolution 7 - Feminino",
        image:" https://imgcentauro-a.akamaihd.net/360x360/985825KL.jpg",
        qualidades:"Rosa claro/branco",
        preço:"R$ 299,99"  
      },
    {
        nome:"Tênis Nike SB Force 58 PRM Masculino",
        image:"https://imgcentauro-a.akamaihd.net/768x768/97989912.jpg",
        qualidades:"Bege",
        preço:"R$ 569,99"  
      },
    {
        nome:"Tênis Nike Revolution 7 - Masculino",
        image:"https://imgcentauro-a.akamaihd.net/360x360/98582434.jpg ",
        qualidades:"Verde",
        preço:"R$ 270,74"  
      },
    {
        nome:"Tênis Nike Revolution 7 - Feminino",
        image:"https://imgcentauro-a.akamaihd.net/360x360/9858250P.jpg",
        qualidades:"Preto/rosa cla",
        preço:"R$ 299,99"  
      },
    {
        nome:"Tênis Nike Air Winflo 10 - Masculino",
        image:"https://imgcentauro-a.akamaihd.net/360x360/98277301A1.jpg",
        qualidades:"Branco",
        preço:"R$ 429,99"  
      },
    {
        nome:"Tênis Nike Revolution 7 Juvenil",
        image:"https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-juvenil/18/JD8-6365-018/JD8-6365-018_zoom1.jpg?ts=1708335838?ims=1088x",
        qualidades:"Rosa",
        preço:"R$ 303,99"  
      },
    {
        nome:"Tênis Nike In-Season TR 13 Feminino",
        image:"https://static.netshoes.com.br/produtos/tenis-nike-in-season-tr-13-feminino/14/JD8-5710-014/JD8-5710-014_zoom1.jpg?ts=1698436182?ims=400x",
        qualidades:"Branco",
        preço:"R$ 360,99"  
      },
];

for(let i = 0; i < props.length ; i++){
    card.innerHTML += cards(props[i]);
}