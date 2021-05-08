// const express = require("express");
// const app = express();

const fs = require("fs");
const countries = require("./countries");

let data = "Code \t Dial Code \t País \n";

countries.forEach((pais) => {
  let dial_code = `${pais.dial_code} \t\t`;
  if (pais.dial_code.length > 5) {
    dial_code = `${pais.dial_code} \t`;
  }

  data += `${pais.code} \t ${dial_code} ${pais.name_es} \n`;
});

// Write data in 'Output.txt' .
fs.writeFile("paises.txt", data, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});

// app.listen(1000, () => console.log("Server in 1000"));
