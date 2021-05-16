// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {

// Categories have many Products
through: {
  model: Product,
  unique: false
},
//Figure out what to put here
as: 'planned_trips'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  //Figure out what to put here
  as: 'planned_trips'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  //Figure out what to put here
  as: 'planned_trips'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
