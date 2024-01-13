const mongoClient = require("mongodb").mongoClient;
const state = {
  db: null,
};

//to access connection.js globally
module.export.connect = function (done) {
  const url = "mongodb://localhost:27017";
  const dbname = "shoppping";

  mongoClient.connect(url, (err, data) => {
    if (err) return done(err)

    state.db = data.db(dbname);
  });

  done();
};

module.export.get = function () {
  return state.db;
};
