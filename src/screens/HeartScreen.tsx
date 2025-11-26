// careplus/src/screens/HeartScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const BLUE = '#5B8DEF';
const LIGHT_BG = '#F2F2F2';
const CARD_BG = '#FFFFFF';
const TEXT_DARK = '#111827';

export default function HeartScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* CARD AZUL DO MÉDICO */}
        <View style={styles.doctorCard}>
          {/* Lado esquerdo: textos + botão */}
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Nome do doutor</Text>
            <Text style={styles.doctorSpecialty}>Especialização</Text>

            <View style={styles.ratingRow}>
              <Text style={styles.starIcon}>⭐</Text>
              <Text style={styles.ratingText}>Nota</Text>
            </View>

            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Agendar Consulta</Text>
            </TouchableOpacity>
          </View>

          {/* Lado direito: “foto” do médico */}
          <View style={styles.photoCard}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/747/747545.png',
              }}
              style={styles.photoIcon}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* CARDS BRANCOS: INFORMAÇÕES / LOCALIZAÇÃO / AVALIAÇÕES */}
        <View style={styles.optionsWrapper}>
          {/* Informações Profissionais */}
          <TouchableOpacity style={styles.optionCard} activeOpacity={0.7}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIconWrapper}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                  }}
                  style={styles.optionIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.optionText}>Informações Profissionais</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>

          {/* Localização */}
          <TouchableOpacity style={styles.optionCard} activeOpacity={0.7}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIconWrapper}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
                  }}
                  style={styles.optionIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.optionText}>Localização</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>

          {/* Avaliações (34) */}
          <TouchableOpacity style={styles.optionCard} activeOpacity={0.7}>
            <View style={styles.optionLeft}>
              <View style={styles.optionIconWrapper}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
                  }}
                  style={styles.optionIcon}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.optionText}>Avaliações (34)</Text>
            </View>
            <Text style={styles.chevron}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
    marginTop:50,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },

  // CARD AZUL
  doctorCard: {
    backgroundColor: BLUE,
    borderRadius: 24,
    borderBottomLeftRadius: 60, // curva maior no canto inferior esquerdo
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  doctorInfo: {
    flex: 1,
    marginRight: 12,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '700',
    color: TEXT_DARK,
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: TEXT_DARK,
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  starIcon: {
    fontSize: 18,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_DARK,
  },
  primaryButton: {
    marginTop: 4,
    backgroundColor: '#3367D6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  photoCard: {
    width: 90,
    height: 130,
    borderRadius: 16,
    backgroundColor: CARD_BG,
    borderWidth: 3,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoIcon: {
    width: 52,
    height: 52,
    tintColor: '#111827',
  },

  // LISTA DE OPÇÕES
  optionsWrapper: {
    marginTop: 8,
  },
  optionCard: {
    backgroundColor: CARD_BG,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1,
  },
  optionIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFEFD5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionIcon: {
    width: 20,
    height: 20,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: TEXT_DARK,
  },
  chevron: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
});
