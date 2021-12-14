const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    // define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define title column
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define content column
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // define user id column
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    // table configuration options
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
