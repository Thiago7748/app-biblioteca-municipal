import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.iconButton} onPress={() => router.replace('/home')}>
        <Ionicons name={pathname === '/home' ? 'home' : 'home-outline'} size={28} color={pathname === '/home' ? '#0066cc' : '#999'} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={() => alert('Favoritos em construção!')}>
        <Ionicons name="heart-outline" size={28} color="#999" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={() => alert('Perfil em construção!')}>
        <Ionicons name="person-outline" size={28} color="#999" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingBottom: Platform.OS === "ios" ? 50 : 40,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
  },
  iconButton: {
    paddingHorizontal: 20,
  },
});