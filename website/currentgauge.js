$(document).ready(function(){
	 console.log(qtimeval);
	 console.log(qhost);
	 google.charts.load('current', {'packages':['gauge']});
	 google.charts.setOnLoadCallback(wrapper);
    function wrapper() {
      $.ajax({
	  	 url: "currentdata.php?qtimeval='" + qtimeval + "'&qtimeunit='" + qtimeunit  + "'&qhost='" + qhost + "'",
		 method: "GET",
		 success: function(cdata) {
			  console.log(cdata);
	//! replace all instances of ldata with cdata before moving to production!		  
			  var cpus = [];
		  	  var memu = 0;
		  	  var memt = 0;
			  var disku = 0;
			  var diskf = 0;

			  cpus+=(cdata[0]["cpu_load"]);
			  memu+=(cdata[0]["mem_used"]);
			  memt+=(cdata[0]["mem_total"]);
			  disku+=(cdata[0]["disk_used"]);
			  diskf+=(cdata[0]["disk_free"]) ;
						
		 	  console.log(cpus);
			  console.log(cpus[0]);
 
	        var datag = google.visualization.arrayToDataTable([
          	  ['Counter', 'Value'],
          	  ['CPU', parseInt(cpus)],
          	  ['Disk', parseInt(disku)],
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
