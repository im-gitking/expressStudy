const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db; // _db -> here '_' means it's an internal variable, can chose any other name and without '_' too

const mongoConnect = (callback) => {
  // eastablishing connection with Cluster
  MongoClient.connect(process.env.MONGODB_STRING)
    .then((client) => {
      console.log("Connected");
      // creating a Database in Cluster names 'shop'
      _db = client.db("shop");
      callback();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    // Databse object for 'shop'
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
