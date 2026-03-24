import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';

export default function DetalhesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams(); 

  const statusLivro = params.status || 'Disponível';
  // Valor padrão de segurança
  const resumoLivro = params.resumo || 'Nenhum resumo foi cadastrado para este exemplar. Consulte o bibliotecário para mais detalhes sobre a obra.';

  return (
    <View style={styles.mainContainer}>
      
      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Botão de Voltar */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Detalhes da Obra</Text>

        <View style={styles.content}>
          {/* Capa do Livro */}
          <Image source={{ uri: params.capa_url }} style={styles.coverImage} />
          
          {/* Título e Autor */}
          <Text style={styles.bookTitle}>{params.titulo}</Text>
          <Text style={styles.bookAuthor}>Por {params.autor}</Text>

          {/* Flag de Status */}
          <View style={styles.statusBadge}>
            <View style={[styles.statusDot, { backgroundColor: statusLivro === 'Indisponível' ? '#ef4444' : '#22c55e' }]} />
            <Text style={styles.statusText}>{statusLivro}</Text>
          </View>

          {/* Resumo do Livro */}
          <View style={styles.resumoContainer}>
            <Text style={styles.resumoTitle}>Resumo</Text>
            <Text style={styles.resumoText}>{resumoLivro}</Text>
          </View>
        </View>

      </ScrollView>

      {/* Menu Inferior Fixo */}
      <BottomNav />
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: "#f5f5f5" },
  scrollArea: { flex: 1, paddingTop: 50 },

  backButton: { paddingHorizontal: 20, marginBottom: 10 },
  backText: { fontSize: 16, color: "#0066cc", fontWeight: "bold" },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#333",
  },

  content: { alignItems: "center", paddingHorizontal: 20 },

  coverImage: {
    width: 160,
    height: 240,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#ddd",
  },

  bookTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 5,
  },
  bookAuthor: { fontSize: 16, color: "#0066cc", marginBottom: 20 },

  // Estilos da Flag de Status
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#eee",
  },
  statusDot: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
  statusText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },

  // Estilos do Resumo
  resumoContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  resumoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 5,
  },
  resumoText: {
    fontSize: 15,
    color: "#666",
    lineHeight: 24,
    textAlign: "justify",
  },
});