import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, View, StyleSheet, Image, Alert } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';

const Profil = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
    Montserrat_700Bold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate('Home', { name: 'Home' })}>
          <Image
            style={styles.gambar}
            source={require('../assets/image/Vector.png')}
          />
        </Pressable>
        <Text style={styles.headertext}>Home Panel</Text>
      </View>
      <View>
        <Image
          style={styles.gambarnum}
          source={require('../assets/image/number.png')}
        />
        <Text style={styles.head}>PROJECT</Text>
      </View>
      <View style={styles.bargo}>
        <View>
          <Image
            style={styles.gambar_inside}
            source={require('../assets/image/id-card.png')}
          />
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('DataDiri', { name: 'Data Diri' })}>
            <Text style={styles.headinside}>Profil Data Diri</Text>
            <Text style={styles.sub}>
              Tekan Tombol Untuk Menekan Data Diri User
            </Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Welcome', { name: 'Welcome' })}>
          <Text style={styles.btext}>KELUAR</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    paddingBottom: 10,
    marginTop: '5%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: '-10%',
  },
  headertext: {
    fontFamily: Montserrat_600SemiBold,
    fontSize: 30,
    fontWeight: 600,
    marginLeft: '-15%',
  },
  gambar: {
    marginTop: '20%',
    marginBottom: '5%',
  },
  gambarnum: {
    marginTop: '20%',
    width: 200,
    height: 200,
    marginBottom: '5%',
  },
  gambar_inside: {
    marginTop: '5%',
    marginLeft: '-5%',
    width: 110,
    height: 110,
    marginBottom: '5%',
  },
  bargo: {
    flexDirection: 'row',
    width: '85%',
    height: 150,
    backgroundColor: '#8E8E8E',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'left',
  },
  head: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 40,
    color: 'black',
    marginBottom: '10%',
  },
  headinside: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: 'white',
    marginBottom: '5%',
    marginLeft: '-3%',
  },
  sub: {
    fontFamily: 'Montserrat_500Medium',
    width: '50%',
    color: '#fff',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: '-3%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'red',
    marginTop: 60,
  },
  btext: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    lineHeight: 21,
    color: 'white',
    fontWeight: '600',
    letterSpacing: 0.25,
  },
});
export default Profil;
