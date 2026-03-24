import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NoticeCard = ({ data }) => {
  const hasImage = data && data.imagem_url && data.imagem_url.length > 10;

  return (
    <View style={styles.card}>
      {hasImage ? (
        <Image
          source={{ uri: data.imagem_url }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.placeholder]} />
      )}

      <View style={styles.dateRow}>
        <Ionicons name="calendar-outline" size={14} color="#004e9f" />
        <Text style={styles.dateText}>{data.data || "Em breve"}</Text>
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {data.titulo}
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {data.mensagem}
      </Text>

      <View style={styles.footerRow}>
        <Text style={styles.tagText}>EVENTO</Text>
        <View style={styles.dot} />
        <Text style={styles.locationText}>Biblioteca Municipal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#004e9f',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    backgroundColor: '#f3f3f3',
    marginBottom: 16,
  },
  placeholder: {
    backgroundColor: '#e2e2e2',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#004e9f',
    marginLeft: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1a1c1c',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#414753',
    lineHeight: 22,
    marginBottom: 16,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#c1c6d5',
    marginHorizontal: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#414753',
  }
});

export default NoticeCard;