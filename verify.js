import React, { Component } from 'react';
import { Alert, View, StyleSheet, Image, Text} from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
      code: '',
    };
  }
  
  onLogin() {
    const { email, code } = this.state;

    Alert.alert('Your Details are', `  ${code}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo.png')} style={styles.Image} /> 
      <Text style={styles.Title}>Enter Verification Code</Text>
<Text style={styles.line}>See You Email For Code</Text>
      <View style={styles.Textinput}>
      <TextInput
      mode="outlined"
      label="Enter Code"
      placeholder="Type Code"
      secureTextEntry={true}
      value={this.state.code}
      onChangeText={(code) => this.setState({ code })}
      right={<TextInput.Affix text="/100" />}
      
    />
    <Text style={styles.line2}>Resend Code?</Text>
    
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
   fontSize: 35,
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
  line2: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    
    color: 'orange',
  },
});
