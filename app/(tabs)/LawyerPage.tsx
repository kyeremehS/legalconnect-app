import React, { createContext, useContext, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";

// Context for user info
type User = {
  displayName: string;
  role: string;
};

const UserContext = createContext<User | undefined>(undefined);

const statistics = [
  { label: "Active Cases", value: "24", change: "+2" },
  { label: "Pending Reviews", value: "12", change: "-3" },
  { label: "Revenue", value: "$15,234", change: "+12%" },
];

const recentActivities: { id: number; title: string; time: string; type: "case" | "meeting" | "document" }[] = [
  { id: 1, title: "New case assigned", time: "2 hours ago", type: "case" },
  { id: 2, title: "Client meeting scheduled", time: "4 hours ago", type: "meeting" },
  { id: 3, title: "Document review completed", time: "Yesterday", type: "document" },
];

type ActivityIconProps = {
  type: "case" | "meeting" | "document";
};

function ActivityIcon({ type }: ActivityIconProps) {
  if (type === "case")
    return <MaterialIcons name="folder-open" size={24} color="#2563eb" />;
  if (type === "meeting")
    return <Feather name="calendar" size={24} color="#22c55e" />;
  if (type === "document")
    return <FontAwesome5 name="file-alt" size={22} color="#ef4444" />;
  return null;
}

export default function LawyerDashboardScreen() {
  const [user] = useState({
    displayName: "Ama Kwarteng",
    role: "Senior Legal Counsel",
  });

  return (
    <UserContext.Provider value={user}>
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }} contentContainerStyle={{ paddingBottom: 32 }}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Welcome back, {user.displayName}
            </Text>
            <Text style={styles.headerSubtitle}>
              Here's what's happening with your practice today.
            </Text>
          </View>

          {/* Statistics Grid */}
          <View style={styles.statsGrid}>
            {statistics.map((stat) => (
              <View key={stat.label} style={styles.statCard}>
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
              </View>
            ))}
          </View>

          {/* Recent Activity */}
          <View style={styles.activitySection}>
            <Text style={styles.activityTitle}>Recent Activity</Text>
            {recentActivities.map((activity) => (
              <View key={activity.id} style={styles.activityCard}>
                <View style={styles.activityIcon}>
                  <ActivityIcon type={activity.type} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.activityText}>{activity.title}</Text>
                  <Text style={styles.activityTime}>{activity.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    maxWidth: 700,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    marginTop: 32,
    marginBottom: 18,
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
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
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
  activitySection: {
    backgroundColor: "#fff",
    borderRadius: 16,
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
});