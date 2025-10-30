import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useState, useEffect } from 'react';
import { Link, useNavigation } from "expo-router";
export default function OTPVerification() {
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [activeIndex, setActiveIndex] = useState(0);
    const [timer, setTimer] = useState(21);
    const [canResend, setCanResend] = useState(false);

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

    const handleNumberPress = (num) => {
        if (activeIndex < 5) {
            const newOtp = [...otp];
            newOtp[activeIndex] = num;
            setOtp(newOtp);
            setActiveIndex(activeIndex + 1);
        }
    };

    const handleBackspace = () => {
        if (activeIndex > 0) {
            const newOtp = [...otp];
            newOtp[activeIndex - 1] = '';
            setOtp(newOtp);
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join('');
        if (enteredOtp.length === 5) {
            console.log('OTP Entered:', enteredOtp);
            alert(`Verifying OTP: ${enteredOtp}`);
            // Add your verification logic here
        } else {
            alert('Please enter complete 5-digit code');
        }
    };

    const handleResend = () => {
        if (canResend) {
            setTimer(21);
            setCanResend(false);
            setOtp(['', '', '', '', '']);
            setActiveIndex(0);
            alert('OTP Resent!');
            // Add your resend OTP logic here
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>

                {/* Logo */}
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
                <Text style={styles.title}>Enter verification code</Text>
                <Text style={styles.subtitle}>
                    We sent a 5-digit code to <Text style={styles.phoneNumber}>85xxxxxx82</Text>
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
                            {digit !== '' ? (
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
                        <Text style={[styles.resendLink, !canResend && styles.resendDisabled]}>
                            Resend OTP
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Verify Button */}
                <TouchableOpacity
                    style={[styles.verifyButton, otp.join('').length === 5 && styles.verifyButtonActive]}
                    onPress={handleVerify}
                    activeOpacity={0.8}
                >

                    <Link href="/login4">
                        <Text style={styles.verifyButtonText}>Verify Code</Text>
                    </Link>

                </TouchableOpacity>
   {/* Phone Number Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
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
        paddingBottom: 15,
        paddingHorizontal: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#5B6FED',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    backIcon: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
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
        height: 100,
        position: 'relative',
        marginTop: 5,
    },
    buildingsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        bottom: 25,
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
        height: 35,
    },
    person: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    },
    personHead: {
        width: 7,
        height: 7,
        borderRadius: 3.5,
        backgroundColor: '#666',
        marginBottom: 2,
    },
    personBody: {
        width: 5,
        height: 12,
        backgroundColor: '#666',
        borderRadius: 1.5,
    },
    bench: {
        width: 18,
        height: 7,
        backgroundColor: '#8BC34A',
        position: 'absolute',
        bottom: 4,
        left: '40%',
        borderRadius: 2,
    },
    trafficCone: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#FF6B6B',
        position: 'absolute',
        bottom: 0,
        left: 35,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2C3E50',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginBottom: 35,
    },
    phoneNumber: {
        color: '#333',
        fontWeight: '600',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        gap: 12,
    },
    otpBox: {
        width: 55,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#F8F9FA',
        borderWidth: 2,
        borderColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    otpBoxActive: {
        borderColor: '#2196F3',
        backgroundColor: '#FFFFFF',
    },
    otpDot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#333',
    },
    otpCursor: {
        width: 2,
        height: 22,
        backgroundColor: '#2196F3',
    },
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    timerIcon: {
        marginRight: 5,
    },
    timerIconText: {
        fontSize: 18,
    },
    timerText: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
    resendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 25,
    },
    resendText: {
        fontSize: 13,
        color: '#666',
    },
    resendLink: {
        fontSize: 13,
        color: '#2196F3',
        fontWeight: '600',
    },
    resendDisabled: {
        color: '#999',
    },
    verifyButton: {
        backgroundColor: '#B0BEC5',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 25,
    },
    verifyButtonActive: {
        backgroundColor: '#2196F3',
    },
    verifyButtonText: {
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
        marginBottom: 12,
    },
    key: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        marginHorizontal: 6,
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
    },
});