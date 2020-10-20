import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class RegisterScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            orphanageName : '',
            address : '',
            contact : '',
            timings : '',
            website : ''
        }
    }
    register(){
        db.collection('Orphanages').add({
            'name' : this.state.orphanageName,
            'address' : this.state.address,
            'contact' : this.state.contact,
            'timings' : this.state.timings,
            'website' : this.state.website
        })
    }
    render(){
        return(
            <View>
                <TextInput 
                placeholder = {"Orphanage Name"}
                style = {styles.inputBox}
                onChangeText = {(text)=>{
                    this.setState({
                        orphanageName : text
                    })
                }}
                value = {this.state.orphanageName}/>
                <TextInput 
                placeholder = {"Address"}
                multiline
                style = {styles.inputBox}
                onChangeText = {(text)=>{
                    this.setState({
                        address : text
                    })
                }}
                value = {this.state.address}/>
                <TextInput 
                placeholder = {"Contact"}
                style = {styles.inputBox}
                onChangeText = {(text)=>{
                    this.setState({
                        contact : text
                    })
                }}
                value = {this.state.contact}/>
                <TextInput 
                placeholder = {"Timings"}
                style = {styles.inputBox}
                onChangeText = {(text)=>{
                    this.setState({
                        timings : text
                    })
                }}
                value = {this.state.timings}/>
                <TextInput 
                placeholder = {"Website"}
                style = {styles.inputBox}
                onChangeText = {(text)=>{
                    this.setState({
                        website : text
                    })
                }}
                value = {this.state.website}/>
                <TouchableOpacity style = {styles.button}
                onPress = {()=>{
                    this.register()
                }}><Text>Register</Text></TouchableOpacity>
            </View>
        )
    }
}