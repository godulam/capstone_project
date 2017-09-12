<!DOCTYPE HTML>
<html>
<head>
  <title></title>
  <link rel="stylesheet" href="capstone2.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Marcellus+SC|Oswald">
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script> 
  <!--script src="js/jquery.min.js" ></script-->
<?php
if(isset($_POST["qtimeval"])  && isset($_POST["qtimeunit"]) && isset($_POST["qhost"]) ) {
	echo "<script>qtimeval='" . $_POST["qtimeval"] . "'</script>";
	echo "<script>qtimeunit='" . $_POST["qtimeunit"] . "'</script>";	
	echo "<script>qhost='" . $_POST["qhost"] . "'</script>";
}; 
?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
  <!--script type="text/javascript" src="js/Chart.min.js"></script -->
  <script type="text/javascript" src="currentgauge.js"></script>	
  <script type="text/javascript" src="cpuapp.js"></script>	
  <script type="text/javascript" src="cpuappd.js"></script>	  	
  <script type="text/javascript" src="cputable.js"></script>	
  <script type="text/javascript" src="newappA.js"></script>	  
  <script type="text/javascript" src="showtable.js"></script>
  <script type="text/javascript" src="hostapp.js"></script>		  
 
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  
</head>
<body>

<h1 id="home" >Linux Server Monitoring Tool</h1>

<div class="nc"> 
<div class="boxf nav" >
<ul>
<a href="#home"><li>Top</li></a>
<a href="#cpu"><li>CPU</li></a>
<a href="#uptime"> <li>Uptime</li></a>
<a href="#proc"><li>Processes</li></a>
<a href="#memory"><li>Memory</li></a>
<a href="#swap"><li>Swap</li></a>
<a href="#disk"><li>Disk</li></a>
<a href="#end"><li>End</li></a>

</ul>
</div>
</div>
<div class="boxf content ">  

	<div class="main">
	<div class="boxh">	
	<h3>Alerts:</h3>
	<div class="boxha alert" id="alerts" >ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE!<br/>
	ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE!<br/>
	ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE!<br/>
	ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE! ALERTS GO HERE!<br/>	</div>
	</div>
	<div class="boxh" >
		   <h3>Current usage top </h3>
    		<div class="boxha " id="gauge" style="border: 1px solid white; ">
	    		<br/>--------------------------------------------------------------------------------------------------- <br/> <br/> <br/> <br/> <br/>
	    		<br/>--------------------------------------------------------------------------------------------------- <br/>   		
    		</div>
	</div>
	</div>
	<div class="main"  >
	<h3>Display options:</h3>
	<div class="boxhf " >
		<form  method="post" action="index2.php">
		<p>Show data collected over the last</p> <input type="number" name="qtimeval" value="7" min="1" max="30">
		<select name="qtimeunit" >
			<option value="DAY" > day(s)</option><option value="MONTH" > month(s)</option><option value="YEAR" > year(s)</option>		 
		 </select>
		 <p>for server:</p>
      <select name="qhost" id="hostselect" >
          <option value="host1">Hostname 1</option>
          <option value="host2">Hostname 2</option>
		</select>	       
    <input class="mybutton" type="submit" value="SUBMIT" >
		</form>
	</div>
     <hr>
<!---  <div class="main" >
    <h3>Current usage</h3>
    <div class="boxh " id="gauge" ></div>
  </div>-->    
     
	<div class="main" id="cpu">
		<div class="boxf chart"  >
		<div class="boxh" >
		<h3>1. CPU load</h3>			
		<canvas id="cpugraph"  ></canvas>
		</div>
		<div class="boxh" >
		<h3>Mean CPU load</h3>			
		<canvas id="cpugraphd"  ></canvas>
		<button onclick="showtable('tablebox1');" class="mybutton hidebutton" >Show/Hide table</button>
		
		</div> 
	
		<div class=" boxf tablebox" id="tablebox1" >
			<h3>Hideable table</h3>			
			<div id="cputable" >
			 Some text inside.
			</div>
		</div> 
	</div>	
	<div class="main" id="uptime" >
		<div class="boxf chart" >
		<h3>2. Uptime</h3>			
		<canvas id="uptimegraph" ></canvas>
		<button onclick="showtable('tablebox2');" class="mybutton hidebutton" >Show/Hide table</button>
		</div> 
		<div class=" boxf tablebox" id="tablebox2" >
		<h3>Uptime table</h3>			
		<canvas id="uptimetable"  ></canvas>
	</div> 
	</div>
	<div class="main" id="proc" >
		<div class="boxf chart" >
		<h3>3. Number of processes</h3>			
		<canvas id="procgraph"  ></canvas>
				<button onclick="showtable('tablebox3');" class="mybutton hidebutton" >Show/Hide table</button>
		</div> 
		<div class=" boxf tablebox" id="tablebox3" >
		<h3>Memory usage table</h3>			
		<canvas id="proctable"  ></canvas>

		</div> 
	</div>	
	<div class="main" id="memory"  >
		<div class="boxf chart" >
		<h3>4. Memory usage</h3>			
		<div id="memorygraph" ><p >a</p><p >a</p><p >a</p></div>
		<button onclick="showtable('tablebox4');" class="mybutton hidebutton" >Show/Hide table</button>
		</div> 
		<div class=" boxf tablebox" id="tablebox4" >
		<h3>Memory usage table</h3>			
		<canvas id="memorytable"  ></canvas>
		</div> 
	</div>
	<div class="main" id="swap" >
		<div class="boxf chart" >
		<h3>5. Swap file size</h3>			
		<canvas id="swapgraph"  ></canvas>
				<button onclick="showtable('tablebox5');" class="mybutton hidebutton" >Show/Hide table</button>
		</div> 
		<div class=" boxf tablebox" id="tablebox5">
		<h3>Swap size table</h3>			
		<canvas id="swaptable" ></canvas>
		</div> 
	</div>
<div class="main" id="disk" >
		<div class="boxf chart" >
		<h3>6. Disk usage</h3>			
		<canvas id="diskgraph"  ></canvas>
				<button onclick="showtable('tablebox6');" class="mybutton hidebutton" >Show/Hide table</button>
		</div> 
		<div class=" boxf tablebox" id="tablebox6" >
		<h3>Disk usage table</h3>			
		<canvas id="disktable" ></canvas>
		</div> 
	</div>	

</div>

</body>
</html>
