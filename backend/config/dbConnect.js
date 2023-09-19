const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log(
      connect.connection.host,
      connect.connection.name,
      " - DB CONNECTED"
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
