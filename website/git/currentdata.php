<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'ata3g2');
define('DB_NAME', 'lsmt');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
	die("Connection failed: " . $mysqli->error);
};
//initialize query variables
//$qtimeval = trim(trim($_GET["qtimeval"], "'"));
//$qtimeval = trim(trim($_GET["qtimeunit"], "'"));
$qhost = trim(trim($_GET["qhost"], "'"));
//$cpu = "cpu_load";
//$disk = "disk_used";
//$memf = "mem_free";
//$memt ="mem_total";
//query to get data from the table
$cquery = sprintf("SELECT * FROM `stats` WHERE `hostname` LIKE \"" . $qhost . "\" ORDER BY `timestamp` DESC LIMIT 1 ;");

//execute query
$cresult = $mysqli->query($cquery);

//loop through the returned data
$cdata = array();
foreach ($cresult as $crow) {
	$cdata[] = $crow;
}

//free memory associated with result
$cresult->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($cdata);

?>
