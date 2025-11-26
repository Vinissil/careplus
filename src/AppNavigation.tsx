// careplus/src/AppNavigation.tsx
import React from 'react';
import AuthStack from './navigation/AuthStack';
import { AuthProvider } from './context/AuthContext';

export default function AppNavigation() {
  // NÃO tem NavigationContainer aqui – quem cuida disso é o expo-router
  return (
    <AuthProvider>
      <AuthStack />
    </AuthProvider>
  );
}
