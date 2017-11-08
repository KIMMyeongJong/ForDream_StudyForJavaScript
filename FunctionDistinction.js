var output = "";

for(var i = 0; i<10;i++){
	for (var k = 10;k>i;k--) {
		output += " ";
	}
	for(var z = 0; z<i*2-1; z++){
		output += "*";
	}
	output += "\n";
}
alert(output);
