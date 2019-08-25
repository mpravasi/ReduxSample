import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput , Button} from 'react-native';


const WelcomeScreen = props => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const emailInputHandler = enteredText => {
    setEmail(enteredText);
  };
  const passwordInputHandler = enteredText => {
    setPassword(enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        />
     
      <View style={styles.buttonContainer}>
        <Button title="Login" color="red" onPress={props.onCancel} />
        <Button title="Sign Up" onPress={props.onCancel} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
});


export default WelcomeScreen;
