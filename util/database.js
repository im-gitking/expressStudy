const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGODB_STRING)
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => console.error(err));
};

module.exports = mongoConnect;
