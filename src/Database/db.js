// React Native imports
import {Component} from 'react';
import * as SQLite from 'expo-sqlite';

// eigene Imports
import SQLStrings from '../Strings/SQLStrings';
import { Value } from 'react-native-reanimated';

// Datenbankverbindung
const database = SQLite.openDatabase('eft.db');

export default class Database extends Component {

    // Diese Funktion erstellt die Relationen für die SQLite Datenbank
    static async _createTables() {
      try {
        Object.keys(SQLStrings.createTable).map(key => {
          database.transaction((transaction) => transaction.executeSql(SQLStrings.createTable[key]));
        });
      } catch (error) {
        alert('FEHLER: \n' + error);  
      }
    }

    // Diese Funktion befüllt die Relationen mit Daten
    static _insterDataInRelation(getData) {
      try { 
        // Alle Namen von den Realtionen werden in das Array tableNames gespeichert
        Object.keys(getData).map(tablenName => {
          let counter = 1;
          let index = 0;
          let insertString = 'INSERT INTO ' + tablenName + ' (';
          let relationAttributArray = [];

          // bestimmt die Anzahl der Attribute von jeder Realtion
          Object.keys(getData[tablenName][0]).map((attribute , attributeValue) => {
            index++;
          });

          // Speicher die Attribute der Relation in den String "insertString"
          Object.keys(getData[tablenName][0]).map((attribute , attributeValue) => {
            if (counter != index) {
              insertString += attribute + ' , ';
              relationAttributString += tablenName + '.' + attribute + ' , ';
            } else {
              insertString += attribute + ') ';
              relationAttributString += tablenName + '.' + attribute;
            }
            counter++;
          });

          // Erweiter den String und resetet den Counter
          insertString += ' VALUES (';
          counter = 1;

          // Fügt den String die Anzahl an benötigten Platzholder hinzu
          Object.keys(getData[tablenName][0]).map((attribute , attributeValue) => {  
            if (counter != index) {
              insertString += ' ?, ';
            } else {
              insertString += '?) ';
            }
          });

          switch (tablname) {
            case 'table_armbands': relationAttributArray = [table_armbands.AbID , table_armbands.IID , table_armbands.image , table_armbands.name , table_armbands.color];
              break;
          
            default:
              break;
          }

          database.transaction((transaction) =>
            transaction.executeSql(insertString,
            [relationAttributArray],
            (transaction,result) => console.log(result.insertId)
          ))
        });
      } catch (error) {
        alert('FEHLER: \n' + error);
      }
    }

    static _checkData() {
      database.transaction((transaction) =>
            transaction.executeSql('SELECT * FROM table_armbands',
            [],
            (transaction,result) => console.log(result)
          ))
    }
}