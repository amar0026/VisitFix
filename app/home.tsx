
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const VisitfixRegister = () => {
  const navigation= useNavigation();
  const [userType, setUserType] = useState("builder");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    designation: "",
    owner: "",
    sourcingManager: "",
    salesTeam: "",
  });

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegister = () => {
    console.log("Registration data:", { userType, ...formData });
    Alert.alert(
      "Registration Submitted!",
      "Your registration data has been logged."
    );
 navigation.navigate("home2" as never);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" />
     {/* <View style={styles.container}> */}
      
      <Image 
        source={{uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762838657/Group_1558_vw9vrd.png' }}
        style={styles.image} 
      />
   

      {/* Logo Section */}
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

      {/* User Type Toggle */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => handleUserTypeChange("broker")}
          style={[
            styles.toggleButton,
            userType === "broker"
              ? styles.toggleActive
              : styles.toggleInactive,
          ]}
        >
          <Text
            style={
              userType === "broker"
                ? styles.toggleTextActive
                : styles.toggleTextInactive
            }
          >
            Broker
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleUserTypeChange("builder")}
          style={[
            styles.toggleButton,
            userType === "builder"
              ? styles.toggleActiveBlue
              : styles.toggleInactive,
          ]}
        >
          <Text
            style={
              userType === "builder"
                ? styles.toggleTextActive
                : styles.toggleTextInactive
            }
          >
            Builder
          </Text>
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>
        Create your <Text style={styles.titleBlue}>account</Text>
      </Text>
      <Text style={styles.subtitle}>Verification Required</Text>

      {/* Form - Blue Border Section */}
      <View style={styles.blueBorderContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>👤</Text>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Full name"
            value={formData.fullName}
            onChangeText={(text) => handleInputChange("fullName", text)}
            placeholderTextColor="#AAA"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>✉️</Text>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
            placeholderTextColor="#AAA"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.icon}>🏢</Text>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Company name"
            value={formData.companyName}
            onChangeText={(text) => handleInputChange("companyName", text)}
            placeholderTextColor="#AAA"
          />
        </View>
      </View>

      {/* Designation Label */}
      <View style={styles.labelContainer}>
        <Text style={styles.icon}>📋</Text>
        <Text style={styles.labelText}>Designation</Text>
      </View>

      {/* Red Border Section */}
      <View style={styles.formContainer}>
        <TextInput
          style={[styles.input, styles.inputError]}
          placeholder="Owner"
          value={formData.owner}
          onChangeText={(text) => handleInputChange("owner", text)}
          placeholderTextColor="#CCC"
        />

        <TextInput
          style={[styles.input, styles.inputError]}
          placeholder="Sourcing Manager"
          value={formData.sourcingManager}
          onChangeText={(text) => handleInputChange("sourcingManager", text)}
          placeholderTextColor="#CCC"
        />

        <TextInput
          style={[styles.input, styles.inputError]}
          placeholder="Sales Team"
          value={formData.salesTeam}
          onChangeText={(text) => handleInputChange("salesTeam", text)}
          placeholderTextColor="#CCC"
        />

        <Text style={styles.warningText}>
          (Owner-manager-sales team required)
        </Text>
      </View>

      {/* Terms */}
      <Text style={styles.termsText}>Terms of service</Text>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegister}
        activeOpacity={0.8}
      >

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
  image: {
     marginBottom: 25,
    width: "auto",
    height:510,
    resizeMode: 'cover', // or 'cover', 'stretch', 'repeat', 'center'
  },
  logoContainer: {
    marginBottom: 25,
    paddingHorizontal: 20,
    flexDirection:"row",
    gap:7,
  },
  imageContainer: {
   height:300
  },
  headerImage: {
    width: "auto",
    height: "auto",
    resizeMode: "contain",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  logoGrid: {
    flexDirection: "column",
    marginBottom: 8,
  },
  logoRow: {
    flexDirection: "row",
  },
  logoSquare: {
    width: 10,
    height: 10,
    backgroundColor: "#4A90E2",
    margin: 1,
    borderRadius: 1.5,
  },
  logoText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  logoBlue: {
    color: "#4A90E2",
  },
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 30,
    paddingHorizontal: 15,
    gap: 10,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: "#4A90E2",
    borderColor: "#4A90E2",
  },
  toggleActiveBlue: {
    backgroundColor: "#4A90E2",
    borderColor: "#4A90E2",
  },
  toggleInactive: {
    backgroundColor: "#FFF",
    borderColor: "#D0D0D0",
  },
  toggleTextActive: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
  },
  toggleTextInactive: {
    color: "#666",
    fontWeight: "500",
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  titleBlue: {
    color: "#4A90E2",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  blueBorderContainer: {
    marginHorizontal: 15,
    borderWidth: 3,
    borderColor: "#4A90E2",
    borderRadius: 10,
    padding: 15,
    backgroundColor: "#FFF",
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    height: 50,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    height: "100%",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  labelText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  formContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 12,
    fontSize: 15,
    color: "#000",
  },
  inputError: {
    borderColor: "#FF6B6B",
  },
  warningText: {
    color: "#FF6B6B",
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
  },
  termsText: {
    textAlign: "center",
    fontSize: 13,
    color: "#4A90E2",
    marginTop: 15,
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 16,
    borderRadius: 10,
    marginHorizontal: 35,
    marginBottom: 40,
    shadowColor: "#4A90E2",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  registerButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});