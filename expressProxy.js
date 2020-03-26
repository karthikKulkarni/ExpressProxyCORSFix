const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(
  "/posts", // This will be your end-points
  createProxyMiddleware({
    target: "http://jsonplaceholder.typicode.com", // Base url
    changeOrigin: true
  })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
