require("dotenv").config();
const app = require("express")();
require("./utils/setGlobalHeaders.function.js")(app);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use((req, res, next) => {
  if (req.headers.authorization === "hello") return next();
  res.status(403);
  res.send("missing some headers aren't we?");
});

app.use("/api", require("./routes/index.js"));
app.use((req, res) => {
  res.status(404);
  res.send("...mmm endpoint connot be found, try another one");
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));
