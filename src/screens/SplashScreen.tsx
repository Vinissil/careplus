import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  navigation: any;
};

export default function SplashScreen({ navigation }: Props) {
  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* TOPO – Ícones médico + enfermeira */}
      <View style={styles.topContainer}>
        <View style={styles.avatarsWrapper}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/16505/16505597.png', // surgeon_16505597
            }}
            style={styles.avatarLeft}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/14678/14678399.png', // medical_14678399
            }}
            style={styles.avatarRight}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* PARTE DE BAIXO – Cartão azul com título, botão e logo */}
      <View style={styles.bottomCard}>
        <Text style={styles.title}>Care Plus One</Text>

        <TouchableOpacity style={styles.circleButton} onPress={handleGoToLogin}>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <Text style={styles.smallText}>BITS AND BITS</Text>

        <View style={styles.footerBrand}>
          <Text style={styles.footerText}>Design by</Text>
          <Image
            source={require('../../assets/branding/BITSANDBITES.png')}
            style={styles.logoBB}
            resizeMode="contain"
          />
          <Text style={styles.footerSubText}>BITS AND BITS</Text>
        </View>
      </View>
    </View>
  );
}

const BLUE = '#5B8DEF';
const LIGHT_BG = '#F2F2F2';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },

  // ==== TOPO ====
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  avatarsWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatarLeft: {
    width: 140,
    height: 140,
    marginRight: -20, // dá uma leve sobreposição
  },
  avatarRight: {
    width: 140,
    height: 140,
  },

  // ==== CARTÃO AZUL ====
  bottomCard: {
    backgroundColor: BLUE,
    borderTopLeftRadius: 220,
    borderTopRightRadius: 0,
    paddingTop: 40,
    paddingBottom: 50,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#3367D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  arrow: {
    fontSize: 30,
    color: '#fff',
  },
  smallText: {
    fontSize: 10,
    letterSpacing: 1,
    color: '#E0E7FF',
    marginBottom: 24,
  },

  // ==== RODAPÉ / LOGO ====
  footerBrand: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  logoBB: {
    width: 110,
    height: 70,
    marginBottom: 4,
  },
  footerSubText: {
    fontSize: 10,
    letterSpacing: 2,
    color: '#000',
  },
});
