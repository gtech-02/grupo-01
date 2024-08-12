const ProductAndCategory = require('../models/ProductAndCategory')

const CategoryController = async (req, res) => {
    try {
  // Obtenha e defina o limite de itens
  const limitParam = parseInt(req.query.limit, 10);
  const limit = limitParam === -1 ? undefined : (isNaN(limitParam) ? 12 : limitParam);

  // Obtenha e defina a página
  const page = parseInt(req.query.page, 10) || 1;

  // Obtenha e defina os campos a serem retornados
  const fields = req.query.fields ? req.query.fields.split(',') : ['id', 'name', 'slug', 'use_in_menu'];

  // Obtenha e defina o filtro para o menu
  const useInMenu = req.query.use_in_menu === 'true';

  // Montar as opções de consulta
  const queryOptions = {
      attributes: fields, // Definir quais campos retornar
      where: useInMenu ? { use_in_menu: true } : {}, // Filtrar pelo menu se necessário
      limit: limit,
  };

  // Buscar itens com as opções definidas usando ProductAndCategory
  const items = await ProductAndCategory.findAll(queryOptions);

  res.json(items);
} catch (error) {
  console.error('Erro ao buscar itens:', error);
  res.status(400).send('Erro ao buscar itens.');
}
};


module.exports = CategoryController;