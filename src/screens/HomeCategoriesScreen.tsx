import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

type Props = {
  navigation: any;
};

type Category = {
  id: string;
  label: string;
  iconUri: string;
};

const categoriesRow1: Category[] = [
  {
    id: 'terapia',
    label: 'Terapia',
    iconUri: 'https://cdn-icons-png.flaticon.com/512/921/921071.png',
  },
  {
    id: 'exames',
    label: 'Exames',
    iconUri: 'https://cdn-icons-png.flaticon.com/512/2966/2966485.png',
  },
  {
    id: 'consultas',
    label: 'Consultas',
    iconUri: 'https://cdn-icons-png.flaticon.com/512/3209/3209265.png',
  },
];

const categoriesRow2: Category[] = [
  {
    id: 'fisioterapia',
    label: 'Fisioterapia',
    iconUri: 'https://cdn-icons-png.flaticon.com/512/2966/2966459.png',
  },
  {
    id: 'dentista',
    label: 'Dentista',
    iconUri: 'https://cdn-icons-png.flaticon.com/512/4326/4326111.png',
  },
  {
    id: 'agenda',
    label: 'Agenda',
    iconUri: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
  },
];

export default function HomeCategoriesScreen({ navigation }: Props) {
  const handleMostrarMais = () => {
    navigation.navigate('PatientProfile');
  };

  const renderCategory = (item: Category) => (
    <View key={item.id} style={styles.categoryCard}>
      <Image source={{ uri: item.iconUri }} style={styles.categoryIcon} />
      <Text style={styles.categoryLabel}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerBlue}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1827/1827343.png',
            }}
            style={styles.bell}
          />

          <Text style={styles.welcomeText}>Bem Vindo(a), Nome da Pessoa</Text>

          <Text style={styles.categoriesTitle}>Categorias</Text>

          <View style={styles.categoriesGrid}>
            <View style={styles.categoriesRow}>{categoriesRow1.map(renderCategory)}</View>
            <View style={styles.categoriesRow}>{categoriesRow2.map(renderCategory)}</View>
          </View>
        </View>

        <TouchableOpacity onPress={handleMostrarMais}>
          <Text style={styles.showMoreText}>Mostrar mais</Text>
        </TouchableOpacity>

        <View style={styles.infoCard}>
          <View style={styles.infoLeft}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1006/1006540.png',
              }}
              style={styles.infoIcon}
            />
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.infoTitle}>Informações</Text>
            <Text style={styles.infoDescription}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
          </View>
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
  headerBlue: {
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
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  categoriesTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  categoriesGrid: {
    backgroundColor: 'transparent',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryCard: {
    width: '30%',
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  showMoreText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 14,
    color: BLUE,
    textDecorationLine: 'underline',
  },
  infoCard: {
    marginTop: 16,
    marginHorizontal: 16,
    backgroundColor: CARD_BG,
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoLeft: {
    marginRight: 12,
  },
  infoIcon: {
    width: 56,
    height: 56,
  },
  infoRight: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  infoDescription: {
    fontSize: 12,
    color: '#4B5563',
  },
});
