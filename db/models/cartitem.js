

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Medicine}) {
      this.belongsTo(User, {
        foreignKey: 'user_id'
      });
      this.belongsTo(Medicine, {
        foreignKey: 'med_id'
      });
    }
  }
  CartItem.init({
    user_id: DataTypes.INTEGER,
    med_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartItem',
  });
  return CartItem;
};