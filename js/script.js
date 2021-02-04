	Data = new Date();
	Year = Data.getFullYear();
	Month = Data.getMonth();
	Day = Data.getDate();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();
	var praz1=8;
	var praz2=14;
	
	
	function text_out(){
		var p;
		p = document.getElementById('text_change');
		p.innerHTML =Day;
		
		if (Day==praz1)
		{
			document.getElementById("text_change").style.color = "pink";
			
		}
		else 
		{
			document.getElementById("text_change").style.color = "red";
		}
		
		if (Day==praz2)
		{
			document.getElementById("text_change").style.color = "pink";
			
		}
		else 
		{
			document.getElementById("text_change").style.color = "red";
		}
		
		
	}
	
	function start(){
		if (Day==praz1){
			window.open("./1/1.html");
		}
				if (Day==praz2){
			window.open("./2/1.html");
		}
	}
