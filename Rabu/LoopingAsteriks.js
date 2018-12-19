/*1. Menyusun Barisan Bintang*/
var rows1 = 5;
for(let i = 0; i < rows1; i++)
{
	console.log("*");
}

/*2. Menyusun Barisan Bintang Dengan Nested Looping*/
var rows2 = 5;
for(let j = 0; j < rows2; j++)
{	
	var result = ""
	for(let k = 0; k < rows2; k++)
	{
		result += "*";
	}
	console.log(result);
}

/*3. Menyusun Barisan Tangga Bintang Dengan Nested Looping*/

var rows3 = 5;
for(let l = 0; l < rows3; l++)
{
	var result = ""
	for(let m = 0; m <= l; m++)
	{
		result += "*"
	}
	console.log(result);
}