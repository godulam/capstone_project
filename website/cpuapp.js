$(document).ready(function(){
	 console.log(qtimeval);
	 console.log(qhost);
    $.ajax({
		url: "data.php?qtimeval='" + qtimeval + "'&qtimeunit='" + qtimeunit  + "'&qhost='" + qhost + "'",
		method: "GET",
		success: function(ddata) {
			console.log(ddata);
			var loads = [];
			var times = [];

			for(var i in ddata) {
				loads.push(ddata[i]["cpu_load"]);
				times.push(ddata[i]["time"]);
			}
			console.log(ddata[0]["time"]);
			console.log(times);
//replaced with new stuff 			
//			var ctx=$("#cpugraph"); 
/*			
			var LineChartData = {
				labels: times,
				datasets: [
					{
						label: "Data",
            borderColor: "#80b6f4",
            pointBorderColor: "#80b6f4",
            pointBackgroundColor: "#80b6f4",
            pointHoverBackgroundColor: "#80b6f4",
            pointHoverBorderColor: "#80b6f4",
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
            data: loads
					}
				]
			};
 
				     var myLine = new Chart(ctx,{
				type: 'line',
				data: LineChartData, 
				     
				     
			   			});
			   			//old stuff ends here*/
			   			
			 	var ctx = document.getElementById('cpugraph').getContext("2d")
			 	var gradientStroke = ctx.createLinearGradient(0, 200, 0, 80);
				gradientStroke.addColorStop(0, "#80b6f4");
				gradientStroke.addColorStop(1, "#f49080");
				var myChart = new Chart(ctx, {
   		  	   type: 'line',
   			   data: {
			      labels: times,
			      datasets: [{
         			   label: "CPU load",
							borderColor:               gradientStroke,
							pointBorderColor:          gradientStroke,
							pointBackgroundColor:      gradientStroke,
							pointHoverBackgroundColor: gradientStroke,
							pointHoverBorderColor:     gradientStroke,
            			pointHoverRadius: 10,
            			pointHoverBorderWidth: 1,
            			pointRadius: 3,
            			fill: false,
            			borderWidth: 4,
            			data: loads
        }]
    },
    options: {
        legend: {
            position: "bottom"
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(255,99,132,1)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }
}],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
},
                ticks: {
                    padding: 20,
                    fontColor: "rgba(255,255,255,0.5)",
                    fontStyle: "bold"
                }
            }]
        }
    }
});
			   			},
      error: function(ddata) {
			console.log(ddata);
		},    
		});	
	});
