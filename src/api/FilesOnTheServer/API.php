<?php 
header("Content-Type:application/json");

include 'DBConfig.php';

$connectionString = 'mysql:host=' . $db_server . ';dbname=' . $db_name;
$selectTableName = "SHOW TABLES ";
$resultsJSON = [];
$tableName = [];
$dataArray = [];

try {
    $pdo = new PDO($connectionString , $db_user , $db_password);

    $statement = $pdo->prepare($selectTableName);
    
    $statement->execute();
    
    $results = $statement->fetchAll(PDO::FETCH_COLUMN);
    $tableName = json_encode($results);
    $tableName = str_replace('"' , '' , $tableName);
    $tableName = str_replace('[' , '' , $tableName);
    $tableName = str_replace(']' , '' , $tableName);
    $tableName = explode(',' , $tableName);

    file_put_contents('data.json' , '');
    
    foreach ($tableName as $nameKey => $nameValue) {
        $selectQuery = "SELECT * FROM " . $nameValue;

        $getData = file_get_contents('data.json', true);
        $getData = json_decode($getData , true);

        $statement = $pdo->prepare($selectQuery);
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_ASSOC);
        $resultsJSON[$nameValue] = $results;
    }

    file_put_contents('data.json' , json_encode($resultsJSON , JSON_PRETTY_PRINT));

} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
}

?>