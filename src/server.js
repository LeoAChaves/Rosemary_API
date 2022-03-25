import app from "./app.js";

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor aberto na http://localhost:${port}`);
});
