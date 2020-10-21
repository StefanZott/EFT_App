import {Component} from 'react';
import * as SQLite from 'expo-sqlite';

// eigene Imports
import SQLStrings from '../Strings/SQLStrings';

// Datenbankverbindung
let database = SQLite.openDatabase('eft_three.db');

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
      /* console.log('--------------------------------------------------------')
      console.log(getData['table_items']) */
        // Befüllt die Realtion table_items
        for (let index = 0; index < getData['table_items'].length; index++) {
            database.transaction((transaction) =>
                transaction.executeSql('INSERT INTO table_items (IID,name) VALUES (?,?)',
                [getData['table_items'][index]['IID'] , getData['table_items'][index]['name']],
            ))
        }

        // Befüllt die Realtion table_provisions
        for (let index = 0; index < getData['table_provisions'].length; index++) {
            database.transaction((transaction) =>
                transaction.executeSql('INSERT INTO table_provisions (PID,IID,image,name,energy,hydration) VALUES (?,?,?,?,?,?)',
                [getData['table_provisions'][index]['PID'], getData['table_provisions'][index]['IID'],  getData['table_provisions'][index]['image'], getData['table_provisions'][index]['name'], getData['table_provisions'][index]['energy'], getData['table_provisions'][index]['hydration']],
            ))
        }

        // Befüllt die Realtion table_backpacks
        for (let index = 0; index < getData['table_backpacks'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_backpacks (BID,IID,name,image,inner_grid,outer_grid,slots,storage_efficiency,weight) VALUES (?,?,?,?,?,?,?,?,?)',
              [getData['table_backpacks'][index]['BID'], getData['table_backpacks'][index]['IID'],  getData['table_backpacks'][index]['name'], getData['table_backpacks'][index]['image'], getData['table_backpacks'][index]['inner_grid'], getData['table_backpacks'][index]['outer_grid'], getData['table_backpacks'][index]['slots'], getData['table_backpacks'][index]['storage_efficiency'], getData['table_backpacks'][index]['weight']],
          ))
        }

        // Befüllt die Realtion table_eyewears
        for (let index = 0; index < getData['table_eyewears'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_eyewears (EwID,IID,image,name) VALUES (?,?,?,?)',
              [getData['table_eyewears'][index]['EwID'], getData['table_eyewears'][index]['IID'],  getData['table_eyewears'][index]['image'], getData['table_eyewears'][index]['name']],
          ))
        }

        // Befüllt die Realtion table_secure_containers
        for (let index = 0; index < getData['table_secure_containers'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_secure_containers (ScID,IID,image,name,inner_grid,total_slots) VALUES (?,?,?,?,?,?)',
              [getData['table_secure_containers'][index]['ScID'], getData['table_secure_containers'][index]['IID'],  getData['table_secure_containers'][index]['image'], getData['table_secure_containers'][index]['name'], getData['table_secure_containers'][index]['inner_grid'], getData['table_secure_containers'][index]['total_slots']],
          ))
        }

        // Befüllt die Realtion table_headsets
        for (let index = 0; index < getData['table_headsets'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_headsets (HID,IID,image,name) VALUES (?,?,?,?)',
              [getData['table_headsets'][index]['HID'], getData['table_headsets'][index]['IID'],  getData['table_headsets'][index]['image'], getData['table_headsets'][index]['name']],
          ))
        }

        // Befüllt die Realtion table_armbands
        for (let index = 0; index < getData['table_armbands'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_armbands (AbID,IID,image,name,color) VALUES (?,?,?,?,?)',
              [getData['table_armbands'][index]['HID'], getData['table_armbands'][index]['IID'],  getData['table_armbands'][index]['image'], getData['table_armbands'][index]['name'], getData['table_armbands'][index]['color']],
          ))
        }

        // Befüllt die Realtion table_containers
        for (let index = 0; index < getData['table_containers'].length; index++) {
          database.transaction((transaction) =>
              transaction.executeSql('INSERT INTO table_containers (CoID,IID,image,name,inner_dimensions,outer_dimensions,efficiency,total_slots) VALUES (?,?,?,?,?,?,?,?)',
              [getData['table_containers'][index]['CoID'], getData['table_containers'][index]['IID'], getData['table_containers'][index]['image'], getData['table_containers'][index]['name'], getData['table_containers'][index]['inner_dimensions'], getData['table_containers'][index]['outer_dimensions'], getData['table_containers'][index]['efficiency'], getData['table_containers'][index]['total_slots']],
          ))
        }
    }

    // Diese Funktion liest Daten aus der Relation
    static _checkData() {
      database.transaction((transaction) =>
            transaction.executeSql('SELECT * FROM table_containers',
            [],
            (transaction,result) => console.log(result.rows),
            (tx , err) => {alert(err)}
          ))
    }
}