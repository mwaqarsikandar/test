import React, { Component } from 'react';
import { Alert, View, StyleSheet, Image, FlatList, Text} from 'react-native';
import { TextInput, Button, Avatar } from 'react-native-paper';

var flatData = [
    {
      key: '0',
      name: 'Waqar',
      chat: 'Im going to San francissco'
      
   },
    {
      key: '1',
      name: 'Osama',
      chat: 'Im going to San francissco'
   }
   ]
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
      <Text style={styles.Title0}>Chat</Text>
      <Avatar.Image size={80} style={styles.Avatar} source={require('./assets/image.jpeg')} />
        
      
      

     
    
        <FlatList
          data={flatData}
          renderItem={({item}) => 
          <View>
<Avatar.Image size={80} style={styles.Avatar} source={require('./assets/image.jpeg')} />
          <Text>{item.name} </Text>
          <Text>{item.chat} </Text>
 </View>
        }
         
                
              />
       
          
        
        
        
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
     marginLeft: 10,
    marginRight: 10,
 

  }
});
