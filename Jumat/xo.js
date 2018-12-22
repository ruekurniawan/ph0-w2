function xo(str) 
{
	var resultX = 0, resultO = 0;
	for(let i = 0; i < str.length; i++)
	{
		if(str[i]=== "x")
		{
			resultX++;
		}
		else
		{
			resultO++;
		}
	} 
	if(resultX === resultO)
	{
		return true;
	}
	else 
	{
		return false;
	}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true