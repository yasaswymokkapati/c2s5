import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class OrphanagesScreen extends React.Component{

    render(){
        return(
            <View>
                <TouchableOpacity
                style = {styles.button}>
                    <Text>Register your Orphanage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}