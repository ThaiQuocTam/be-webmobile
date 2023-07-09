'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('reviews', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ten_nguoi_dung: {
                type: Sequelize.STRING
            },
            Noi_dung: {
                type: Sequelize.TEXT
            },
            Loai: {
                type: Sequelize.INTEGER
            },
            Id_nguoi_dung: {
                type: Sequelize.INTEGER
            },
            Id_phan_quyen: {
                type: Sequelize.INTEGER
            },
            Id_review_user: {
                type: Sequelize.INTEGER
            },
            checked: {
                type: Sequelize.BOOLEAN
            },
            Id_san_pham: {
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
        await queryInterface.dropTable('reviews');
    }
};