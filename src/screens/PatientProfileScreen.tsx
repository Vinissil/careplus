import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default function PatientProfileScreen() {
  const patient = {
    name: 'Nome Paciente',
    role: 'PACIENTE',
    age: '24 Anos',
    bloodType: 'AB',
    height: '180 cm',
    weight: '80 kg',
    lastExam: {
      title: 'Último exame',
      doctorName: 'Nome do médico',
      examName: 'Exame',
      dateTime: 'Dia e Hora',
    },
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Text style={styles.patientName}>{patient.name}</Text>
            <Text style={styles.patientRole}>{patient.role}</Text>
          </View>

          <View style={styles.headerRight}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/709/709722.png',
              }}
              style={styles.avatar}
            />
          </View>

          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827343.png',
            }}
            style={styles.bell}
          />
        </View>

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <View style={styles.infoLabelRow}>
                <Text style={styles.infoLabel}>IDADE</Text>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
                  }}
                  style={styles.infoIcon}
                />
              </View>
              <Text style={styles.infoValue}>{patient.age}</Text>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.infoLabelRow}>
                <Text style={styles.infoLabel}>Tipo Sanguíneo</Text>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
                  }}
                  style={styles.infoIcon}
                />
              </View>
              <Text style={styles.infoValue}>{patient.bloodType}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <View style={styles.infoLabelRow}>
                <Text style={styles.infoLabel}>Altura</Text>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2223/2223615.png',
                  }}
                  style={styles.infoIcon}
                />
              </View>
              <Text style={styles.infoValue}>{patient.height}</Text>
            </View>

            <View style={styles.infoItem}>
              <View style={styles.infoLabelRow}>
                <Text style={styles.infoLabel}>Peso</Text>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/833/833481.png',
                  }}
                  style={styles.infoIcon}
                />
              </View>
              <Text style={styles.infoValue}>{patient.weight}</Text>
            </View>
          </View>
        </View>

        <View style={styles.lastExamCard}>
          <View style={styles.lastExamIconContainer}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1006/1006540.png',
              }}
              style={styles.lastExamIcon}
            />
          </View>
          <View style={styles.lastExamTextContainer}>
            <Text style={styles.lastExamTitle}>{patient.lastExam.title}</Text>
            <Text style={styles.lastExamLine}>{patient.lastExam.doctorName}</Text>
            <Text style={styles.lastExamLine}>{patient.lastExam.examName}</Text>
          </View>
          <View style={styles.lastExamRight}>
            <Text style={styles.lastExamRightText}>{patient.lastExam.dateTime}</Text>
          </View>
        </View>

        <View style={styles.optionCard}>
          <View style={styles.optionIconCircle}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/947/947674.png',
              }}
              style={styles.optionIcon}
            />
          </View>
          <Text style={styles.optionText}>Configurar Objetivos</Text>
        </View>

        <View style={styles.optionCard}>
          <View style={[styles.optionIconCircle, { backgroundColor: '#F97316' }]}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
              }}
              style={styles.optionIcon}
            />
          </View>
          <Text style={styles.optionText}>Clinicas e Médicos Favoritos</Text>
        </View>
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
  header: {
    backgroundColor: BLUE,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  patientName: {
    fontSize: 16,
    color: '#0F172A',
    textDecorationLine: 'underline',
  },
  patientRole: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  headerRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#fff',
  },
  bell: {
    width: 22,
    height: 22,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  infoCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoItem: {
    width: '48%',
  },
  infoLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  infoIcon: {
    width: 18,
    height: 18,
    marginLeft: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 4,
  },
  lastExamCard: {
    backgroundColor: BLUE,
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  lastExamIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  lastExamIcon: {
    width: 22,
    height: 22,
  },
  lastExamTextContainer: {
    flex: 1,
  },
  lastExamTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  lastExamLine: {
    fontSize: 12,
    color: '#E5E7EB',
  },
  lastExamRight: {
    alignItems: 'flex-end',
  },
  lastExamRightText: {
    fontSize: 12,
    color: '#E5E7EB',
  },
  optionCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EC4899',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionIcon: {
    width: 18,
    height: 18,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
});
