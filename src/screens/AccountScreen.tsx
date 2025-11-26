import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../context/AuthContext';

type Props = {
  navigation: any;
};

export default function AccountScreen({ navigation }: Props) {
  const {
    registeredEmail,
    registeredFullName,
    clearCredentials,
  } = useAuth();

 const handleLogout = () => {
  clearCredentials();

  // volta pro fluxo inicial (Splash) e limpa o histórico
  navigation.reset({
    index: 0,
    routes: [{ name: 'Splash' }],
  });
};

  const isLoggedIn = !!registeredEmail && !!registeredFullName;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      {isLoggedIn ? (
        <>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.value}>{registeredFullName}</Text>

          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.value}>{registeredEmail}</Text>
        </>
      ) : (
        <Text style={styles.text}>
          Nenhum usuário logado no momento. Faça login ou crie uma conta.
        </Text>
      )}

      {isLoggedIn && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: '#111827',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4B5563',
    marginBottom: 24,
  },
  logoutButton: {
    marginTop: 32,
    backgroundColor: '#EF4444',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});