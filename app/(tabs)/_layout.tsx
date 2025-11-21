import { Tabs } from 'expo-router';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      
      
<Tabs.Screen
  name="Dashboard"
  options={{
    title: "Dashboard",
    tabBarIcon: ({ color }) => 
      <MaterialIcons name="dashboard" size={28} color={color} />
    ,
  }}
/>
      
<Tabs.Screen
  name="Social"
  options={{
    title: "Social",
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="video-library" size={28} color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="Tags"
  options={{
    title: "Tags",
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="local-offer" size={28} color={color} />
    ),
  }}
/>

<Tabs.Screen
  name="Brokers"
  options={{
    title: "Brokers",
    tabBarIcon: ({ color }) => (
      <MaterialIcons name="person" size={28} color={color} />
    ),
  }}
/>
      
    </Tabs>
  );
}
