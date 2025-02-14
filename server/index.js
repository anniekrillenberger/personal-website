const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use((req, res, next) => {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(301, "https://" + req.headers.host + req.url);
    }
    next();
  });
  

app.listen(8080, () => {
    console.log('server listening on port 8080.');
});