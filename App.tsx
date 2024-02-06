import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import profile1 from './assets/profile1.jpg';
import Title from './src/components/Title';
import Input from './src/components/index';

const App = () => {
  return (
    <View style={style.container}>
      <Title text="Ridings Collection"/>
      <ScrollView contentContainerStyle={style.scrollView}>
        <View style={style.boxContainer}>
          <View style={[style.box, { backgroundColor: 'red', marginRight: 5 }]} />
          <View style={[style.box, { backgroundColor: 'white', marginRight: 5 }]} />
          <View style={[style.box, { backgroundColor: 'black' }]} />
        </View>
        <Text style={style.title2}>Photos</Text>
        <View style={style.imageContainer}>
          <Image
            source={require('./assets/profile1.jpg')}
            style={style.image}
          />
          <Image
            source={require('./assets/riding1.jpg')}
            style={style.image}
          />
          <Image
            source={require('./assets/riding2.jpg')}
            style={style.image}
          />
        </View>
        <Text style={style.title3}>Supported By :</Text>
        <View style={style.image2Container}>
          <Image
            source={require('./assets/KYT.png')}
            style={style.image2}
          />
          <Image
            source={require('./assets/honda_logo.png')}
            style={style.image3}
          />
        </View>
        <Input />
      </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  title3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  box: {
    borderWidth: 2,
    borderColor: 'black',
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  image2Container: {
    flexDirection: 'row',
  },
  image2: {
    width: 125,
    height: 110,
    marginLeft: 55,
  },
  image3: {
    width: 90,
    height: 90,
    marginLeft: 30,
    resizeMode: 'contain',
  }
});

export default App;
