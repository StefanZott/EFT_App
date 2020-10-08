<?php 
header("Content-Type:application/json");

// Importing DBConfig.php file.
include 'DBConfig.php';

$connectionString = 'mysql:host=' . $db_server . ';dbname=' . $db_name;
$selectTableName = "SHOW TABLES ";
$resultsJSON = [];
$tableName = [];

try {
    // Connection to database
    $pdo = new PDO($connectionString , $db_user , $db_password);

    // Prepare the Statement
    $statement = $pdo->prepare($selectTableName);
    // Execute the Statement
    $statement->execute();
    // The Result from Statement (JSON)
    $results = $statement->fetchAll(PDO::FETCH_COLUMN);
    $tableName = json_encode($results);
    $tableName = str_replace('"' , '' , $tableName);
    $tableName = str_replace('[' , '' , $tableName);
    $tableName = str_replace(']' , '' , $tableName);
    $tableName = explode(',' , $tableName);
    
    foreach ($tableName as $nameKey => $nameValue) {
        $selectQuery = "SELECT * FROM " . $nameValue;

        $statement = $pdo->prepare($selectQuery);
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);
        $resultsJSON[$nameValue] = $results;
    }

    // Später entfernen
    var_dump($resultsJSON);

    file_put_contents('data.json','');
    file_put_contents('data.json',json_encode($resultsJSON));

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
}

?>