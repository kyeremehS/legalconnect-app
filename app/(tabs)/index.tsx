import { Feather, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const features = [
	{
		title: "AI Legal Assistant",
		description:
			"Get instant answers to your legal questions and understand complex legal concepts in simple terms.",
		icon: <MaterialIcons name="smart-toy" size={28} color="#d4a017" />,
	},
	{
		title: "Connect with Lawyers",
		description:
			"Chat, call, or video conference with verified lawyers who specialize in your specific legal needs.",
		icon: <Ionicons name="chatbubbles" size={28} color="#d4a017" />,
	},
	{
		title: "Legal Education",
		description:
			"Learn about your rights and legal processes through engaging short-form videos and interactive guides.",
		icon: <Feather name="video" size={28} color="#d4a017" />,
	},
];

const audience = [
	{
		number: "Individuals",
		label: "Personal Legal Matters",
		icon: <FontAwesome5 name="user" size={24} color="#050401" />,
	},
	{
		number: "Small Business",
		label: "Business Legal Support",
		icon: <FontAwesome5 name="briefcase" size={24} color="#050401" />,
	},
	{
		number: "Students",
		label: "Legal Education",
		icon: <FontAwesome5 name="book" size={24} color="#050401" />,
	},
	{
		number: "Families",
		label: "Family Legal Matters",
		icon: <FontAwesome5 name="users" size={24} color="#050401" />,
	},
];

const testimonials = [
	{
		quote:
			"The AI assistant helped me understand my rental agreement in minutes. When I needed more help, I was connected with a lawyer right away.",
		name: "Sarah Johnson",
		role: "Renter, New York",
	},
	{
		quote:
			"As a small business owner, LegalConnect has been invaluable. The short legal videos helped me understand contracts and business regulations.",
		name: "Michael Chen",
		role: "Small Business Owner",
	},
	{
		quote:
			"The platform made it easy to find a family lawyer and understand our options. The video consultations saved us so much time.",
		name: "Emily Rodriguez",
		role: "Parent, California",
	},
];

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type LandingScreenProps = {
	navigation: NativeStackNavigationProp<any>;
};

export default function LandingScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
				{/* Hero Section */}
				<View style={styles.hero}>
					<Text style={styles.heroTitle}>
						Legal Help for{" "}
						<Text style={styles.heroHighlight}>Everyone</Text>
					</Text>
					<Text style={styles.heroDesc}>
						Get instant legal guidance, connect with trusted lawyers, and learn
						your rights through short, engaging videos. All in one secure platform.
					</Text>
          <View style={styles.GetStartedButton}>
					<TouchableOpacity
						style={styles.heroButton}
						onPress={() => router.push("/SignUp")}
					>
						<Text style={styles.heroButtonText}>Get Started</Text>
						<Feather name="arrow-right" size={20} color="#fff" />
					</TouchableOpacity>
          	<TouchableOpacity
						style={styles.heroButton}
						onPress={() => router.push("/SignUp")}
					>
						<Text style={styles.heroButtonText}>For Consultant</Text>
						<Feather name="arrow-right" size={20} color="#fff" />
					</TouchableOpacity>
          </View>
					<Image
						source={require("../../assets/images/hero-image.webp")}
						style={styles.heroImage}
						resizeMode="cover"
					/>
				</View>

				{/* Features */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Your Legal Journey, Simplified</Text>
					{features.map((feature, idx) => (
						<View key={idx} style={styles.featureCard}>
							{feature.icon}
							<View style={{ marginLeft: 12 }}>
								<Text style={styles.featureTitle}>{feature.title}</Text>
								<Text style={styles.featureDesc}>{feature.description}</Text>
							</View>
						</View>
					))}
				</View>

				{/* Audience */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Who We Serve</Text>
					<View style={styles.audienceGrid}>
						{audience.map((item, idx) => (
							<View key={idx} style={styles.audienceCard}>
								{item.icon}
								<Text style={styles.audienceNumber}>{item.number}</Text>
								<Text style={styles.audienceLabel}>{item.label}</Text>
							</View>
						))}
					</View>
				</View>

				{/* CTA */}
				<View
					style={[
						styles.section,
						{ backgroundColor: "#d4a017", borderRadius: 16 },
					]}
				>
					<Text style={[styles.sectionTitle, { color: "#fff" }]}>
						Ready to Take Control of Your Legal Matters?
					</Text>
					<Text style={{ color: "#fff", marginBottom: 16 }}>
						Join thousands of users who trust LegalConnect for their legal needs.
						Get started with a free consultation today.
					</Text>
					<TouchableOpacity
						style={[styles.ctaButton, { backgroundColor: "#fff" }]}
						onPress={() => router.push("/SignUp")}
					>
						<Text
							style={{
								color: "#d4a017",
								fontWeight: "bold",
							}}
						>
							Start Free Consultation
						</Text>
						<Feather name="arrow-right" size={20} color="#d4a017" />
					</TouchableOpacity>
				</View>

				{/* Testimonials */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>What Our Users Say</Text>
					{testimonials.map((t, idx) => (
						<View key={idx} style={styles.testimonialCard}>
							<Text style={styles.testimonialQuote}>{t.quote}</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginTop: 8,
								}}
							>
								<View style={styles.testimonialAvatar}>
									<FontAwesome5 name="user" size={24} color="#d4a017" />
								</View>
								<View style={{ marginLeft: 8 }}>
									<Text style={styles.testimonialName}>{t.name}</Text>
									<Text style={styles.testimonialRole}>{t.role}</Text>
								</View>
							</View>
						</View>
					))}
				</View>
			</ScrollView>

			{/* Floating Chat Button */}
			<TouchableOpacity
				style={styles.chatButton}
				onPress={() => router.push("/Chat")}
			>
				<Ionicons name="chatbubble-ellipses" size={28} color="#fff" />
				<Text
					style={{
						color: "#fff",
						marginLeft: 8,
						fontWeight: "bold",
					}}
				>
					Chat
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	hero: {
		alignItems: "center",
		padding: 24,
		backgroundColor: "#fff",
	},
	heroTitle: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#222",
		marginBottom: 8,
		textAlign: "center",
	},
	heroHighlight: {
		color: "#d4a017",
	},
	heroDesc: {
		fontSize: 16,
		color: "#555",
		textAlign: "center",
		marginBottom: 16,
	},
	heroButton: {
		flexDirection: "row",
		backgroundColor: "#d4a017",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 24,
		alignItems: "center",
		marginBottom: 16,
	},
	heroButtonText: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16,
		marginRight: 8,
	},
	heroImage: {
		width: "100%",
		height: 180,
		borderRadius: 16,
		marginTop: 16,
	},
	section: {
		padding: 24,
		marginBottom: 16,
	},
	sectionTitle: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#222",
		marginBottom: 16,
		textAlign: "center",
	},
	featureCard: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f9f9f9",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
	},
	featureTitle: {
		fontWeight: "bold",
		fontSize: 16,
		color: "#222",
		marginBottom: 4,
	},
	featureDesc: {
		color: "#555",
		fontSize: 14,
	},
	audienceGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	audienceCard: {
		width: "48%",
		backgroundColor: "#f9f9f9",
		borderRadius: 12,
		padding: 16,
		alignItems: "center",
		marginBottom: 12,
	},
	audienceNumber: {
		fontWeight: "bold",
		fontSize: 16,
		color: "#d4a017",
		marginTop: 8,
	},
	audienceLabel: {
		color: "#555",
		fontSize: 13,
		textAlign: "center",
		marginTop: 4,
	},
	ctaButton: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 24,
		alignSelf: "center",
	},
	testimonialCard: {
		backgroundColor: "#f9f9f9",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
	},
	testimonialQuote: {
		color: "#555",
		fontSize: 14,
		marginBottom: 8,
		fontStyle: "italic",
	},
	testimonialAvatar: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: "#fff7e0",
		alignItems: "center",
		justifyContent: "center",
	},
	testimonialName: {
		fontWeight: "bold",
		color: "#222",
	},
	testimonialRole: {
		color: "#d4a017",
		fontSize: 12,
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
  GetStartedButton: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
    }

});