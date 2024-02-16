import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';


const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Welcome</Text>
      <Text style={style.title2}>Username</Text>
      <TextInput
        placeholder="Masukan username anda"
        placeholderTextColor="black"
        style={style.inputUsername}
      />
      <Text style={style.title3}>Password</Text>
      <TextInput
        placeholder="Masukan password anda"
        placeholderTextColor="black"
        style={style.inputPassword}
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
  },
  title2: {
    color: 'black',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 35,
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    textColor: 'black',
    alignSelf: 'center',
    width: '92%',
    padding: 15,
  },
  title3: {
    color: 'black',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 35,
  },
  inputPassword: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
    textColor: 'black',
    alignSelf: 'center',
    width: '92%',
    padding: 15,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 55,
    alignSelf: 'center',
    width: '92%',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default App;
