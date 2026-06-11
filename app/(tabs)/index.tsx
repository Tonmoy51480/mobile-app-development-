import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <StatusBar style="dark" />

            <ProfileCard
                name="Asadul Haque"
                studentId="22-12345-1"
                department="Computer Science — AIUB"
                bio="Passionate about mobile development and building tools that make everyday life easier."
                skills={["React Native", "JavaScript", "Node.js", "PostgreSQL"]}
            />

            <ProfileCard
                name="Rakib Rahman"
                studentId="22-67890-2"
                department="Computer Science — AIUB"
                bio="Interested in AI and full-stack web development. Loves competitive programming."
                skills={["Python", "Machine Learning", "React", "Django"]}
            />

            <ProfileCard
                name="Saad Al Rafi"
                studentId="22-54321-3"
                department="Computer Science — AIUB"
                bio="Aspiring software engineer with a passion for mobile apps and UI/UX design."
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F0F4F8",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 40,
    },
});