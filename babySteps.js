var tot = 0;
for(var i=2; i<process.argv.length;i++){
	tot += Number(process.argv[i]);
}
console.log(tot);
