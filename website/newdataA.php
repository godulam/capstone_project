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
/*/initialize query variables
$qtimestamp = "timestamp";
$qhostname = "hostname";
$qmsg = "msg";*/
//query to get data from the table
$queryA = sprintf("SELECT FROM_UNIXTIME(timestamp), hostname, msg FROM alerts ORDER BY timestamp DESC ;"  );

//execute query
$resultA = $mysqli->query($queryA);

//loop through the returned data
$dataA = array();
foreach ($resultA as $row) {
	$dataA[] = $row;
}

//free memory associated with result
$resultA->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($dataA);

?>
