const express = require('express');
const { NODE_ENV, PORT } = require("./config");
const { DbConnection } = require('./config/db');
const colors = require("colors");
const { success, info, error } = require("consola");
const morgan = require("morgan");
const { use } = require('express/lib/application');

const AuthRoute = require("./routes/auth");
const app = express();

let StartServer = async () => {
    try {
      //? DATABASE CONNECTION STARTS HERE=======================
        DbConnection();
      //?==============DATABASE CONNECTION ENDS HERE

      //?MIDDLEWARE STARTS HERE================
        app.use(express.json());
        if (NODE_ENV === "development") {
            app.use(morgan("dev"));
        }
      //?==========MIDDLEWARE ENDS HERE
        
        //? LOAD routes start HERE===========================

        app.use("/api/auth", AuthRoute);
        //?=============LOAD route end here
        
        //! ------------------------Listsen Port------------------
        app.listen(PORT, err => {
            if (err) {
                error(`${err}`.red.bold);
            } else {
                success("Server is Successfully running on port number : 5000".green.bold)
            }
        });
    } catch (err) {
        error(`${err}`.red.bold);
    }
};
StartServer();