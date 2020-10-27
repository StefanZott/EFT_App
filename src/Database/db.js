import {Component} from 'react';
import * as SQLite from 'expo-sqlite';

// eigene Imports
import SQLStrings from '../Strings/SQLStrings';

// Datenbankverbindung
let database = SQLite.openDatabase('eft_fourteen.db');

export default class Database extends Component {

    // Diese Funktion löscht alle Relationen
    static _dropTables() {
      try {
        Object.keys(SQLStrings.createTable).map(key => {
          let dropString = 'DROP TABLE IF EXISTS ' + SQLStrings.createTable[key];
          database.transaction((transaction) => transaction.executeSql(dropString));
      });
      } catch (error) {
        alert('FEHLER: \n' + error);  
      }
    }

    // Diese Funktion erstellt die Relationen für die SQLite Datenbank
    static _createTables() {
        try {
          Object.keys(SQLStrings.createTable).map(key => {
            database.transaction((transaction) => transaction.executeSql(SQLStrings.createTable[key]));
          },
          (transaction , err) => alert(err));
        } catch (error) {
          alert('FEHLER: \n' + error);  
        }
      }

    // Diese Funktion befüllt die Relationen mit Daten
    static _insterDataInRelation(getData) {

        // Befüllt die Realtion table_items
        for (let index = 0; index < getData['table_items'].length; index++) {
            database.transaction((transaction) =>
                transaction.executeSql('INSERT INTO table_items (IID,Name) VALUES (?,?)',
                [getData['table_items'][index]['IID'] , getData['table_items'][index]['Name']],
            ))
        }

        // Befüllt die Realtion table_provisions
        for (let index = 0; index < getData['table_provisions'].length; index++) {
            database.transaction((transaction) =>
                transaction.executeSql('INSERT INTO table_provisions (PID,IID,Name,Energy,Hydration) VALUES (?,?,?,?,?)',
                [getData['table_provisions'][index]['PID'], getData['table_provisions'][index]['IID'], getData['table_provisions'][index]['Name'], getData['table_provisions'][index]['Energy'], getData['table_provisions'][index]['Hydration']],
            ))
        }

        // Befüllt die Realtion table_backpacks
        for (let index = 0; index < getData['table_backpacks'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_backpacks (BID,IID,Name,Inner_Grid,Outer_Grid,Size,Storage_Efficiency,Weight) VALUES (?,?,?,?,?,?,?,?)',
              [getData['table_backpacks'][index]['BID'], getData['table_backpacks'][index]['IID'],  getData['table_backpacks'][index]['Name'], getData['table_backpacks'][index]['Inner_Grid'], getData['table_backpacks'][index]['Outer_Grid'], getData['table_backpacks'][index]['Size'], getData['table_backpacks'][index]['Storage_Efficiency'], getData['table_backpacks'][index]['Weight']],
          ))
        }

        // Befüllt die Realtion table_eyewears
        for (let index = 0; index < getData['table_eyewears'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_eyewears (EwID,IID,name) VALUES (?,?,?)',
              [getData['table_eyewears'][index]['EwID'], getData['table_eyewears'][index]['IID'], getData['table_eyewears'][index]['Name']],
          ))
        }

        // Befüllt die Realtion table_secure_containers
        for (let index = 0; index < getData['table_secure_containers'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_secure_containers (ScID,IID,Name,Inner_Grid,Size) VALUES (?,?,?,?,?)',
              [getData['table_secure_containers'][index]['ScID'], getData['table_secure_containers'][index]['IID'], getData['table_secure_containers'][index]['Name'], getData['table_secure_containers'][index]['Inner_Grid'], getData['table_secure_containers'][index]['Size']],
          ))
        }

        // Befüllt die Realtion table_headsets
        for (let index = 0; index < getData['table_headsets'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_headsets (HID,IID,Name) VALUES (?,?,?)',
              [getData['table_headsets'][index]['HID'], getData['table_headsets'][index]['IID'], getData['table_headsets'][index]['Name']],
          ))
        }

        // Befüllt die Realtion table_armbands
        for (let index = 0; index < getData['table_armbands'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_armbands (AbID,IID,Name,Color) VALUES (?,?,?,?)',
              [getData['table_armbands'][index]['HID'], getData['table_armbands'][index]['IID'], getData['table_armbands'][index]['Name'], getData['table_armbands'][index]['Color']],
          ))
        }

        // Befüllt die Realtion table_containers
        for (let index = 0; index < getData['table_containers'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_containers (CoID,IID,Name,Inner_Grid,Outer_Grid,Storage_Efficiency,Size) VALUES (?,?,?,?,?,?,?)',
              [getData['table_containers'][index]['CoID'], getData['table_containers'][index]['IID'], getData['table_containers'][index]['Name'], getData['table_containers'][index]['Inner_Grid'], getData['table_containers'][index]['Outer_Grid'], getData['table_containers'][index]['Storage_Efficiency'], getData['table_containers'][index]['Size']],
          ))
        }
    }

    // Diese Funktion liest Daten aus der Relation
    static _checkData() {
      database.transaction((transaction) =>
        transaction.executeSql('SELECT * FROM table_containers',
        [],
        (transaction,result) => console.log(result.rows),
        (transaction , err) => alert(err)
      ))
    }
}