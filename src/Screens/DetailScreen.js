// Imports
import React, {Component} from 'react';
import { ImageBackground, Dimensions, Image, ActivityIndicator, Text, View} from 'react-native';
import * as SQLite from 'expo-sqlite';

// eigene Imports
import Style from '../Style/Style';
import SQLStrings from '../Strings/SQLStrings';
import getImage from '../Components/createImageContainer';

// Datenbankverbindung
const database = SQLite.openDatabase('eft_twelve.db');

export default class DetailScreen extends Component {
    state = { item: [] , name: this.props.route.params.detail}

    // Diese Funktion sucht mit dem Parameter Name den gewünschten Datensatz
    // aus der Datenbank
    _searchData = async (myCallback) => {
        Object.keys(SQLStrings.createTable).map(key => {
           let selectString = "SELECT * FROM " + key + " WHERE Name = ?"

            database.transaction((transaction) => 
              transaction.executeSql(selectString,
              [this.state.name],
              (transaction,result) => {
                if (result.rows._array.length > 0) {
                    myCallback(result.rows._array) 
                }
              },
              (transaction,error) => alert(error)
            ))
          }
        )
    }

    async componentDidMount() {

        // Holt sich den Datensatz aus der Datenbank
        await this._searchData((rows) => {
            let array = []

            // Wandelt das Objekt in ein Array um
            // Filter das Attribut Name raus
            Object.keys(rows[0]).map((key) => {
                if (key.length > 4 || key === 'Name') {
                    array.push({key:key , value:rows[0][key]})
                }
            })

            // Übergibt das Array der Eigenschaft item
            this.setState({item: array})
        })
    }

    render () {
        let style = Style(Dimensions.get('window').width);

        if (this.state.item.length > 0) {
            let items = this.state.item;
            let name;

            Object.keys(items).map(key => {
                if (items[key]['key'] == 'Name') {
                    name = items[key]['value']
                }
            })

            return (
                <View style={style.container}> 
                    <ImageBackground source={style.backgroundImage} style={style.image}>
                        <View style={style.header}>
                            <Text style={style.textDetailHeader}>{name}</Text>
                        </View>
            
                        <View style={style.contentDetail}>
                            {
                                getImage(name , style)
                            }
                            <View style={style.contentDetailBottom}>
                                <View style={style.contentDetailLeft}>
                                    {
                                        Object.keys(items).map(key => {
                                            if (items[key]['key'] != 'Name') {
                                                return <Text style={style.textDetailKey}>{items[key]['key'].replace('_' , ' ')}</Text>
                                            }
                                        })
                                    }
                                </View>
                                <View style={style.contentDetailRight}>
                                    {
                                        Object.keys(items).map(key => {
                                            switch (items[key]['key']) {
                                                case 'Weight':
                                                    return <Text style={style.textDetailValue}>{items[key]['value'] + ' kg'}</Text>

                                                case 'Storage_Efficiency':
                                                    return <Text style={style.textDetailValue}>{items[key]['value'] + ' %'}</Text>

                                                case 'Name':
                                                    break;
                                            
                                                default:
                                                    return <Text style={style.textDetailValue}>{items[key]['value']}</Text>
                                            }
                                        })
                                    }
                                </View>
                            </View>
                        </View>
            
                        <View style={style.footer}>
                            <Text style={style.copyright}>Copyright by Luecke-IT</Text>
                        </View>
                    </ImageBackground> 
                </View> 
            );
        } else {
            return (
                <View style={style.container}>
                    <View  style={style.activityIndicator}>
                        <ActivityIndicator size='large' color='orange'/>
                    </View>
                </View>
            )
            
        }
        
    }
}