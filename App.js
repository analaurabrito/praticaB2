import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  let [personagens, setPersonagens] = useState([]);

  const baseURL = 'https://swapi.dev/api/people?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto);
        setPersonagens(objeto.results);
    })
  }, []);

  return (
      <View style={styles.container}>
      { personagens.length > 0 ? personagens.map(personagem => <Text>-> {personagem.name}</Text>) : <Text style={{}}>Carregando...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
