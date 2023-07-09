'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('mo_ta_cts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Cong_nghe_man_hinh: {
                type: Sequelize.STRING
            },
            Do_phan_giai: {
                type: Sequelize.STRING
            },
            He_dieu_hanh: {
                type: Sequelize.STRING
            },
            Chip_xu_ly: {
                type: Sequelize.STRING
            },
            Bo_nho_ROM: {
                type: Sequelize.STRING
            },
            RAM: {
                type: Sequelize.STRING
            },
            Dung_luong_PIN: {
                type: Sequelize.STRING
            },
            Hinh_anh: {
                type: Sequelize.TEXT('long')
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
        await queryInterface.dropTable('mo_ta_cts');
    }
};