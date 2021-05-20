// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    //* Validates that the value is a decimal.
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    //* Validates that the value is numeric.
  },

  category_i: {
    type: DataTypes.INTEGER,
    references: {
      model: 'category',
      key: 'id',
      unique: false,
    }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_id',
  }
);

module.exports = Product;
