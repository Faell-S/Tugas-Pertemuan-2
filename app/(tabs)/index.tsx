import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */} 
      <Image 
        source={require("../../assets/images/tugas.jpeg")}
        
         //  bisa juga menggunakan local image
        //  image: source={require('../assets/images/gambar22.png')}

        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Rafael Sagala</Text>
      <Text style={styles.nim}>NIM: 243303621233</Text>
      <Text style={styles.prodi}>Prodi Sistem Informasi</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          七転び八起き (Nanakorobi ya oki)
        </Text>
         <Text style={styles.bioText}>
Jatuh tujuh kali, bangkit delapan kali .
        </Text>
         <Text style={styles.bioText}>
ItCU DIAAHH!😜👆
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 125,
    height: 135,
    borderRadius: 70, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: 'rgb(0, 54, 54)',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#d6d6d6',
    marginBottom: 5,
  },
  prodi: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '900',
    color: 'rgb(77, 151, 151)',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: 'rgb(39, 129, 129)',
    marginBottom: 8,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: 'rgb(0, 22, 22)',
    padding: 20,
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
  },
  bioText: {
    color: '#ccc',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});