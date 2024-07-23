

function Filtros() {
    return (
    <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.postimg.cc/MKQR36H8/1.jpg" className=" w-100 h-60" alt="..." id="kayimg" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.postimg.cc/kgNS9TW1/3.jpg" className=" w-100 h-60" alt="..." id="kayimg" />
                    </div>
                    <div className="carousel-item" >
                        <img src="https://i.postimg.cc/T3QSxGHX/huge.jpg" className=" w-100 h-60" alt="..." id="kayimg" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> <div>
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect"><h2>Ordenar por:</h2></label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Preço:</option>
                                <option value="1">Maior preço</option>
                                <option value="2">Menor preço</option>
                                <option value="3">Todos</option>
                            </select>
                        </div>
                    </div>
                </form >
            </div>
            <div className="container">
                <div className="filters">
                    <h2>Filtrar por:</h2>
                    <select class="custom-select">
                        <option selected>Escolha sua opçao</option>
                        <option value="1">Categorias</option>
                        <option value="2">Preço</option>
                        <option value="3">Marcas</option>
                        <option value="3">Tamanhos</option>
                        <option value="3">Todos</option>

                    </select>


                    <div id="category" className="filter-group">
                        <h3>Gênero:</h3>
                        <input type="checkbox" name="category" value="Produtos" /> <label>Feminino</label>
                        <input type="checkbox" name="category" value="Produtos" /> <label>Masculino</label>
                        <input type="checkbox" name="category" value="Produtos" /> <label>Unissex</label>
                    </div>
                    <div className="filter-group">
                        <h3>Preço:</h3>
                        <label for="price-min">Minimo:</label>
                        <input type="number" id="price-min" name="price-min" min="0" value="0" />
                        <label for="price-max">Maximo:</label>
                        <input type="number" id="price-max" name="price-max" min="1000" value="1000" />
                    </div>
                    <div class="filter-group">
                        <h3>Marcas:</h3>
                        <label><input type="checkbox" name="brand" value="marca1" /> Nike</label>
                        <label><input type="checkbox" name="brand" value="marca2" /> Adidas</label>
                        <label><input type="checkbox" name="brand" value="marca2" /> Fila</label>
                        <label><input type="checkbox" name="brand" value="marca2" /> Mizuno</label>
                        <label><input type="checkbox" name="brand" value="marca2" /> Olympikus</label>
                    </div>
                    <div class="filter-group">
                        <h3>Tamanhos:</h3>
                        <label><input type="checkbox" name="brand" value="Tamanhos" /> 34 a 36</label>
                        <label><input type="checkbox" name="brand" value="Tamanhos" /> 37 a 40</label>
                        <label><input type="checkbox" name="brand" value="Tamanhos" /> 41 a 44</label>
                        <button id="apply-filters"><h4>Filtros</h4></button>
                    </div>
                </div>
                </div>
            </>
            );
};

            export default Filtros;