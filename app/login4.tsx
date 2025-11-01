import { Text, View, StyleSheet, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import { Link, useRouter } from "expo-router";

export default function NewPINSetup() {
  const router = useRouter();
  const [newPin, setNewPin] = useState(['', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
  const [activeSection, setActiveSection] = useState('new'); // 'new' or 'confirm'
  const [activeIndex, setActiveIndex] = useState(0);
  const newPinRefs = useRef([]);
  const confirmPinRefs = useRef([]);

  // Auto-focus first input on mount
  useEffect(() => {
    if (newPinRefs.current[0]) {
      newPinRefs.current[0].focus();
    }
  }, []);

  const handleChangeText = (text, section, index) => {
    // Only allow numbers
    if (text && !/^\d+$/.test(text)) return;

    const digit = text.slice(-1); // Take only the last character

    if (section === 'new') {
      const updated = [...newPin];
      updated[index] = digit;
      setNewPin(updated);

      if (digit && index < 3) {
        newPinRefs.current[index + 1]?.focus();
        setActiveIndex(index + 1);
      } else if (digit && index === 3) {
        // Move to confirm section
        setActiveSection('confirm');
        setActiveIndex(0);
        setTimeout(() => {
          confirmPinRefs.current[0]?.focus();
        }, 100);
      }
    } else if (section === 'confirm') {
      const updated = [...confirmPin];
      updated[index] = digit;
      setConfirmPin(updated);

      if (digit && index < 3) {
        confirmPinRefs.current[index + 1]?.focus();
        setActiveIndex(index + 1);
      } else if (digit && index === 3) {
        // Check if PINs match
        setTimeout(() => {
          checkPinMatch(updated);
        }, 300);
      }
    }
  };

  const handleKeyPress = (e, section, index) => {
    if (e.nativeEvent.key === "Backspace") {
      if (section === 'new') {
        if (newPin[index] === '' && index > 0) {
          newPinRefs.current[index - 1]?.focus();
          setActiveIndex(index - 1);
        }
      } else if (section === 'confirm') {
        if (confirmPin[index] === '' && index > 0) {
          confirmPinRefs.current[index - 1]?.focus();
          setActiveIndex(index - 1);
        } else if (confirmPin[index] === '' && index === 0) {
          // Go back to new PIN section
          setActiveSection('new');
          setActiveIndex(3);
          newPinRefs.current[3]?.focus();
        }
      }
    }
  };

  const handleFocus = (section, index) => {
    setActiveSection(section);
    setActiveIndex(index);
  };

  const checkPinMatch = (confirmPinToCheck) => {
    const newPinStr = newPin.join('');
    const confirmPinStr = confirmPinToCheck.join('');

    if (newPinStr === confirmPinStr) {
      alert(`PIN Set Successfully: ${newPinStr}`);
      // Navigate to next page
      try {
        router.push('/login5');
      } catch (error) {
        console.log('Navigation error:', error);
      }
    } else {
      alert('PINs do not match. Please try again.');
      handleReset();
    }
  };

  const handleReset = () => {
    setNewPin(['', '', '', '']);
    setConfirmPin(['', '', '', '']);
    setActiveSection('new');
    setActiveIndex(0);
    setTimeout(() => {
      newPinRefs.current[0]?.focus();
    }, 100);
  };

  const handlePinBoxPress = (section, index) => {
    setActiveSection(section);
    setActiveIndex(index);
    if (section === 'new') {
      newPinRefs.current[index]?.focus();
    } else {
      confirmPinRefs.current[index]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
             <Link href="/login3">
                        <Text style={styles.backIcon}>←</Text>
                      </Link>
        
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter New 4-digit PIN</Text>
        <Text style={styles.subtitle}>
          Create a new PIN. Ensure it differs from{'\n'}previous ones for security
        </Text>

        {/* New PIN Section */}
        <View style={styles.pinSection}>
          <Text style={styles.label}>New PIN</Text>
          <View style={styles.pinContainer}>
            {newPin.map((digit, index) => (
              <TouchableOpacity
                key={`new-${index}`}
                style={[
                  styles.pinBox,
                  activeSection === 'new' && activeIndex === index && styles.pinBoxActive,
                ]}
                onPress={() => handlePinBoxPress('new', index)}
                activeOpacity={0.7}
              >
                <TextInput
                  ref={(ref) => (newPinRefs.current[index] = ref)}
                  style={styles.hiddenInput}
                  value={digit}
                  onChangeText={(text) => handleChangeText(text, 'new', index)}
                  onKeyPress={(e) => handleKeyPress(e, 'new', index)}
                  onFocus={() => handleFocus('new', index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  returnKeyType={index === 3 ? "next" : "next"}
                />
                {digit !== '' ? (
                  <View style={styles.pinDot} />
                ) : (
                  activeSection === 'new' && activeIndex === index && <View style={styles.pinCursor} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Confirm PIN Section */}
        <View style={styles.pinSection}>
          <Text style={styles.label}>Confirm PIN</Text>
          <View style={styles.pinContainer}>
            {confirmPin.map((digit, index) => (
              <TouchableOpacity
                key={`confirm-${index}`}
                style={[
                  styles.pinBox,
                  activeSection === 'confirm' && activeIndex === index && styles.pinBoxActive,
                ]}
                onPress={() => handlePinBoxPress('confirm', index)}
                activeOpacity={0.7}
              >
                <TextInput
                  ref={(ref) => (confirmPinRefs.current[index] = ref)}
                  style={styles.hiddenInput}
                  value={digit}
                  onChangeText={(text) => handleChangeText(text, 'confirm', index)}
                  onKeyPress={(e) => handleKeyPress(e, 'confirm', index)}
                  onFocus={() => handleFocus('confirm', index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  returnKeyType={index === 3 ? "done" : "next"}
                />
                {digit !== '' ? (
                  <View style={styles.pinDot} />
                ) : (
                  activeSection === 'confirm' && activeIndex === index && <View style={styles.pinCursor} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Reset Button */}
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleReset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#999',
    lineHeight: 20,
    marginBottom: 25,
  },
  pinSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  pinContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  pinBox: {
    width: 65,
    height: 65,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    borderWidth: 2,
    borderColor: '#C7D2FE',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  pinBoxActive: {
    borderColor: '#6366F1',
    backgroundColor: '#FFFFFF',
  },
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    fontSize: 24,
    textAlign: 'center',
  },
  pinDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1A1A1A',
  },
  pinCursor: {
    width: 2,
    height: 24,
    backgroundColor: '#6366F1',
  },
  resetButton: {
    backgroundColor: '#C7D2FE',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});