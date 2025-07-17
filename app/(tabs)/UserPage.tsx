import { Feather, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const features = [
  {
    name: "Watch Legal Videos",
    description: "Browse and watch legal education videos.",
    route: "LegalContent",
    icon: <Feather name="video" size={32} color="#d4a017" />,
  },
  {
    name: "Book Appointment",
    description: "Schedule a meeting with a lawyer.",
    route: "Appointments",
    icon: <MaterialIcons name="event-available" size={32} color="#d4a017" />,
  },
  {
    name: "Message & Call Lawyer",
    description: "Chat or call your lawyer directly.",
    route: "MessageCall",
    icon: <Ionicons name="call" size={32} color="#d4a017" />,
  },
  {
    name: "Profile Settings",
    description: "Update your personal information.",
    route: "ProfileSettings",
    icon: <FontAwesome5 name="user-cog" size={28} color="#d4a017" />,
  },
  {
    name: "Notifications",
    description: "View your latest notifications.",
    route: "Notifications",
    icon: <Ionicons name="notifications" size={32} color="#d4a017" />,
  },
  {
    name: "Legal Education",
    description: "Access articles and resources.",
    route: "UserEducation",
    icon: <MaterialIcons name="school" size={32} color="#d4a017" />,
  },
];

const userStatistics = [
  { label: "Appointments", value: "5", change: "+1" },
  { label: "Messages", value: "12", change: "+3" },
  { label: "Videos Watched", value: "8", change: "+2" },
];

const userRecentActivities = [
  {
    id: 1,
    title: "Appointment booked with Ama Kwarteng",
    time: "2 hours ago",
    type: "appointment",
  },
  {
    id: 2,
    title: "Watched: Understanding Land Ownership",
    time: "Yesterday",
    type: "video",
  },
  { id: 3, title: "Profile updated", time: "2 days ago", type: "profile" },
];

import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LegalContent: undefined;
  Appointments: undefined;
  MessageCall: undefined;
  ProfileSettings: undefined;
  Notifications: undefined;
  UserEducation: undefined;
  Settings: undefined;
  ChatBot: undefined;
};

export default function UserLandingScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [showChatModal, setShowChatModal] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Welcome, User!</Text>
            <Text style={styles.headerSubtitle}>
              Your legal tools and resources in one place.
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => navigation.navigate("Settings")}
            >
              <Text style={{ color: "#d4a017", fontWeight: "bold" }}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarButton}>
              <FontAwesome5 name="user-circle" size={28} color="#d4a017" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Statistics Grid */}
        <View style={styles.statsGrid}>
          {userStatistics.map((stat) => (
            <TouchableOpacity
              key={stat.label}
              style={styles.statCard}
              onPress={() => {
                if (stat.label === "Appointments") {
                  navigation.navigate("Appointments");
                }
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.statLabel}>{stat.label}</Text>
              <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginTop: 8 }}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text
                  style={[
                    styles.statChange,
                    stat.change.startsWith("+") ? { color: "#22c55e" } : { color: "#ef4444" },
                  ]}
                >
                  {stat.change}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Features */}
        <View style={styles.featuresGrid}>
          {features.map((feature) => (
            <TouchableOpacity
              key={feature.name}
              style={styles.featureCard}
              onPress={() => navigation.navigate(feature.route)}
              activeOpacity={0.85}
            >
              <View style={styles.featureIcon}>{feature.icon}</View>
              <View style={{ flex: 1 }}>
                <Text style={styles.featureName}>{feature.name}</Text>
                <Text style={styles.featureDesc}>{feature.description}</Text>
              </View>
              <Feather name="chevron-right" size={22} color="#d4a017" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Recent Activity */}
        <View style={styles.activitySection}>
          <Text style={styles.activityTitle}>Recent Activity</Text>
          {userRecentActivities.map((activity) => (
            <View key={activity.id} style={styles.activityCard}>
              <View style={styles.activityIcon}>
                {activity.type === "appointment" && (
                  <View style={[styles.circleIcon, { backgroundColor: "#f9e7c1" }]}>
                    <Text style={{ color: "#d4a017", fontWeight: "bold" }}>A</Text>
                  </View>
                )}
                {activity.type === "video" && (
                  <View style={[styles.circleIcon, { backgroundColor: "#bfdbfe" }]}>
                    <Text style={{ color: "#2563eb", fontWeight: "bold" }}>V</Text>
                  </View>
                )}
                {activity.type === "profile" && (
                  <View style={[styles.circleIcon, { backgroundColor: "#bbf7d0" }]}>
                    <Text style={{ color: "#22c55e", fontWeight: "bold" }}>P</Text>
                  </View>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.activityText}>{activity.title}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Chat Button */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate("ChatBot")}
        activeOpacity={0.85}
      >
        <MaterialIcons name="smart-toy" size={28} color="#fff" />
        <Text style={{ color: "#fff", marginLeft: 8, fontWeight: "bold" }}>Chat Bot</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 18,
    paddingHorizontal: 18,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  headerSubtitle: {
    color: "#4a4a4a",
    marginTop: 4,
    fontSize: 15,
  },
  settingsButton: {
    borderWidth: 1,
    borderColor: "#d4a017",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  avatarButton: {
    borderWidth: 1,
    borderColor: "#d4a017",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginHorizontal: 18,
    marginBottom: 18,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  statLabel: {
    color: "#555",
    fontSize: 14,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  statChange: {
    fontSize: 14,
    fontWeight: "bold",
  },
  featuresGrid: {
    marginHorizontal: 18,
    marginBottom: 18,
  },
  featureCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginRight: 14,
    borderRadius: 8,
  },
  featureName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },
  featureDesc: {
    color: "#555",
    fontSize: 13,
    marginTop: 2,
  },
  activitySection: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 18,
    padding: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
  },
  activityCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  activityIcon: {
    marginRight: 12,
  },
  circleIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  activityText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 15,
  },
  activityTime: {
    color: "#555",
    fontSize: 12,
    marginTop: 2,
  },
  chatButton: {
    position: "absolute",
    right: 24,
    bottom: 32,
    backgroundColor: "#d4a017",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 32,
    elevation: 4,
  },
});