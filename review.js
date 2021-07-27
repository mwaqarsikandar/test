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
      <Text style={styles.Title0}>Review For Customer</Text>
      <Avatar.Image size={220} style={styles.Avatar} source={require('./assets/image.jpeg')} />
        
      <Text style={styles.line2}>User Name:</Text>
      <Text style={styles.Title}>Wasilij Smith</Text>

      <Text style={styles.Title}>How is your Experience</Text>
      <Button icon="star-outline">
  Star
</Button>
      
<View style={styles.Textinput}>
      <TextInput
      mode="outlined"
      label="Additional Comment"
      placeholder="Type Comment"
      value={this.state.email}
      multiline={true}
      numberOfLines={7}
      onChangeText={(email) => this.setState({ email })}
      right={<TextInput.Affix text="/100" />}
      
    />
    
    </View>
     
        
        <Button mode="contained" color="orange" labelStyle={{color:"white"}} style={styles.button} onPress={this.onLogin.bind(this)}>
          Submit
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
    marginTop: 20,
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
  Title0: {

   textAlign: 'center',
   fontSize: 35,
    fontWeight: "bold",
    color: "grey"
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
    
    color: 'grey',
  },
  Avatar: {
    marginTop: 20,
     marginLeft: 100,
    marginRight: 10,
 

  }
});
