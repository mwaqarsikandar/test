import React, { Component } from 'react';
import { Alert, View, StyleSheet, Image, Text} from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  }
  
validat = () => {
  let text = this.state.email
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    console.log("Email is Not Correct");
    Alert.alert("Email is Not Correct");
    this.setState({ email: text })
    return false;
  }
  else {
    this.setState({ email: text })
    console.log("Email is Correct");
    Alert.alert("Email is Correct");
  }
}

  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Your Details are', `${email} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.Image} /> 
      <Text style={styles.Title}>Sign In</Text>

      <View style={styles.Textinput}>
      <TextInput
      mode="outlined"
      label="Enter Email"
      placeholder="Type Email"
      value={this.state.email}
      onChangeText={(email) => this.setState({ email })}
      right={<TextInput.Affix text="/100" />}
      
    />
     <TextInput
      mode="outlined"
      label="Enter password"
      placeholder="Type password"
      secureTextEntry={true}
      value={this.state.password}
      onChangeText={(password) => this.setState({ password })}
      right={<TextInput.Affix text="/100" />}
      
    />
    </View>
        <Text style={styles.line0}>Forgot Your password?</Text>
        <Button mode="outlined" color="orange" style={styles.button} onPress={this.validat.bind(this)}>
          Log In
        </Button>
        <Text style={styles.line}>Don't have an account? Sign Up</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 230,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 28,
     borderRadius: 60,

  },
   Textinput:{

 marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 28,
  },
  Image: {
    
    marginLeft: 100,
    marginRight: 10,
    marginBottom: 40,
  },
  Title: {

   textAlign: 'center',
   fontSize: 50,
    fontWeight: "bold"
  },
   line0: {
    textAlign: 'right',
    marginTop: 10,
    fontSize: 20,
    
    color: 'black',
  },
  line: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    
    color: 'black',
  },
});
