import { View, Text, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import NoticeCard from '../components/NoticeCard';
import BottomNav from '../components/BottomNav';

export default function AvisosScreen() {
  const router = useRouter();
  const [avisos, setAvisos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAvisos() {
      try {
        const res = await fetch('https://n8n.srv1483391.hstgr.cloud/webhook/avisos');
        const data = await res.json();
        const arrayAvisos = Array.isArray(data) ? data : (data && data.titulo ? [data] : []);
        
        // Limitação de 3 avisos para não sobrecarregar a tela
        setAvisos(arrayAvisos.slice(0, 3)); 
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchAvisos();
  }, []);

  return (
    <View style={styles.mainContainer}>
      
      {/* ScrollView com espaço no final para o menu não tampar o conteúdo */}
      <ScrollView style={styles.scrollArea} contentContainerStyle={{ paddingBottom: 120 }}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        {/* Título e Subtítulo Centralizados */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Mural de Avisos</Text>
          <Text style={styles.headerSubtitle}>
            Fique por dentro das novidades, eventos e comunicados importantes de nossa biblioteca.
          </Text>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0066cc" />
        ) : (
          <View style={styles.list}>
            {avisos.length > 0 ? (
              avisos.map((aviso) => (
                <NoticeCard key={aviso.id?.toString() || Math.random().toString()} data={aviso} />
              ))
            ) : (
              <Text style={styles.errorText}>Nenhum aviso encontrado.</Text>
            )}
          </View>
        )}
      </ScrollView>

      {/* Menu Inferior Fixo no rodapé */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollArea: { flex: 1, paddingTop: 50 },
  
  backButton: { paddingHorizontal: 20, marginBottom: 15 },
  backText: { fontSize: 16, color: '#0066cc', fontWeight: 'bold' },
  
  // estilos do cabeçalho com o subtítulo
  headerContainer: {
    paddingHorizontal: 20,
    marginBottom: 25,
    alignItems: 'center',
  },
  headerTitle: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 8, 
    color: '#333' 
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  
  list: { paddingHorizontal: 16 },
  errorText: { color: 'red', textAlign: 'center', marginTop: 20 },
});

