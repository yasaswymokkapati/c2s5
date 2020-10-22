import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
 } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import AppHeader from '../components/AppHeader';
import db from '../config';
import {Picker, CustomPicker} from 'react-native-picker';
import firebase from 'firebase';

export default class Food extends React.Component {
  constructor(){
    super()
    this.state = {
      name : '',
      contact : '',
      address : '',
      typeOfFood : '',
      orphanage : '',
      items: [{name: 'Orphanage 1'}, {name: 'Orphanage 2'}, {name: 'Orphanage 3'}],
      value: 'Orphanage 1'
    }
  }
  goMain = () => {
    this.props.navigation.navigate('Main');
  };
  submit=()=>{
    db.collection('Food').add({
      'food_type' : this.state.typeOfFood,
      'orphanage' : this.state.orphanage,
      'name' : this.state.name,
      'address' : this.state.address,
      'contact' : this.state.contact
    })
  }
  renderItems() { 
    return this.state.items.map((item, index) => { 
      return <Item key={index + 1} label={item.name} value={item.name} /> 
    });
   }
  render() {
    return (
      <View>
        <AppHeader />
        <Header title = "Food donate"/>
          <TextInput 
          placeholder = "Name"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              name : text
            })
          }}
          />
          <TextInput 
          placeholder = "Contact"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              contact : text
            })
          }}
          />
          <TextInput 
          placeholder = "Address"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              name : text
            })
          }}
          />
          <TextInput 
          placeholder = "Food"
          style = {styles.inputBox}
          onChangeText = {(text)=>{
            this.setState({
              name : text
            })
          }}
          />
          <CustomPicker 
          items={this.renderItems()} 
          style={[styles.selectOptions]} 
          mode="dropdown" 
          selectedValue={this.state.value} 
          onValueChange={(value) => 
          this.setState({ value: value})} 
          />
          <View>
            <TouchableOpacity style = {{justifyContent : 'center', alignItems : 'center', backgroundColor : 'yellow', padding : 10}}
            onPress = {()=>{
              this.submit()
            }}>
              <Text>Donate</Text>
            </TouchableOpacity>
          </View>
        <TouchableOpacity
          style={styles.main}
          onPress={() => {
            this.goMain();
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#008080',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#008080',
    marginLeft: 150,
    marginTop: 50,
    width: 50,
  },
});
