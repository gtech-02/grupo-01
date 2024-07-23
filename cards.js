export default function cards(props){
    return`
    <div class="col">
    <div class="card h-100 w-100">
      <img src="${props.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${props.nome}</h5>
        <h6>${props.qualidades}</h6>
        <span>${props.preço}</span>
        <div class="d-grid gap-2 col-15 mx-auto">
          <br>
          <button class="btn btn-primary" type="button" style="color: #ffffff;border-color: black;background-color: #C92071; ">comprar</button>
        </div>
      </div>
    </div>
  </div>
  `;
}