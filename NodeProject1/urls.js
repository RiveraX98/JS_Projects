const fs = require("fs");
const axios = require("axios");
const process = require("process");

let path = process.argv[2];
read(path);

function read(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    getUrl(data.split(" "));
  });
}

async function getUrl(arr) {
  try {
    arr.forEach(async function (val) {
      let res = await axios.get(val);
      if (val.includes("https")) {
        let path = val.replace("https://", "");
        write(path, res.data);
      } else {
        let path = val.replace("http://", "");
        write(path, res.data);
      }
    });
  } catch (err) {
    console.error(`${err}`);
    process.exit(1);
  }
}

function write(path, data) {
  consol;
  fs.writeFile(path, data, { encoding: "utf-8", flag: "w" }, (err) => {
    if (err) {
      console.error(`Error: ${err}`);
      process.exit(1);
    }
    console.log("ok");
  });
}
