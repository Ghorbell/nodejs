let Sum = 0;

for (var i = 2; process.argv.length; i++) {
  Sum += Number(process.argv[i]);
}
console.log(Sum);
