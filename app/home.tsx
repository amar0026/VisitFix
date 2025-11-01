import React, { useState } from "react";
import{View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,ScrollView,Image,StatusBar} from "react-native";
import { useNavigation } from "@react-navigation/native";
type UserType = "broker" | "builder";
interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  designation: string;
  gstinMember: string;
  panNumber: string;
}
const VisitfixRegister: React.FC = () => {
  const [userType, setUserType] = useState<UserType>("builder");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    designation: "",
    gstinMember: "",
    panNumber: "",
  });
  const handleInputChange = (key: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };
  const handleRegister = (): void => {
    console.log("Registration data:", { userType, ...formData });
    Alert.alert("Registration Submitted!", "Your registration data has been logged.");
  };
  const handleUserTypeChange = (type: UserType): void => {
    setUserType(type);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/dquki4xol/image/upload/v1761894404/full-shot-family-members-silhouettes-outdoors_23-2150039658_qmghjc.webp",
          }}
          style={styles.headerImage}
        />
        <View style={styles.gradientOverlay} />
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.logoGrid}>
          <View style={styles.logoRow}>
            <View style={styles.logoSquare} />
            <View style={styles.logoSquare} />
          </View>
          <View style={styles.logoRow}>
            <View style={styles.logoSquare} />
            <View style={styles.logoSquare} />
          </View>
        </View>
        <Text style={styles.logoText}>
          Visit<Text style={styles.logoBlue}>fix</Text>
        </Text>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => handleUserTypeChange("broker")}
          style={[
            styles.toggleButton,
            userType === "broker" ? styles.toggleActive : styles.toggleInactive,
          ]}
        >
          <Text
            style={userType === "broker" ? styles.toggleTextActive : styles.toggleTextInactive}
          >
            Broker
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleUserTypeChange("builder")}
          style={[
            styles.toggleButton,
            userType === "builder" ? styles.toggleActiveBlue : styles.toggleInactive,
          ]}
        >
          <Text
            style={userType === "builder" ? styles.toggleTextActive : styles.toggleTextInactive}
          >
            Builder
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>Verification Required</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={formData.fullName}
          onChangeText={(text) => handleInputChange("fullName", text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Company name"
          value={formData.companyName}
          onChangeText={(text) => handleInputChange("companyName", text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Designation"
          value={formData.designation}
          onChangeText={(text) => handleInputChange("designation", text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, styles.inputError]}
          placeholder="Scroma Member"
          value={formData.gstinMember}
          onChangeText={(text) => handleInputChange("gstinMember", text)}
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, styles.inputError]}
          placeholder="PAN number"
          value={formData.panNumber}
          onChangeText={(text) => handleInputChange("panNumber", text)}
          placeholderTextColor="#888"
          autoCapitalize="characters"
          maxLength={10}
        />
        <Text style={styles.warningText}>Please scanna your credit cards magisk</Text>
      </View>
      <Text style={styles.termsText}>Terms of service</Text>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister} activeOpacity={0.8}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default VisitfixRegister;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  imageContainer: {
    height: 190,
    overflow: "hidden",
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: -30,
    marginBottom: 20,
  },
  logoGrid: {
    flexDirection: "column",
    marginBottom: 5,
  },
  logoRow: {
    flexDirection: "row",
  },
  logoSquare: {
    width: 6,
    height: 6,
    backgroundColor: "#4A90E2",
    margin: 1,
    borderRadius: 1,
  },
  logoText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
  logoBlue: {
    color: "#4A90E2",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: "#333",
    borderColor: "#333",
  },
  toggleActiveBlue: {
    backgroundColor: "#4A90E2",
    borderColor: "#4A90E2",
  },
  toggleInactive: {
    backgroundColor: "#FFF",
    borderColor: "#CCC",
  },
  toggleTextActive: {
    color: "#FFF",
    fontWeight: "600",
  },
  toggleTextInactive: {
    color: "#333",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 15,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 10,
    fontSize: 15,
    color: "#000",
  },
  inputError: {
    borderColor: "#FF6B6B",
  },
  warningText: {
    color: "#FF6B6B",
    fontSize: 12,
    marginTop: 5,
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    marginTop: 20,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  registerButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
});