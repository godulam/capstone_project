$(document).ready(function(){
	 console.log(qtimeval);
	 console.log(qhost);
	 google.charts.load('current', {'packages':['gauge']});
	 google.charts.setOnLoadCallback(wrapper);
    function wrapper() {
      $.ajax({
	  	 url: "currentdata.php",
	 //?qtimeval='" + qtimeval + "'&qtimeunit='" + qtimeunit + "'&qhost='" + qhost + "'&cpu='" + cpu + "'&mem='" + mem + "'&disk='" + disk + "'",
		 method: "GET",
		 success: function(cdata) {
			  console.log(cdata);
	//! replace all instances of ldata with cdata before moving to production!		  
	/*		  var cpus = 0.678;
		  	  var memu = 887766;
		  	  var memt = 8877661;
			  var disku = 0.333;
			  var diskf = 0.666;*/

			  cpus+=parseInt(cdata[i]["cpu_load"]);
			  memu+=parseInt(cdata[i]["mem_used"]);
			  memt+=parseInt(cdata[i]["mem_total"]);
			  disku+=parseInt(cdata[i]["disk_used"]);
			  diskf+=parseInt(cdata[i]["disk_free"]) ;
						
		 	  console.log(cpus);
			  console.log(disku[0]);
 
	        var datag = google.visualization.arrayToDataTable([
          	  ['Counter', 'Value'],
          	  ['CPU', cpus],
          	  ['Disk', disku],
          	  ['Memory',parseInt((memu/memt)*100)]
 	        ]);	
				console.log(datag);
	         var options = {
   	        width: 400, height: 120,
      	     redFrom: 75, redTo: 100,
      	     yellowFrom:50, yellowTo: 75,
      	     minorTicks: 5,
      	   };
					
						var chart = new google.visualization.Gauge(document.getElementById('gauge'));
						chart.draw(datag, options);
/* Funny feature that falsifies data:
        setInterval(function() {
          datag.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(datag, options);
        }, 13000);
        setInterval(function() {
          datag.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(datag, options);
        }, 5000);
        setInterval(function() {
          datag.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(datag, options);
        }, 26000);  */
      
       	
},		   			
      error: function(cdata) {
			console.log(cdata);
		},    
		});	
};	
	});