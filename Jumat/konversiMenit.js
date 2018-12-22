function konversiMenit(menit) 
{
	var angkaDetik = menit % 60;
	var angkaMenit = (menit - angkaDetik) / 60;
	if(angkaDetik < 10)
	{
		return (angkaMenit+":0"+angkaDetik);
	} 
	else if(angkaDetik < 60)
	{
		return (angkaMenit+":"+angkaDetik);
	} 
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00