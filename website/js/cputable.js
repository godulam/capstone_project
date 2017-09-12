$(document).ready(function tableone(){
	console.log(qlabel);
	console.log(qvalue);
	$.ajax({
		url: "data.php?qhost='" + qhost + "'&timeval='" + qtimeval + "'&timeunit='" + qtimeunit + "'",
		method: "GET",
		success: function(ddata){
			console.log(ddata);
			var loads = [];
			var times = [];

			for(var i in ddata) {
				loads.push(ddata[i]["cpu_load"]);
				times.push(ddata[i]["timestamp"]);
			}
			console.log(ddata[0]["timestamp"]);
			console.log(times);
			
			var t1;
	 		t1=document.getElementById('cputable') 
			var totable = '<table><tr>';
			for (var i=0;i<times.length;i++) {
				totable += "<th>"+ times[i]+"</th>";
				};
			totable += "</tr><tr>";
			for (i=0;i<loads.length;i++) {	
				totable += "<td>" + loads[i] + "</td>";
				};
			totable += "</tr></table>";
			t1.innerHTML=totable;
			console.log(totable);		
			}
	
});
});
