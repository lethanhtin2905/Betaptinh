function whichChecked()
{
	const a = document.getElementsByName("gender");
	
	for(let i = 0; i < a.length; i++)
	{
		if(a[i].checked == true)
			return i;
	}
	return -1;
}

function Handle(){
	if(checkValueInput() == 1)
	{
		const operator = whichChecked();
		
		const a = parseFloat(document.getElementById("Number1").value);
		const b = parseFloat(document.getElementById("Number2").value);
			
		var res = 0;
			
		if(operator == 0)
		{
			res = a + b;
		} else if(operator == 1)
		{
			res = a - b;
		} else if(operator == 2)
		{
			res = a * b;
		} else if(operator == 3)
		{
			res = a / b;
		}
		
		document.getElementById("Result").value = res.toFixed(16);
		document.getElementById("notification").innerHTML = "Thành công";
	}
}

function checkValueInput()
{
	const a = document.getElementById("Number1").value;
	const b = document.getElementById("Number2").value;
	
	if(a == "")
	{
		document.getElementById("notification").innerHTML = "Bạn chưa nhập số thứ nhất";
		return 0;
	}
	
	if(isNaN(a) == true)
	{
		document.getElementById("notification").innerHTML = "Bạn phải nhập số thứ nhất";
		return 0;
	}
	
	document.getElementById("Number1").style.borderColor = "no";
	
	if(b.length == 0)
	{
		document.getElementById("notification").innerHTML = "Bạn chưa nhập số thứ hai";
		return 0;
	}
	
	if(isNaN(b) == true)
	{
		document.getElementById("notification").innerHTML = "Bạn phải nhập số thứ hai";
		return 0;
	}
	
	
	if(whichChecked() == -1)
	{
		document.getElementById("notification").innerHTML = "Bạn chưa chọn phép tính";
		return 0;
	}
	
	
	return 1;
}