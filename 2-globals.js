/**
 ** Global  -  No Window

 ** __dirname : Path to the current directory
 ** __filename : File name
 ** require : Function to use modules (CommonJS)
 ** module : Info about the current module (file)
 ** process : Info about the env where the program being executed
 */

console.log(__dirname);
console.log(__filename);
console.log(module);

setInterval(() => {
  console.log("hello Omar from interval");
}, 1000);
