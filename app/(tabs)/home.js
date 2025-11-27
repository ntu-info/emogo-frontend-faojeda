// app/(tabs)/home.js
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../../assets/insideout/homepage.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay} pointerEvents="box-none">
          <View style={styles.titleWrap} />

          <View style={styles.bottomButtons}>
            <TouchableOpacity
              style={[styles.fakeTabButton, styles.fakeTabButtonLeft]}
              onPress={() => router.push("/(tabs)")}
            >
              <Text style={styles.fakeTabText}>Headquarters</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.fakeTabButton, styles.fakeTabButtonRight]}
              onPress={() => router.push("/(tabs)/memories")}
            >
              <Text style={styles.fakeTabText}>View Memories</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#000000",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleWrap: {
    height: Platform.OS === "ios" ? 56 : 48,
  },
  bottomButtons: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === "ios" ? 28 : 20,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  fakeTabButton: {
    flex: 1,
    backgroundColor: "#111827",
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  fakeTabButtonLeft: {},
  fakeTabButtonRight: {},
  fakeTabText: {
    color: "#F9FAFB",
    fontSize: 14,
    fontWeight: "700",
  },
});
