const { DataTypes, Sequelize } = require('sequelize');

const Professional = require('./models/professional');
const Recreuiter = require('./models/recruiter');
const Candidate = require('./models/candidate');
const Job = require('./models/job');
const Request = require('./models/request');

const sequelize = new Sequelize('getThatJob_db', 'admin', 'doyidet297', {
  host: 'mysql-46184-0.cloudclusters.net',
  dialect: 'mysql',
  port: 19896,
});

const models = [Professional, Recreuiter, Candidate, Job,Request];

for (let model of models) {
  model(sequelize);
}

const { professionals, candidates } = sequelize.models;
candidates.belongsTo(professionals);

const { recruiters, jobs } = sequelize.models;
recruiters.hasMany(jobs);
jobs.belongsTo(recruiters);

const {candidatesJobs}= sequelize.models;

candidates.belongsToMany(jobs, { through: candidatesJobs, foreignKey: 'candidatesId' });
jobs.belongsToMany(candidates, { through: candidatesJobs, foreignKey: 'jobsId' });

module.exports = sequelize;
