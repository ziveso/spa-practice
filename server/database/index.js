const fs = require("fs");
const db = __dirname + "/db.json";

const write = async (key, value) => {
  const _db = await fs.readFileSync(db, "utf-8");
  const jsonDB = JSON.parse(_db);
  jsonDB[key] = value;
  await fs.writeFileSync(db, JSON.stringify(jsonDB));
  return jsonDB;
};

const read = async () => {
  //   console.log(db);
  const dbs = await fs.readFileSync(db, "utf-8");
  return JSON.parse(dbs);
};

module.exports = { write, read };
