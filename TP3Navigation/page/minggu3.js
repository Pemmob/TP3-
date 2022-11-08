import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
      <View >
         <Button 
           color="#845EC2" onPress={() => {setCount(count + 1)}} title="Click Me"
         />
         <Button 
           color="#2C73D2" onPress={() => {setCount(0)}} title="Reset"
         />
         <Text>Tombol "Click Me" Di-Klik {count} Kali</Text>
     </View>
 );
}
// export default Counter;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Praktikum Minggu 3</Text>
      <StatusBar style="auto" />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008F7A',
    alignItems: 'center',
    justifyContent: 'center',
    textColor:'#ffffff',

  },
});