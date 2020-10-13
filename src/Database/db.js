// React Native imports
import {Component} from 'react';
import * as SQLite from 'expo-sqlite';

// eigene Imports
import SQLStrings from '../Strings/SQLStrings';

// Datenbankverbindung
const database = SQLite.openDatabase('eft.db');

export default class Database extends Component {

    // Diese Funktion erstellt die Relationen für die SQLite Datenbank
    static async _createTables() {
      try {
        Object.keys(SQLStrings.createTable).map(key => {
          //database.transaction((transaction) => transaction.executeSql(SQLStrings.createTable[key]));
        });
      } catch (error) {
        alert('FEHLER: \n' + error);  
      }
    }


    // Diese Funktion befüllt die SQLite Datenbank
    static async _checkData (results)  {
        results.map((item) => (
          database.transaction((transaction) =>
            transaction.executeSql('INSERT INTO item (ItemID,Name) VALUES (?,?)',
            [item.ItemID, item.Name],
            (transaction,result) => console.log(result.insertId)
            ))
        ))
    };

}