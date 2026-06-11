import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ProfileCardProps {
    name: string;
    studentId: string;
    department: string;
    bio: string;
    skills?: string[]; 
}

const ProfileCard = ({
    name,
    studentId,
    department,
    bio,
    skills,
}: ProfileCardProps) => {
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("");

    const [followed, setFollowed] = useState(false);

    const handleFollow = () => {
        setFollowed(!followed);
    };

    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initials}</Text>
            </View>

            <Text style={styles.name}>{name}</Text>
            <Text style={styles.idBadge}>ID: {studentId}</Text>
            <Text style={styles.role}>{department}</Text>

            <View style={styles.divider} />

            <Text style={styles.bio}>{bio}</Text>

            <View style={styles.skillsContainer}>
                {skills?.map((skill, index) => (
                <View key={index} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                </View>
                ))}
            </View>


            <TouchableOpacity
                style={[
                    styles.button,
                    followed && styles.buttonFollowed,
                ]}
                onPress={handleFollow}
            >
                <Text
                    style={[
                        styles.buttonText,
                        followed && styles.buttonTextFollowed,
                    ]}
                >
                    {followed ? "Following ✓" : "Follow"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 28,
        width: "88%",
        alignItems: "center",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
        marginBottom: 20,
    },
    avatar: {
        width: 88,
        height: 88,
        borderRadius: 44,
        backgroundColor: "#0D9488",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    avatarText: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#0D1F4E",
        marginBottom: 2,
    },
    idBadge: {
        fontSize: 12,
        color: "#0D9488",
        backgroundColor: "#E1F5EE",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 20,
        marginBottom: 4,
        overflow: "hidden",
    },
    role: {
        fontSize: 14,
        color: "#64748B",
        marginBottom: 16,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "#E2E8F0",
        marginBottom: 16,
    },
    bio: {
        fontSize: 14,
        color: "#64748B",
        textAlign: "center",
        lineHeight: 22,
    },

    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: "#0D9488",
        backgroundColor: "transparent",
    },
    buttonFollowed: {
        backgroundColor: "#0D9488",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#0D9488",
    },
    buttonTextFollowed: {
        color: "#FFFFFF",
    },
    skillsContainer: {
  flexDirection: 'row',    // lay badges out horizontally
  flexWrap: 'wrap',        // wrap to next line when full
  justifyContent: 'center',
  marginTop: 12,
  gap: 8,
},
skillBadge: {
  backgroundColor: '#EFF6FF',
  borderRadius: 20,
  paddingHorizontal: 12,
  paddingVertical: 5,
  borderWidth: 1,
  borderColor: '#BFDBFE',
},
skillText: {
  fontSize: 12,
  color: '#1D4ED8',
  fontWeight: '500',
},

});

export default ProfileCard;