/*
//===================//
	#	Script By: @srart24
//===================//

{
	Instagram: "https://instagram.com/srart24",
	Github: "https://github.com/srart24"
}
*/

const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const chalk = require("chalk")

const app = express();
const port = 3000;
app.set("json spaces", 2);

if (!process.argv.includes('--otp') && !process.argv.includes('--qr')) {
  console.log('Gunakan "node index.js --otp" atau "node index.js --qr" untuk menjalankannya.');
  process.exit(1);
}

function start() {
  let args = [path.join(__dirname, "main.js"), ...process.argv.slice(2)];
  let p = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  })
    .on("message", (data) => {
      if (data == "reset") {
        console.log("Restarting Bot...");
        p.kill();
        start();
        delete p;
      }
    })
    .on("exit", (code) => {
      console.error("Exited with code:", code);
      if (code == "." || code == 1 || code == 0) start();
    });
}

console.log(chalk.cyan(`\n< ================================================== >\n`))
console.log(chalk.yellow("	Bot Whatsapp By: @srart24	"))
console.log(chalk.cyan(`\n< ================================================== >\n`))
			
start();


  app.get("/", (req, res) => {
    res.status(200).json({
      code: 200,
      creator: `@srart24`,
      status: "Bot Aktif",
      message: "Bot By; @srart24",
    });
  });


  app.listen(port, () => {
  });
