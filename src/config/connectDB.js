const { Sequelize, Model } = require("sequelize")

const sequelize = new Sequelize(
    process.env.DB_DATABASE_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres"
    })

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Ket noi database thanh cong");
    } catch (e) {
        console.log("Loi ket noi database that bai : " + e);
    }
}
module.exports = connectDB
