const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cricketers = sequelize.define('cricketer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthplace: {
        type: Sequelize.STRING,
        allowNull: false
    },
    career: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    numberOfMatches: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fifties: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    centuries: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    wickets: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    avarage: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Cricketers;