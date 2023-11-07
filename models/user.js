'use strict';

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, 
  {
    classMethods: {
      associate: function (models) {

      }
    },

    timestamps: false,
    paranoid: false,
    underscored: true
  });
  return User;
};