import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const BookCard = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.card}>
        <Image source={{ uri: data.capa_url }} style={styles.cover} />
        <Text style={styles.title} numberOfLines={2}>
          {data.titulo}
        </Text>
        <Text style={styles.author}>{data.autor}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 120,
    margin: 5,
    alignItems: "center",
  },
  cover: { width: 120, height: 180, backgroundColor: "#ccc", borderRadius: 8 },
  title: {
    fontWeight: "bold",
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#333",
  },
  author: { fontSize: 12, color: "#666", textAlign: "center" },
});

export default BookCard;