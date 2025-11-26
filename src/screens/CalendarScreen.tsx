import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  navigation: any;
};

export default function CalendarScreen({}: Props) {
  const appointments = [
    {
      id: 1,
      doctorName: 'Nome do doutor',
      specialization: 'Especialização',
      rating: 4.8,
      time: '8:00 am',
    },
    {
      id: 2,
      doctorName: 'Nome do doutor',
      specialization: 'Especialização',
      rating: 4.8,
      time: '8:00 am',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.blueArea}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827343.png',
            }}
            style={styles.bell}
          />

          <Text style={styles.title}>Calendário</Text>

          <View style={styles.calendarCard}>
            <View style={styles.monthRow}>
              <Text style={styles.monthArrow}>{'<'}</Text>
              <Text style={styles.monthText}>Setembro</Text>
              <Text style={styles.monthArrow}>{'>'}</Text>
            </View>

            <View style={styles.daysRow}>
              <View style={[styles.dayItem, styles.daySelected]}>
                <Text style={styles.dayWeekSelected}>Seg</Text>
                <Text style={styles.dayNumberSelected}>24</Text>
              </View>

              <View style={styles.dayItem}>
                <Text style={styles.dayWeek}>Ter</Text>
                <Text style={styles.dayNumber}>25</Text>
              </View>

              <View style={styles.dayItem}>
                <Text style={styles.dayWeek}>Qua</Text>
                <Text style={styles.dayNumber}>26</Text>
              </View>

              <View style={styles.dayItem}>
                <Text style={styles.dayWeek}>Qui</Text>
                <Text style={styles.dayNumber}>27</Text>
              </View>

              <View style={styles.dayItem}>
                <Text style={styles.dayWeek}>Sex</Text>
                <Text style={styles.dayNumber}>28</Text>
              </View>
            </View>
          </View>

          <View style={styles.timeCard}>
            <Text style={styles.timeTitle}>Horário</Text>
            <View style={styles.timesRow}>
              <Text style={styles.timeText}>8:00</Text>
              <Text style={styles.timeText}>8:30</Text>
              <View style={styles.timeSelected}>
                <Text style={styles.timeSelectedText}>9:00</Text>
              </View>
              <Text style={styles.timeText}>9:30</Text>
              <Text style={styles.timeText}>10:00</Text>
            </View>
          </View>

          <Text style={styles.subtitle}>Últimas Consultas</Text>
        </View>

        <View style={styles.appointmentsList}>
          {appointments.map((item) => (
            <View key={item.id} style={styles.appointmentCard}>
              <View style={styles.appointmentLeft}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/4326/4326111.png',
                  }}
                  style={styles.appointmentImage}
                />
              </View>
              <View style={styles.appointmentMiddle}>
                <Text style={styles.appointmentDoctor}>{item.doctorName}</Text>
                <Text style={styles.appointmentSpecialization}>
                  {item.specialization}
                </Text>
                <View style={styles.ratingRow}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
                    }}
                    style={styles.starIcon}
                  />
                  <Text style={styles.ratingText}>Nota {item.rating}</Text>
                </View>
              </View>
              <View style={styles.appointmentRight}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2972/2972855.png',
                  }}
                  style={styles.clockIcon}
                />
                <Text style={styles.appointmentTime}>{item.time}</Text>
              </View>
            </View>
          ))}
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
    paddingBottom: 90,
  },
  blueArea: {
    backgroundColor: BLUE,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  bell: {
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  calendarCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  monthArrow: {
    fontSize: 18,
    color: '#6B7280',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 60,
    borderRadius: 20,
  },
  dayWeek: {
    fontSize: 12,
    color: '#6B7280',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  daySelected: {
    backgroundColor: '#BFDBFE',
  },
  dayWeekSelected: {
    fontSize: 12,
    color: '#1D4ED8',
  },
  dayNumberSelected: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D4ED8',
  },
  timeCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  timeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  timesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeText: {
    fontSize: 14,
    color: '#111827',
  },
  timeSelected: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: '#1D4ED8',
  },
  timeSelectedText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  appointmentsList: {
    paddingHorizontal: 16,
    marginTop: 12,
  },
  appointmentCard: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  appointmentLeft: {
    marginRight: 10,
  },
  appointmentImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  appointmentMiddle: {
    flex: 1,
  },
  appointmentDoctor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  appointmentSpecialization: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 12,
    color: '#4B5563',
  },
  appointmentRight: {
    alignItems: 'center',
  },
  clockIcon: {
    width: 16,
    height: 16,
    marginBottom: 2,
  },
  appointmentTime: {
    fontSize: 12,
    color: '#111827',
  },
});
