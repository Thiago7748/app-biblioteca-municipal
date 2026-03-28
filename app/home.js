import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import BookCard from '../components/BookCard';
import BottomNav from '../components/BottomNav';

export default function Home() {
  const router = useRouter();
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLivros() {
      try {
        const res = await fetch('https://n8n.srv1483391.hstgr.cloud/webhook/livros');
        const data = await res.json();
        const arrayLivros = Array.isArray(data) ? data : (data && data.titulo ? [data] : []);
        setLivros(arrayLivros.slice(0, 4));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchLivros();
  }, []);

 const abrirDetalhes = (livro) => {
    //Enviando TODOS os dados para a tela de detalhes
    router.push({
      pathname: '/detalhes',
      params: { 
        titulo: livro.titulo, 
        autor: livro.autor, 
        capa_url: livro.capa_url,
        resumo: livro.resumo, // Resumo do livro, se disponível
        status: livro.status // Status do livro, se disponível (Disponível ou Indisponível)
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 100 }}>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Buscar livros, autores..." placeholderTextColor="#888" />
        </View>

        <Text style={styles.headerTitle}>Destaques da Semana</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#0066cc" style={{ marginTop: 50 }} />
        ) : (
          <View style={styles.gridContainer}>
            {livros.map((livro) => (
              <View key={livro.id?.toString() || Math.random().toString()} style={styles.gridItem}>
                <BookCard data={livro} onPress={() => abrirDetalhes(livro)} />
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity onPress={() => router.push('/avisos')} style={styles.linkContainer}>
          <Text style={styles.linkText}>Consultar Avisos</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#f5f5f5" },
  scrollArea: { flex: 1, paddingTop: 50 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 25,
    marginTop: 15,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, fontSize: 16, color: "#333" },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    marginBottom: 0,
  },
  gridItem: { width: "45%", alignItems: "center", marginBottom: 20 },

  linkContainer: {
    paddingHorizontal: 20,
    marginTop: 0,
    paddingBottom: 10,
    alignItems: "center",
  },
  linkText: { fontSize: 18, fontWeight: "bold", color: "#0066cc" },
});