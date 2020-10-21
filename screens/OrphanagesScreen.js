import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class OrphanagesScreen extends React.Component{

    render(){
        return(
            <View>
                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                    this.props.navigation.navigate('Register')
                }}
                >
                    <Text>Register your Orphanage</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                    this.props.navigation.navigate('Checking')
                }}
                >
                    <Text>Check your Orphanage</Text>
                </TouchableOpacity>
            </View>
        )
    }
}