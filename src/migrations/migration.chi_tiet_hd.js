'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('chi_tiet_hds', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ten_san_pham: {
                type: Sequelize.STRING
            },
            Gia_san_pham: {
                type: Sequelize.INTEGER
            },
            So_luong: {
                type: Sequelize.INTEGER
            },
            Id_HD: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('chi_tiet_hds');
    }
};