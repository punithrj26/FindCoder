require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    LOCAL_MONGODB_URL: process.env.LOCAL_MONGODB_URL,
    CLOUD_MONGODB_URL: process.env.CLOUD_MONGODB_URL,
    NODE_ENV: process.env.NODE_ENV,
};