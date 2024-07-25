import './filtros.css'

function Filtros() {
    return (
        <>
            <section className='filtros'>
            
                <div className="container">
                    <div className="filters">
                        <h2>Filtrar por:</h2>
                        <   select class="custom-select">
                            <option selected>Escolha sua opçao</option>
                            <option value="1">Categorias</option>
                            <option value="2">Preço</option>
                            <option value="3">Marcas</option>
                            <option value="3">Tamanhos</option>
                            <option value="3">Todos</option>

                        </select>


                        <div id="category" className="filter-group">
                            <h3>Gênero:</h3>
                            <label><input type="checkbox" name="category" value="Produtos" /> Feminino</label>
                            <label><input type="checkbox" name="category" value="Produtos" /> Masculino</label>
                            <label><input type="checkbox" name="category" value="Produtos" /> Unissex</label>
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
                            <button className='b-f' id="apply-filters"><h4>Filtrar</h4></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Filtros;