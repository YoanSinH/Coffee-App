import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetchData();
    console.log(image.file)
  },[]);

  const fetchData = () => {
    fetch("https://coffee.alexflipnote.dev/random.json")
    .then(response => response.json())
    .then(jsonResponse => setImage(jsonResponse))
    .catch(error => console.log(error))
    console.log("a")
  }

  return (
    <View style={styles.container}>
      <Text>Random Coffee Image</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image.file,
        }}
      />

      <Button onPress={fetchData} title="Next"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
