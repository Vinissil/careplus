import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import PatientProfileScreen from '../screens/PatientProfileScreen';
import ConsultationsScreen from '../screens/ConsultationsScreen';
import HeartScreen from '../screens/HeartScreen';
import AccountScreen from '../screens/AccountScreen';

export type MainTabsParamList = {
  Consultations: undefined;
  PatientProfile: undefined;
  Home: undefined;
  Heart: undefined;
  Account: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 5,
          height: 104,
        },
        tabBarIcon: ({ focused }) => {
          let uri: string;

          switch (route.name) {
            case 'Consultations':
              uri = 'https://cdn-icons-png.flaticon.com/512/2966/2966487.png';
              break;
            case 'PatientProfile':
              uri = 'https://cdn-icons-png.flaticon.com/512/387/387561.png';
              break;
            case 'Home':
              uri = 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png';
              break;
            case 'Heart':
              uri = 'https://cdn-icons-png.flaticon.com/512/833/833472.png';
              break;
            case 'Account':
              uri = 'https://cdn-icons-png.flaticon.com/512/747/747376.png';
              break;
            default:
              uri = 'https://cdn-icons-png.flaticon.com/512/2966/2966487.png';
          }

          if (route.name === 'Home') {
            return (
              <View
                style={[
                  styles.centerIconContainer,
                  focused && styles.centerIconFocused,
                ]}
              >
                <Image source={{ uri }} style={styles.centerIcon} />
              </View>
            );
          }

          return (
            <Image
              source={{ uri }}
              style={[styles.icon, { opacity: focused ? 1 : 0.6 }]}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Consultations" component={ConsultationsScreen} />
      <Tab.Screen name="PatientProfile" component={PatientProfileScreen} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Heart" component={HeartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 46,
    height: 28,
    resizeMode: 'contain',
  },
  centerIconContainer: {
    width: 82,
    height: 82,
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIconFocused: {
    backgroundColor: '#5B8DEF',
  },
  centerIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
});
