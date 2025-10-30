import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import { useState } from 'react';
import { Link, useNavigation } from "expo-router";
export default function SignIn() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  const handleNumberPress = (num) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + num);
    }
  };

  const handleBackspace = () => {
    setPhoneNumber(phoneNumber.slice(0, -1));
  };

  const handleContinue = () => {
    if (phoneNumber.length === 10) {
      console.log('Phone Number:', countryCode + phoneNumber);
      // Add your navigation or OTP logic here
      alert(`Sending OTP to ${countryCode} ${phoneNumber}`);
      navigation.navigate("login2" as never);
    } else {
      alert('Please enter a valid 10-digit phone number');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={{ uri: '' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      ></ImageBackground>
      <View style={styles.header}>

        <View style={styles.logoContainer}>
          <View style={styles.gridIcon}>
            <View style={styles.gridRow}>
              <View style={[styles.gridSquare, { backgroundColor: '#4A90E2' }]} />
              <View style={[styles.gridSquare, { backgroundColor: '#4A90E2' }]} />
            </View>
            <View style={styles.gridRow}>
              <View style={[styles.gridSquare, { backgroundColor: '#4A90E2' }]} />
              <View style={[styles.gridSquare, { backgroundColor: '#4A90E2' }]} />
            </View>
          </View>
          <Text style={styles.logoText}>
            Visit<Text style={styles.logoBlue}>Fix</Text>
          </Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>✓</Text>
          </View>
        </View>


      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Let's Sign In</Text>
        <Text style={styles.subtitle}>auth nostrud exercitation ullamco laboris nisi ut</Text>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.phoneInputWrapper}>
            <View style={styles.countryCodeContainer}>
              <Text style={styles.countryCode}>{countryCode}</Text>
              <Text style={styles.dropdownIcon}>▼</Text>
            </View>
            <View style={styles.divider} />
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
        </View>
        {/* Phone Number Input */}
        <View style={styles.inputContainer}>
        </View>
        {/* Continue Button */}
        <TouchableOpacity
          style={[styles.continueButton, phoneNumber.length === 10 && styles.continueButtonActive]}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Link href="/login2">
            <Text style={styles.continueButtonText}>Continue</Text>
          </Link>

        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  gridIcon: {
    marginRight: 8,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridSquare: {
    width: 6,
    height: 6,
    margin: 1,
    borderRadius: 1,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#050505',
  },
  logoBlue: {
    color: '#4A90E2',
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  verifiedText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  illustrationContainer: {
    height: 120,
    position: 'relative',
    marginTop: 10,
  },
  buildingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 30,
  },
  building: {
    backgroundColor: '#E8E8E8',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
  },
  peopleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
  },
  person: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  personHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666',
    marginBottom: 2,
  },
  personBody: {
    width: 6,
    height: 15,
    backgroundColor: '#666',
    borderRadius: 2,
  },
  bench: {
    width: 20,
    height: 8,
    backgroundColor: '#8BC34A',
    position: 'absolute',
    bottom: 5,
    left: '43%',
    borderRadius: 2,
  },
  trafficCone: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF6B6B',
    position: 'absolute',
    bottom: 0,
    left: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13,
    color: '#999',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 55,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 10,
    color: '#666',
  },
  divider: {
    width: 1,
    height: 25,
    backgroundColor: '#DDD',
    marginRight: 15,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#B0BEC5',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  continueButtonActive: {
    backgroundColor: '#2196F3',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  keypad: {
    flex: 1,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  key: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  keyText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

});