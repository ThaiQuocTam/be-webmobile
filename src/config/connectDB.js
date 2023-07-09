const { Sequelize, Model } = require("sequelize")

const sequelize = new Sequelize("postgres", "postgres", "a@Anhtam01234253554", {
    host: process.env.DB_HOST,
    port: "5432",
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
