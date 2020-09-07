<?php 
header("Content-Type:application/json");

// Importing DBConfig.php file.
include 'DBConfig.php';

$connectionString = 'mysql:host=' . $db_server . ';dbname=' . $db_name;
$sql = "SELECT * FROM item";

try {
    // Connection to database
    $pdo = new PDO($connectionString , $db_user , $db_password);

    // Prepare the Statement
    $statement = $pdo->prepare($sql);

    // Execute the Statement
    $statement->execute();

    // The Result from Statement (JSON)
    $results = $statement->fetchAll(PDO::FETCH_ASSOC);

    $resultsJSON = json_encode($results); 
    print_r($resultsJSON);

    return $resultsJSON;

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
}

?>