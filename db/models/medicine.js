'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({CartItem}) {
      this.hasMany(CartItem, {
        foreignKey: 'med_id'
      })
    }
  }
  Medicine.init({
    img: DataTypes.STRING,
    name: DataTypes.STRING,
    startprice: DataTypes.INTEGER,
    saleprice: DataTypes.INTEGER,
    eq: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Medicine',
  });
  return Medicine;
};