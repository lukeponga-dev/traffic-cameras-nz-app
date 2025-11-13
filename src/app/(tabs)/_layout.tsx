
import { Tabs } from 'expo-router';
import React from 'react';
import { Map, List, Star } from 'lucide-react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 16,
            left: 16,
            right: 16,
            elevation: 0,
            backgroundColor: 'hsla(var(--background) / 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: 99,
            height: 60,
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
        },
        tabBarActiveTintColor: 'hsl(var(--primary))',
        tabBarInactiveTintColor: 'hsl(var(--muted-foreground))',
      }}>
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => <Map size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ color, size }) => <List size={size} color={color} />,
        }}
      />
       <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, size }) => <Star size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
