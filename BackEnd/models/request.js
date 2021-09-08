const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('candidatesJobs', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  candidatesId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'candidates',
      key: 'id',
    },
  },
  jobsId: {
    type: Sequelize.INTEGER,
    references: {
      model: 'jobs',
      key: 'id',
    },
  },
  cv: DataTypes.TEXT,
  experience: DataTypes.TEXT,
  interest: DataTypes.TEXT,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});
