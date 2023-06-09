import { DataTypes } from 'sequelize'
import { sequelize } from '../../database/sequelize'

export const Product = sequelize.define('product', {
  image: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  },
  published: {
    type: DataTypes.BOOLEAN
  }
})