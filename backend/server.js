const app = require("./app");
const connectDatabase = require("./Database/db");

connectDatabase();

app.get("/", (req, res, next) => {
  res.send("<h1>welcome  to college erp system</h1>;");
});

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server is working at ${process.env.PORT}`
  );
});
