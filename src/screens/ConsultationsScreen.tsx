// careplus/src/screens/ConsultationsScreen.tsx
import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const BLUE = '#5B8DEF';
const LIGHT_BG = '#F2F2F2';
const CARD_BG = '#FFFFFF';

const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const WEEK_DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

type DayCell = { day: number } | null;

type RecentAppointment = {
  dateLabel: string;
  time: string;
};

export default function ConsultationsScreen() {
  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number>(today.getDate());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [recentAppointment, setRecentAppointment] =
    useState<RecentAppointment | null>(null);

  // GRID DE DIAS (respeita 28/30/31 automaticamente)
  const daysGrid: DayCell[] = useMemo(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstWeekday = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Dom

    const cells: DayCell[] = [];

    // espaços vazios antes do dia 1
    for (let i = 0; i < firstWeekday; i++) {
      cells.push(null);
    }

    // dias do mês
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d });
    }

    return cells;
  }, [currentMonth, currentYear]);

  // Quebra em semanas (linhas)
  const weeks: DayCell[][] = useMemo(() => {
    const rows: DayCell[][] = [];
    for (let i = 0; i < daysGrid.length; i += 7) {
      rows.push(daysGrid.slice(i, i + 7));
    }
    return rows;
  }, [daysGrid]);

  // HORÁRIOS de 06:00 até 20:00 de 15 em 15
  const timeSlots: string[] = useMemo(() => {
    const slots: string[] = [];
    const start = 6 * 60; // 06:00
    const end = 20 * 60; // 20:00

    for (let m = start; m <= end; m += 15) {
      const h = Math.floor(m / 60)
        .toString()
        .padStart(2, '0');
      const min = (m % 60).toString().padStart(2, '0');
      slots.push(`${h}:${min}`);
    }
    return slots;
  }, []);

  const handlePrevMonth = () => {
    const prev = new Date(currentYear, currentMonth - 1, 1);
    setCurrentMonth(prev.getMonth());
    setCurrentYear(prev.getFullYear());
    setSelectedDay(1);
  };

  const handleNextMonth = () => {
    const next = new Date(currentYear, currentMonth + 1, 1);
    setCurrentMonth(next.getMonth());
    setCurrentYear(next.getFullYear());
    setSelectedDay(1);
  };

  const formatSelectedDate = () => {
    const day = selectedDay.toString().padStart(2, '0');
    const monthName = MONTH_NAMES[currentMonth];
    return `${day} de ${monthName} de ${currentYear}`;
  };

  const handleBookAppointment = () => {
    if (!selectedTime) {
      Alert.alert('Atenção', 'Selecione um horário para marcar a consulta.');
      return;
    }

    const dateLabel = formatSelectedDate();

    setRecentAppointment({
      dateLabel,
      time: selectedTime,
    });

    Alert.alert('Consulta marcada', `Consulta em ${dateLabel} às ${selectedTime}.`);
  };

  // EDITAR consulta marcada
  const handleEditRecent = () => {
    if (!recentAppointment) return;

    Alert.alert(
      'Editar consulta',
      'Aqui você pode implementar uma tela para editar data/horário, médico, etc. (por enquanto é apenas ilustrativo).',
    );
  };

  // CANCELAR consulta marcada
  const handleCancelRecent = () => {
    if (!recentAppointment) return;

    Alert.alert(
      'Cancelar consulta',
      'Tem certeza que deseja cancelar esta consulta?',
      [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim, cancelar',
          style: 'destructive',
          onPress: () => setRecentAppointment(null),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* TÍTULO */}
        <Text style={styles.screenTitle}>Calendário</Text>

        {/* CARD DO CALENDÁRIO (BRANCO, IGUAL Figma) */}
        <View style={styles.calendarCard}>
          <View style={styles.monthHeader}>
            <TouchableOpacity onPress={handlePrevMonth} style={styles.monthArrowButton}>
              <Text style={styles.monthArrowText}>{'<'}</Text>
            </TouchableOpacity>

            <Text style={styles.monthLabel}>
              {MONTH_NAMES[currentMonth]} {currentYear}
            </Text>

            <TouchableOpacity onPress={handleNextMonth} style={styles.monthArrowButton}>
              <Text style={styles.monthArrowText}>{'>'}</Text>
            </TouchableOpacity>
          </View>

          {/* Cabeçalho dos dias da semana */}
          <View style={styles.weekDaysRow}>
            {WEEK_DAYS.map((d) => (
              <Text key={d} style={styles.weekDayText}>
                {d}
              </Text>
            ))}
          </View>

          {/* Grid de dias */}
          {weeks.map((week, rowIndex) => (
            <View key={rowIndex} style={styles.weekRow}>
              {week.map((cell, cellIndex) => {
                if (!cell) {
                  return <View key={cellIndex} style={styles.dayCellEmpty} />;
                }

                const isSelected = cell.day === selectedDay;

                return (
                  <TouchableOpacity
                    key={cellIndex}
                    style={[styles.dayCell, isSelected && styles.dayCellSelected]}
                    onPress={() => setSelectedDay(cell.day)}
                  >
                    <Text
                      style={[
                        styles.dayCellText,
                        isSelected && styles.dayCellTextSelected,
                      ]}
                    >
                      {cell.day}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        {/* CARD DE HORÁRIOS (BRANCO) */}
        <View style={styles.scheduleCard}>
          <Text style={styles.sectionTitleInside}>Horário</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.timeScrollContent}
          >
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;
              return (
                <TouchableOpacity
                  key={time}
                  style={[styles.timeChip, isSelected && styles.timeChipSelected]}
                  onPress={() => setSelectedTime(time)}
                >
                  <Text
                    style={[
                      styles.timeChipText,
                      isSelected && styles.timeChipTextSelected,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={styles.bookButton}
            onPress={handleBookAppointment}
          >
            <Text style={styles.bookButtonText}>Marcar consulta</Text>
          </TouchableOpacity>
        </View>

        {/* NOVA CONSULTA (CASO TENHA MARCADO) */}
        <View style={styles.bottomWhiteArea}>
          {recentAppointment && (
            <>
              <Text style={styles.sectionTitle}>Consulta marcada recentemente</Text>

              <View style={[styles.appointmentCard, styles.newAppointmentCard]}>
                {/* Lado esquerdo: ícone + infos */}
                <View style={styles.recentLeft}>
                  <View style={styles.appointmentImagePlaceholder} />
                  <View style={styles.appointmentInfo}>
                    <Text style={styles.appointmentDoctor}>Nova consulta</Text>
                    <Text style={styles.appointmentSpecialty}>
                      {recentAppointment.dateLabel}
                    </Text>
                    <Text style={styles.appointmentMeta}>
                      ⭐ Nota • ⏰ {recentAppointment.time}
                    </Text>
                  </View>
                </View>

                {/* Lado direito: caderninho + X vermelho */}
                <View style={styles.recentActions}>
                  <TouchableOpacity
                    style={styles.actionButton}
                    onPress={handleEditRecent}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.editIcon}>📒</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.actionButton, styles.cancelButton]}
                    onPress={handleCancelRecent}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <Text style={styles.cancelIcon}>✕</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}

          {/* ÚLTIMAS CONSULTAS (ESTÉTICO, IGUAL Figma) */}
          <Text style={styles.sectionTitle}>Últimas Consultas</Text>

          <View style={styles.appointmentCard}>
            <View style={styles.appointmentImagePlaceholder} />
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentDoctor}>Nome do doutor</Text>
              <Text style={styles.appointmentSpecialty}>Especialização</Text>
              <Text style={styles.appointmentMeta}>⭐ Nota • ⏰ 8:00 am</Text>
            </View>
          </View>

          <View style={styles.appointmentCard}>
            <View style={styles.appointmentImagePlaceholder} />
            <View style={styles.appointmentInfo}>
              <Text style={styles.appointmentDoctor}>Nome do doutor</Text>
              <Text style={styles.appointmentSpecialty}>Especialização</Text>
              <Text style={styles.appointmentMeta}>⭐ Nota • ⏰ 8:00 am</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLUE, // fundo azul igual Figma
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
  },

  // CALENDÁRIO
  calendarCard: {
    backgroundColor: CARD_BG,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    marginBottom: 16,
  },
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  monthArrowButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  monthArrowText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  monthLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // <- corrigido
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  weekDayText: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  dayCellEmpty: {
    width: 32,
    height: 32,
  },
  dayCell: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCellSelected: {
    backgroundColor: '#C4DAFF',
  },
  dayCellText: {
    fontSize: 14,
    color: '#111827',
  },
  dayCellTextSelected: {
    fontWeight: '700',
  },

  // HORÁRIOS
  scheduleCard: {
    backgroundColor: CARD_BG,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    marginBottom: 16,
  },
  sectionTitleInside: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
    textAlign: 'center',
  },
  timeScrollContent: {
    paddingVertical: 8,
  },
  timeChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginRight: 8,
    backgroundColor: '#FFFFFF',
  },
  timeChipSelected: {
    backgroundColor: '#C4DAFF',
    borderColor: '#2563EB',
  },
  timeChipText: {
    fontSize: 14,
    color: '#111827',
  },
  timeChipTextSelected: {
    fontWeight: '700',
  },
  bookButton: {
    marginTop: 16,
    backgroundColor: BLUE,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // PARTE DE BAIXO (BRANCO)
  bottomWhiteArea: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 4,
    backgroundColor: LIGHT_BG,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
    marginLeft: 8,
  },
  appointmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
  },
  newAppointmentCard: {
    borderWidth: 1,
    borderColor: BLUE,
  },
  appointmentImagePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    marginRight: 12,
  },
  appointmentInfo: {
    flex: 1,
  },
  appointmentDoctor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  appointmentSpecialty: {
    fontSize: 13,
    color: '#4B5563',
    marginBottom: 2,
  },
  appointmentMeta: {
    fontSize: 12,
    color: '#6B7280',
  },

  // AÇÕES da consulta recente
  recentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  recentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  actionButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF2FF',
  },
  cancelButton: {
    marginLeft: 8,
  },
  editIcon: {
    fontSize: 16,
    color: '#111827',
  },
  cancelIcon: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: '700',
  },
});
