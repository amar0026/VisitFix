import React, { useState, useRef } from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
  TextInput 
} from 'react-native';
import { Link, useNavigation } from 'expo-router';
import type { TextInput as TextInputType } from 'react-native';


export default function SignIn() {
  const navigation = useNavigation();
  const [pin, setPin] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<TextInputType>(null);

  const handlePinChange = (text: string) => {

    const numericText = text.replace(/[^0-9]/g, '');


    const newPin = numericText.split('').slice(0, 4);
    const paddedPin = [...newPin, '', '', '', ''].slice(0, 4);

    setPin(paddedPin);
    setActiveIndex(newPin.length);


    if (newPin.length === 4) {
      setTimeout(() => {
        handleNext(paddedPin);
      }, 300);
    }
  };

  const handleNext = (pinToVerify = pin) => {
    const enteredPin = pinToVerify.join('');
    if (enteredPin.length === 4) {
      console.log('PIN Entered:', enteredPin);
      alert(`Verifying PIN: ${enteredPin}`);
      navigation.navigate("login3" as never);
    } else {
      alert('Please enter a 4-digit PIN');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

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

      <View style={styles.content}>
        <Text style={styles.title}>Let's Sign In</Text>
        <Text style={styles.subtitle}>Enter Your 4-digit PIN</Text>


        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={pin.join('')}
          onChangeText={handlePinChange}
          keyboardType="number-pad"
          maxLength={4}
          autoFocus={true}
          caretHidden={true}
        />


        <TouchableOpacity
          style={styles.pinContainer}
          onPress={focusInput}
          activeOpacity={1}
        >
          {pin.map((digit, index) => (
            <View
              key={index}
              style={[
                styles.pinBox,
                activeIndex === index && styles.pinBoxActive,
              ]}
            >
              {digit !== '' ? (
                <View style={styles.pinDot} />
              ) : (
                activeIndex === index && <View style={styles.pinCursor} />
              )}
            </View>
          ))}
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot PIN?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextButton, pin.join('').length === 4 && styles.nextButtonActive]}
          onPress={() => handleNext()}

          activeOpacity={0.8}
        >
          <Link href="/login3">
            <Text style={styles.nextButtonText}>Next</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#999',
    marginBottom: 30,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    height: 0,
    width: 0,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 15,
  },
  pinBox: {
    width: 65,
    height: 65,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pinBoxActive: {
    borderColor: '#2196F3',
    backgroundColor: '#F8FBFF',
  },
  pinDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  pinCursor: {
    width: 2,
    height: 24,
    backgroundColor: '#2196F3',
  },
  forgotContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#B0BEC5',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  nextButtonActive: {
    backgroundColor: '#2196F3',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});