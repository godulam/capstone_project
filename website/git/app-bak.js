$(document).ready(function(){
	$.ajax({
		url: "http://localhost/capstone/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var prod_name = [];
			var price = [];

			for(var i in data) {
				prod_name.push("Product: " + data[i].prod_name);
				price.push(data[i].price);
			}

			var chartdata = {
				labels: prod_name,
				datasets: [
					{
						label: 'Price',
						backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
						borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
						hoverBackgroundColor:  [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
						hoverBorderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
						borderWidth: 1,
						data: price
					}
				]
			};

			var ctx = $("#graph1");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
    			options: {
        			scales: {
            			yAxes: [{
                			ticks: {
                    			beginAtZero:true
                }
            }]
        }
    }
			});
		},
		error: function(data) {
			console.log(data);
		},
	});
	$.ajax({
		url: "http://localhost/capstone/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var prod_name = [];
			var price = [];

			for(var i in data) {
				prod_name.push("Product: " + data[i].prod_name);
				price.push(data[i].price);
			}

			var chartdata = {
				labels: prod_name,
				datasets: [
					{
						label: 'Price',
						backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
						borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
						hoverBackgroundColor:  [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)'
            ],
						hoverBorderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
						borderWidth: 1,
						data: price
					}
				]
			};

			var ctx = $("#graph2");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
    			options: {
        			scales: {
            			yAxes: [{
                			ticks: {
                    			beginAtZero:true
                }
            }]
        }
    }
			});
		},
		error: function(data) {
			console.log(data);
		},
	});
});

