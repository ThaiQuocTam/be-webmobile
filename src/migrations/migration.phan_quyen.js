'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('phan_quyens', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ten_quyen: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
        console.log(``);

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('phan_quyens');
    }
};