$(document).ready(function tableone(){
	console.log(qlabel);
	console.log(qvalue);
	$.ajax({
		url: "http://localhost/capstone/new/newdata.php?qlabel='" + qlabel + "'&qvalue='" + qvalue + "'",
		method: "GET",
		success: function(data){
			console.log(data);
			var label1 = [];
			var value1 = [];

			for(var i in data) {
				label1.push("Product: " + data[i][qlabel]);
				value1.push(data[i][qvalue]);
			}
			console.log(label1.length);
			
			var t1;
	 		t1=document.getElementById('table1') 
			var totable = '<table><tr>';
			for (var i=0;i<label1.length;i++) {
				totable += "<th>"+ label1[i]+"</th>";
				};
			totable += "</tr><tr>";
			for (i=0;i<value1.length;i++) {	
				totable += "<td>" + value1[i] + "</td>";
				};
			totable += "</tr></table>";
			t1.innerHTML=totable;
			/*alert(totable);*/		
			}
	
});
});
