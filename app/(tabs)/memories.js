// app/(tabs)/memories.js
import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { MemoriesContext } from "./_layout";

export default function MemoriesScreen() {
  const router = useRouter();
  const { memories } = useContext(MemoriesContext);

  const renderItem = ({ item }) => {
    const time = new Date(item.timestamp).toLocaleString();
    return (
      <View style={styles.card}>
        <View style={[styles.stripe, { backgroundColor: item.color }]} />
        <View style={styles.cardContent}>
          <Text style={styles.emotion}>{item.emotion}</Text>
          <Text style={styles.note}>{item.note}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>All Core Memories</Text>
        <Text
          style={styles.back}
          onPress={() => router.push("/(tabs)/home")}
        >
          Back to Home
        </Text>
      </View>

      <View style={styles.container}>
        {memories.length === 0 ? (
          <Text style={styles.empty}>No memories yet.</Text>
        ) : (
          <FlatList
            data={memories}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#020617",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    alignItems: "center",
  },
  title: {
    color: "#F9FAFB",
    fontSize: 20,
    fontWeight: "700",
  },
  back: {
    color: "#38BDF8",
    fontSize: 14,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    padding: 12,
  },
  empty: {
    color: "#9CA3AF",
    fontSize: 14,
  },
  card: {
    flexDirection: "row",
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1F2937",
    backgroundColor: "#020617",
    overflow: "hidden",
  },
  stripe: {
    width: 8,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  emotion: {
    color: "#F9FAFB",
    fontWeight: "600",
    textTransform: "capitalize",
  },
  note: {
    color: "#E5E7EB",
    fontSize: 13,
    marginTop: 2,
  },
  time: {
    color: "#9CA3AF",
    fontSize: 11,
    marginTop: 4,
  },
});
