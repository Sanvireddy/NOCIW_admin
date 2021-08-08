import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const Name = "Nociw";
const Password = "12345";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userVerification: false,
    };

    this.setName = this.setName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.compareUser = this.compareUser.bind(this);
  }
  setName(name) {
    this.setState({ userName: name })
  }
  setPassword(pswd) {
    this.setState({ password: pswd })
  }
  compareUser() {
    console.log(Name,Password,this.state.userName,this.state.password)
    if (this.state.userName === Name && this.state.password === Password)
    {
      this.setState({ userVerification: true })
      alert("login successfully!")
    }
    else {
      alert("wrong info")
    }
      
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(userName) => this.setName({userName})}
          style={styles.inputBox}
          underlinColorAndroid="rgba(0,0,0,0)"
          placeholder="UserName"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          onChangeText={(password)=>this.setPassword({password})}
          style={styles.inputBox}
          secureTextEntry={true}
          underlinColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#ffffff"
        />
        <TouchableOpacity
          onPress={() => this.compareUser()}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 23,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#212121',
    borderRadius: 23,
    paddingVertical: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
