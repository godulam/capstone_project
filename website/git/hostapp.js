$(document).ready(function tableone(){
	console.log(qhost);
	$.ajax({
		url: "hostdata.php",
		method: "GET",
		success: function(hdata){
			console.log(hdata);
			var hostnameh = [];

			for(var i in hdata) {
				hostnameh.push(hdata[i]["hostname"]);
			}
			console.log(hostnameh.length);
			
			var t1;
	 		f1=document.getElementById('hostselect') 
			var toform = '';
			for (var i=0;i<hostnameh.length;i++) {
				toform += "<option value=\"" + hostnameh[i] + "\"> Server IP: " + hostnameh[i] + "</option>" ;
				};			 
			f1.innerHTML=toform;
			alert(toform);		
			}
	
});
});
