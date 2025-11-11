import { Link, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(21);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChangeText = (text, index) => {
    // Only allow numbers
    if (text && !/^\d+$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Move to next input if text entered
    if (text && index < 4) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    } else {
      setActiveIndex(index);
    }

    // Auto verify when 5 digits entered
    if (index === 4 && text) {
      setTimeout(() => {
        handleVerify(newOtp);
      }, 300);
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace
    if (e.nativeEvent.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1]?.focus();
        setActiveIndex(index - 1);
      }
    }
  };

  const handleVerify = (otpToVerify = otp) => {
    const enteredOtp = otpToVerify.join("");
    if (enteredOtp.length === 5) {
      console.log("OTP Entered:", enteredOtp);
      alert(`Verifying OTP: ${enteredOtp}`);
      // Navigate to next page
      try {
        router.push('/login4');
      } catch (error) {
        console.log('Navigation error:', error);
      }
    } else {
      alert("Please enter complete 5-digit code");
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(21);
      setCanResend(false);
      setOtp(["", "", "", "", ""]);
      setActiveIndex(0);
      inputRefs.current[0]?.focus();
      alert("OTP Resent!");
      // Add your resend OTP logic here
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
            <Link href="/login2">
                           <Text style={styles.backIcon}>←</Text>
                                </Link>
        
        </TouchableOpacity>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.gridIcon}>
            <View style={styles.gridRow}>
              <View
                style={[styles.gridSquare, { backgroundColor: "#4A90E2" }]}
              />
              <View
                style={[styles.gridSquare, { backgroundColor: "#4A90E2" }]}
              />
            </View>
            <View style={styles.gridRow}>
              <View
                style={[styles.gridSquare, { backgroundColor: "#4A90E2" }]}
              />
              <View
                style={[styles.gridSquare, { backgroundColor: "#4A90E2" }]}
              />
            </View>
          </View>
          <Text style={styles.logoText}>
            Visit<Text style={styles.logoBlue}>fix</Text>
          </Text>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedText}>✓</Text>
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter verification code</Text>
        <Text style={styles.subtitle}>
          We sent a 5-digit code to{" "}
          <Text style={styles.phoneNumber}>85xxxxxx82</Text>
        </Text>

        {/* 5-Digit OTP Input Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <View
              key={index}
              style={[
                styles.otpBox,
                activeIndex === index && styles.otpBoxActive,
              ]}
            >
              <TextInput
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.hiddenInput}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                onFocus={() => setActiveIndex(index)}
                keyboardType="number-pad"
                maxLength={1}
                selectTextOnFocus
                returnKeyType={index === 4 ? "done" : "next"}
              />
              {digit !== "" ? (
                <View style={styles.otpDot} />
              ) : (
                activeIndex === index && <View style={styles.otpCursor} />
              )}
            </View>
          ))}
        </View>

        {/* Timer */}
        <View style={styles.timerContainer}>
          <View style={styles.timerIcon}>
            <Text style={styles.timerIconText}>⏱</Text>
          </View>
          <Text style={styles.timerText}>{formatTime(timer)}</Text>
        </View>

        {/* Resend OTP */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the OTP? </Text>
          <TouchableOpacity onPress={handleResend} disabled={!canResend}>
            <Text
              style={[styles.resendLink, !canResend && styles.resendDisabled]}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={[
            styles.verifyButton,
            otp.join("").length === 5 && styles.verifyButtonActive,
          ]}
          onPress={() => handleVerify()}
          activeOpacity={0.8}
        >
          <Text style={styles.verifyButtonText}>Verify Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#dbdbdeff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  backIcon: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  gridIcon: {
    marginRight: 8,
  },
  gridRow: {
    flexDirection: "row",
  },
  gridSquare: {
    width: 6,
    height: 6,
    margin: 1,
    borderRadius: 1,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#050505",
  },
  logoBlue: {
    color: "#4A90E2",
  },
  verifiedBadge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#4A90E2",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  verifiedText: {
    color: "white",
    fontSize: 10,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C3E50",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginBottom: 30,
  },
  phoneNumber: {
    color: "#333",
    fontWeight: "600",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 12,
  },
  otpBox: {
    width: 55,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#F8F9FA",
    borderWidth: 2,
    borderColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  otpBoxActive: {
    borderColor: "#2196F3",
    backgroundColor: "#FFFFFF",
  },
  hiddenInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    fontSize: 24,
    textAlign: "center",
  },
  otpDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#333",
  },
  otpCursor: {
    width: 2,
    height: 22,
    backgroundColor: "#2196F3",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  timerIcon: {
    marginRight: 5,
  },
  timerIconText: {
    fontSize: 18,
  },
  timerText: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  resendText: {
    fontSize: 13,
    color: "#666",
  },
  resendLink: {
    fontSize: 13,
    color: "#2196F3",
    fontWeight: "600",
  },
  resendDisabled: {
    color: "#999",
  },
  verifyButton: {
    backgroundColor: "#B0BEC5",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  verifyButtonActive: {
    backgroundColor: "#2196F3",
  },
  verifyButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});