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
//$qtimeval =trim(trim($_GET["qtimeval"], "'"));

$qhostname = "hostname";

//query to get data from the table
$hquery = sprintf("SELECT DISTINCT hostname FROM stats ORDER BY hostname; ");

//execute query
$hresult = $mysqli->query($hquery);

//loop through the returned data
$hdata = array();
foreach ($hresult as $hrow) {
	$hdata[] = $hrow;
}

//free memory associated with result
$hresult->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($hdata);

?>
