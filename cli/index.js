#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const fs = require("fs");
const util = require("util");
const path = require("path");

const build = require("./build");

yargs(hideBin(process.argv)).command("build", "build the styles", (argv) => {
  const styles = build();
  
  fs.writeFile(
    "./styles.json",
    JSON.stringify(styles, null, "\t"),
    (err) => {
      if (err !== null) {
        console.log("ERR: ", err);
      }

      console.log("Done!");
    }
  );
}).argv;
