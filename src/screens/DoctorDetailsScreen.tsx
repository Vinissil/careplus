import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  navigation: any;
};

export default function DoctorDetailsScreen({ navigation }: Props) {
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const doctor = {
    name: 'Nome do doutor',
    specialization: 'Especialização',
    rating: 4.8,
    ratingCount: 34,
    address: 'Av. Paulista, 1000 - São Paulo/SP',
  };

  const reviews = [
    {
      id: 1,
      name: 'Maria S.',
      stars: 5,
      text: 'Médico muito atencioso, explicou tudo com calma.',
    },
    {
      id: 2,
      name: 'João P.',
      stars: 4,
      text: 'Atendimento bom, consultório organizado.',
    },
    {
      id: 3,
      name: 'Ana L.',
      stars: 5,
      text: 'Excelente profissional, recomendo bastante.',
    },
  ];

  const handleSchedule = () => {
    navigation.navigate('Calendar');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerCard}>
          <View style={styles.headerLeft}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.specialization}>{doctor.specialization}</Text>

            <View style={styles.ratingRow}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
                }}
                style={styles.starIcon}
              />
              <Text style={styles.ratingText}>Nota {doctor.rating}</Text>
            </View>

            <TouchableOpacity style={styles.scheduleButton} onPress={handleSchedule}>
              <Text style={styles.scheduleButtonText}>Agendar Consulta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.headerRight}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4128/4128176.png',
              }}
              style={styles.doctorPhoto}
              resizeMode="cover"
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.optionCard}
          activeOpacity={0.8}
          onPress={() => setShowProfessionalInfo(!showProfessionalInfo)}
        >
          <View style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIconCircle, { backgroundColor: '#FDBA74' }]}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
                  }}
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionTitle}>Informações Profissionais</Text>
            </View>
            <Text style={styles.arrow}>{showProfessionalInfo ? '˄' : '>'}</Text>
          </View>

          {showProfessionalInfo && (
            <View style={styles.optionContent}>
              <Text style={styles.optionContentText}>
                Especialização em {doctor.specialization}.
                Atuação focada em atendimento clínico, acompanhamento e prevenção.
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          activeOpacity={0.8}
          onPress={() => setShowLocation(!showLocation)}
        >
          <View style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIconCircle, { backgroundColor: '#A5B4FC' }]}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                  }}
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionTitle}>Localização</Text>
            </View>
            <Text style={styles.arrow}>{showLocation ? '˄' : '>'}</Text>
          </View>

          {showLocation && (
            <View style={styles.mapContainer}>
              <View style={styles.fakeMap}>
                <Text style={styles.fakeMapText}>Mapa do consultório</Text>
              </View>
              <Text style={styles.optionContentText}>{doctor.address}</Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionCard}
          activeOpacity={0.8}
          onPress={() => setShowReviews(!showReviews)}
        >
          <View style={styles.optionRow}>
            <View style={styles.optionLeft}>
              <View style={[styles.optionIconCircle, { backgroundColor: '#BBF7D0' }]}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/126/126242.png',
                  }}
                  style={styles.optionIcon}
                />
              </View>
              <Text style={styles.optionTitle}>
                Avaliações ({doctor.ratingCount})
              </Text>
            </View>
            <Text style={styles.arrow}>{showReviews ? '˄' : '>'}</Text>
          </View>

          {showReviews && (
            <View style={styles.reviewsContainer}>
              {reviews.map((review) => (
                <View key={review.id} style={styles.reviewCard}>
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <Text style={styles.reviewStars}>{'★'.repeat(review.stars)}</Text>
                  <Text style={styles.reviewText}>{review.text}</Text>
                </View>
              ))}
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const BLUE = '#5B8DEF';
const LIGHT_BG = '#F2F2F2';
const CARD_BG = '#FFFFFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_BG,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 90,
  },
  headerCard: {
    backgroundColor: BLUE,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flex: 1,
    paddingRight: 8,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  specialization: {
    fontSize: 14,
    color: '#111827',
    marginBottom: 8,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  starIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#111827',
  },
  scheduleButton: {
    backgroundColor: '#3367D6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  scheduleButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  headerRight: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorPhoto: {
    width: 80,
    height: 110,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  optionCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  optionIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  arrow: {
    fontSize: 18,
    color: '#111827',
  },
  optionContent: {
    marginTop: 10,
  },
  optionContentText: {
    fontSize: 13,
    color: '#4B5563',
  },
  mapContainer: {
    marginTop: 10,
  },
  fakeMap: {
    height: 140,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  fakeMapText: {
    fontSize: 14,
    color: '#6B7280',
  },
  reviewsContainer: {
    marginTop: 10,
  },
  reviewCard: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  reviewName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  reviewStars: {
    fontSize: 13,
    color: '#F59E0B',
    marginVertical: 2,
  },
  reviewText: {
    fontSize: 13,
    color: '#4B5563',
  },
});
