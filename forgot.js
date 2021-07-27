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
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Your Details are', `${email} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.Image} /> 
      <Text style={styles.Title}>Enter Email</Text>
<Text style={styles.line}>We will share code through Email</Text>
      <View style={styles.Textinput}>
      <TextInput
      mode="outlined"
      label="Enter Email"
      placeholder="Type Email"
      value={this.state.email}
      onChangeText={(email) => this.setState({ email })}
      right={<TextInput.Affix text="/100" />}
      
    />
    
    </View>
        
        <Button mode="contained" color="orange" labelStyle={{color:"white"}} style={styles.button} onPress={this.onLogin.bind(this)}>
          Verify
        </Button>
        
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
     color:'white',
     padding: 9


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
