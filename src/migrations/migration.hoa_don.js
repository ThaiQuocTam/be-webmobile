'use strict';

const { Sequelize } = require("../models");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        console.log(`1`);
        await queryInterface.createTable('hoa_dons', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Ho_ten: {
                type: Sequelize.STRING
            },
            So_dien_thoai: {
                type: Sequelize.STRING
            },
            Email: {
                type: Sequelize.STRING
            },
            Dia_chi_nhan_hang: {
                type: Sequelize.STRING
            },
            Ghi_chu: {
                type: Sequelize.STRING
            },
            Tong_tien: {
                type: Sequelize.INTEGER
            },
            Trang_thai: {
                type: Sequelize.INTEGER
            },
            Id_nguoi_dung: {
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
        await queryInterface.dropTable('hoa_dons');
    }
};