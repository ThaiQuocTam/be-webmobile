'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('san_phams', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ten_san_pham: {
                type: Sequelize.STRING
            },
            Hinh_anh: {
                type: Sequelize.TEXT('long')
            },
            Gia_san_pham: {
                type: Sequelize.INTEGER
            },
            So_luong_SP: {
                type: Sequelize.INTEGER
            },
            Thong_tin_bao_hanh: {
                type: Sequelize.TEXT
            },
            Ghi_chu: {
                type: Sequelize.TEXT
            },
            Id_loai_SP: {
                type: Sequelize.INTEGER
            },
            Id_nhom_SP: {
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
        await queryInterface.dropTable('san_phams');
    }
};