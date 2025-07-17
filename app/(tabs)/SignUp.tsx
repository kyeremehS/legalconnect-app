import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Left Section - Image */}
        <View style={styles.imageSection}>
          <Image
            source={require("../../assets/images/CoatofArms.webp")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.imageOverlay} />
        </View>

        {/* Right Section - Content */}
        <View style={styles.contentSection}>
          <Text style={styles.title}>Welcome to LegalConnect</Text>
          <Text style={styles.subtitle}>
            Your journey to legal success starts here. LegalConnect connects clients with legal consultants, making legal services accessible and efficient.
          </Text>
          <View style={styles.infoBox}>
            {/* <Text style={styles.infoText}>
              <Text style={{ fontWeight: "bold" }}>How it works:</Text> Sign up, connect with legal experts, and get the support you need.
            </Text> */}
            {/* <Text style={styles.infoText}>
              <Text style={{ fontWeight: "bold" }}>Steps to get started:</Text>
            </Text> */}
            {/* <View style={styles.list}>
              <Text style={styles.listItem}>• Create an account</Text>
              <Text style={styles.listItem}>• Browse legal consultants</Text>
              <Text style={styles.listItem}>• Connect and collaborate</Text>
            </View> */}
          </View>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => router.push("/SignUp")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff", // match landing page
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
    flexDirection: "column",
    width: "100%",
    maxWidth: 400,
    overflow: "hidden",
  },
  imageSection: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9A82520",
    paddingVertical: 32,
  },
  image: {
    width: 180,
    height: 140,
    borderRadius: 16,
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 100,
    backgroundColor: "#F9A82520",
    opacity: 0.3,
  },
  contentSection: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  titleHighlight: {
    color: "#d4a017",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#212121B0",
    fontSize: 17,
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 24,
  },
  infoBox: {
    marginBottom: 18,
    width: "100%",
    backgroundColor: "#f9f6f0",
    borderRadius: 12,
    padding: 12,
  },
  infoText: {
    color: "#212121B0",
    fontSize: 15,
    marginBottom: 8,
    textAlign: "left",
    lineHeight: 22,
  },
  list: {
    marginLeft: 12,
    marginTop: 4,
  },
  listItem: {
    color: "#212121B0",
    fontSize: 15,
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#d4a017",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 18,
    shadowColor: "#d4a017",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});