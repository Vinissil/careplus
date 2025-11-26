// careplus/src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextType = {
  registeredEmail: string | null;
  registeredPassword: string | null;
  registeredFullName: string | null;
  loading: boolean;
  setCredentials: (email: string, password: string, fullName: string) => Promise<void>;
  clearCredentials: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = '@careplus_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registeredEmail, setRegisteredEmail] = useState<string | null>(null);
  const [registeredPassword, setRegisteredPassword] = useState<string | null>(null);
  const [registeredFullName, setRegisteredFullName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Carrega usuário salvo quando o app inicia
  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const { email, password, fullName } = JSON.parse(json);
          setRegisteredEmail(email);
          setRegisteredPassword(password);
          setRegisteredFullName(fullName);
        }
      } catch (error) {
        console.log('Erro ao carregar usuário do storage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStoredUser();
  }, []);

  const setCredentials = async (email: string, password: string, fullName: string) => {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedFullName = fullName.trim();

    setRegisteredEmail(normalizedEmail);
    setRegisteredPassword(password);
    setRegisteredFullName(normalizedFullName);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          email: normalizedEmail,
          password,
          fullName: normalizedFullName,
        })
      );
    } catch (error) {
      console.log('Erro ao salvar usuário no storage:', error);
    }
  };

  const clearCredentials = async () => {
    setRegisteredEmail(null);
    setRegisteredPassword(null);
    setRegisteredFullName(null);
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.log('Erro ao remover usuário do storage:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        registeredEmail,
        registeredPassword,
        registeredFullName,
        loading,
        setCredentials,
        clearCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
}
