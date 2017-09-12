$(document).ready(function(){
    $.ajax({
		url: "data.php?qtimeval='" + qtimeval + "'&qtimeunit='" + qtimeunit  + "'&qhost='" + qhost + "'",
		method: "GET",
		success: function(ddata) {
			console.log(ddata);
			var loads = [];
			var times = [];

			for(var i in ddata) {
				loads.push(ddata[i]["cpu_load"]);
				times.push(ddata[i]["timestamp"]);
			}
			console.log(times);
			console.log(loads[0]);
			
			sum = 0;
			for( var i = 0; i < loads.length; i++ ){
    		sum += parseInt( loads[i], 10 ); //don't forget to add the base
			};
			var avgload = sum/loads.length;
			var free = 100 - parseInt(avgload);
			console.log(free);
			console.log(avgload);
			var valueset = [avgload, free];
			console.log(valueset);
			
			var ctx=$("#cpugraphd");
			var DoughNutChartData = {
				labels: times,
				datasets: [
					{
						label: 'CPU load',
						backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
						borderColor: [
                'rgba(255,99,132,1)',
                'rgba(75, 192, 192, 1)'
            ],
						hoverBackgroundColor:  [
                'rgba(255, 99, 132, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
						hoverBorderColor: [
                'rgba(255,99,132,1)',
                'rgba(75, 192, 192, 1)'
            ],
						borderWidth: 1,
						data: loads
					}
				]
			};
						var ctx = $("#cpugraphd");
				     var myDoughnut = new Chart(ctx,{
				type: 'doughnut',
				data: DoughNutChartData, 
				     
				     
				/*     document.getElementById("cpugraphd").getContext("2d")).Doughnut(DoughNutChartData);*/

			   			});
			   			},
      error: function(ddata) {
			console.log(ddata);
		},    
		});	
	});
