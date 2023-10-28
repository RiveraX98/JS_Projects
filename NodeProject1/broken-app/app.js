const express = require("express");
const axios = require("axios");
const app = express();
const ExpressError = require("./expressError");

app.use(express.json());

app.post("/", function (req, res, next) {
  try {
    if (!req.body.developers) {
      throw new ExpressError("Developer username required", 404);
    }

    let promises = req.body.developers.map(async (d) => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    Promise.all(promises).then((promises) => {
      let out = promises.map((r) => ({ name: r.data.name, bio: r.data.bio }));
      return res.json(out);
    });
  } catch (e) {
    return next(e);
  }
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let msg = error.msg;
  return res.status(status).json({ error: { status, msg } });
});

app.listen(3500, () => {
  console.log("server running on port 3500");
});
