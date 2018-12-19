// 1. Melakukan Looping Menggunakan While
var index = 0
console.log("LOOPING PERTAMA");
while(index < 20)
{
	index+=2
	console.log(index + " - I love coding")
}

console.log("LOOPING PERTAMA");
while(index > 0)
{
	console.log(index + " - I will become fullstack developer")
	index-=2
}
console.log();
//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for(let i = 0; i < 20; i++)
{
	console.log((i+1) +" - I love coding");
}
console.log("LOOPING KEDUA")
for(let j = 20; j > 0; j--)
{
	console.log(j +" - I will become fullstack developer");
}

//3. Angka Ganjil dan Genap
for(let i = 1; i <= 100; i++)
{
	if(i % 2 === 0)
	{
		console.log("GENAP");
	}
	else
	{
		console.log("GANJIL");
	}
}

for(let j = 1; j <= 100; j+=2)
{
	if(j % 3 === 0)
	{
		console.log("3 KELIPATAN "+j);
	}
}

for(let k = 1; k <= 100; k+=5)
{
	if(k % 6 === 0)
	{
		console.log("6 KELIPATAN "+k);
	}
}

for(let l = 1; l <= 100; l+=9)
{
	if(l % 10 === 0)
	{
		console.log("10 KELIPATAN "+l);
	}
}