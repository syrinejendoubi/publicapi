const app = require("express")();
const PORT = 5000;
app.get("/kong/auth/v", (req, res) => {
  res.send(" Im public api");
});
app.listen(PORT, () =>
  console.log(`server listening on http://localhost:${PORT}`)
);
