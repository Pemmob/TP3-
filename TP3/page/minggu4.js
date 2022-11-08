import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const DataDiri = ({ navigation }) => {
  return (
    <View style={styles.container_box}>
      <NativeBaseProvider>
        <View style={styles.head}>
          <Pressable
            onPress={() => navigation.navigate('Home', { name: 'Home' })}>
            <Image
              style={styles.gambar}
              source={require('../assets/image/Vector.png')}
            />
          </Pressable>
        </View>
      </NativeBaseProvider>
      <Text style={styles.judul}>Praktikum Minggu 4</Text>
      <Text style={styles.isi}>
        Halaman ini disusun untuk memenuhi pengumpulan tugas praktikum minggu 4
      </Text>
      <View style={styles.box}>
        <Text style={styles.box_text}>Nama Saya</Text>
        <Text style={styles.nama}>Muhammad Ma'sum Juniyanto</Text>
        <Text style={styles.box_text}>Program Studi</Text>
        <Text style={styles.nama}>Teknologi Informasi</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.box_text}>Nama Panggilan</Text>
        <Text style={styles.nama}>Ma', Sum</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.box_text}>No Telepon</Text>
        <Text style={styles.box_text_sub}>+62 813 5895 5100</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.box_text}>NIM</Text>
        <Text style={styles.box_text_sub}>1202202056</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  judul: {
    margin: 15,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  isi: {
    margin: 10,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'justify',
  },
  container_box: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    width: '100%',
  },
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    marginBottom: 15,
    backgroundColor: '#C7FF29',
  },
  box_text: {
    flexWrap: 'wrap',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },
  nama: {
    flexWrap: 'wrap',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  box_text_sub: {
    flexWrap: 'wrap',
    fontSize: 16,
    textAlign: 'center',
  },
  head: {
    paddingBottom: 10,
    marginTop: '8%',
    marginLeft: '10%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default DataDiri;
