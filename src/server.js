import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB"
import cors from 'cors'
require("dotenv").config();

let app = express();
app.use(cors({ credentials: true, origin: ['https://thaiquoctam-webmoible-user.vercel.app', 'https://thaiquoctam-webmobile-admin.vercel.app', 'http://localhost:3002'] }));

//config app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50bm', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 100000, limit: "500mb" }))

viewEngine(app)
initWebRoutes(app)
connectDB()

let port = process.env.PORT || 8080;

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is runing on the port : " + port)
})
