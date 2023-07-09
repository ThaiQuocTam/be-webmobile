'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('nguoi_dungs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ho_ten: {
                type: Sequelize.STRING
            },
            Email: {
                type: Sequelize.STRING
            },
            Dien_thoai: {
                type: Sequelize.STRING
            },
            Mat_khau: {
                type: Sequelize.STRING
            },
            Gioi_tinh: {
                type: Sequelize.BOOLEAN
            },
            Id_phan_quyen: {
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
        await queryInterface.dropTable('nguoi_dungs');
    }
};