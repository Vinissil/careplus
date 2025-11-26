import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeCategoriesScreen from '../screens/HomeCategoriesScreen';
import DoctorDetailsScreen from '../screens/DoctorDetailsScreen';
import CalendarScreen from '../screens/CalendarScreen';

export type HomeStackParamList = {
  HomeCategories: undefined;
  DoctorDetails: undefined;
  Calendar: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeCategories"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeCategories" component={HomeCategoriesScreen} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetailsScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}
