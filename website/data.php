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
$qtimeval = trim(trim($_GET["qtimeval"], "'"));
$qhost = trim(trim($_GET["qhost"], "'"));
$qtimeunit = trim(trim($_GET["qtimeunit"], "'"));
//query to get data from the table
$query = sprintf("SELECT * FROM `stats` WHERE (FROM_UNIXTIME(timestamp)) >= (DATE_SUB(CURDATE(), INTERVAL 1 DAY)) AND `hostname` =\"" . $qhost  . "\" ORDER BY `timestamp` ASC ;");

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$ddata = array();
foreach ($result as $row) {
	$ddata[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($ddata);

?>
