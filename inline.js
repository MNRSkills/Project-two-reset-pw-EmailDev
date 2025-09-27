// inline.js
const fs = require("fs");
const juice = require("juice");
const path = require("path");
const dir = "dist";
fs.readdirSync(dir).forEach(f=>{
  if(f.endsWith(".html")){
    const file = path.join(dir,f);
    const inlined = juice(fs.readFileSync(file,"utf8"));
    fs.writeFileSync(file,inlined);
  }
});
