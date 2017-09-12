$(document).ready(function alerttable(){
/*	console.log(qlabel);
	console.log(qvalue);*/
	$.ajax({
		url: "newdataA.php",
		method: "GET",
		success: function(dataA){
			console.log(dataA);
			var hostnames = [];
			var timestamps = [];
			var msgs = [];

			for(var i in dataA) {
				hostnames.push("Server: " + dataA[i]["hostname"]);
				timestamps.push(dataA[i]["timestamp"]);
				msgs.push(dataA[i]["msg"]);
			}
			console.log(hostnames.length);
			
			var a1;
	 		a1=document.getElementById('alerts') 
			var totable = "<table><tr><th>Timestamp</th><th>Hostname</th><th>Message</th></tr>";
			for (var i=0;i<msgs.length;i++) {
				totable += "<tr><td>" + timestamps[i] + "</td><td>" + hostnames[i] + "</td><td>" + msgs[i] + "</td></tr>" ;
				};
			totable += "</table>";
			a1.innerHTML=totable;
			alert(totable);		
			},
		error: function (dataA) {
		console.log(dataA);
	},
});
});
