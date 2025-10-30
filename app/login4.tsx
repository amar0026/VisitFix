import { Text, View, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useState } from 'react';
import { Link, useNavigation } from "expo-router";
export default function NewPINSetup() {
    const [newPin, setNewPin] = useState(['', '', '', '']);
    const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
    const [activeSection, setActiveSection] = useState('new'); // 'new' or 'confirm'
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNumberPress = (num) => {
        if (activeSection === 'new') {
            if (activeIndex < 4) {
                const updated = [...newPin];
                updated[activeIndex] = num;
                setNewPin(updated);

                if (activeIndex === 3) {
                    // Move to confirm section
                    setActiveSection('confirm');
                    setActiveIndex(0);
                } else {
                    setActiveIndex(activeIndex + 1);
                }
            }
        } else if (activeSection === 'confirm') {
            if (activeIndex < 4) {
                const updated = [...confirmPin];
                updated[activeIndex] = num;
                setConfirmPin(updated);

                if (activeIndex === 3) {
                    // Check if PINs match
                    setTimeout(() => {
                        checkPinMatch(updated);
                    }, 300);
                } else {
                    setActiveIndex(activeIndex + 1);
                }
            }
        }
    };

    const handleBackspace = () => {
        if (activeSection === 'new' && activeIndex > 0) {
            const updated = [...newPin];
            updated[activeIndex - 1] = '';
            setNewPin(updated);
            setActiveIndex(activeIndex - 1);
        } else if (activeSection === 'confirm' && activeIndex > 0) {
            const updated = [...confirmPin];
            updated[activeIndex - 1] = '';
            setConfirmPin(updated);
            setActiveIndex(activeIndex - 1);
        } else if (activeSection === 'confirm' && activeIndex === 0) {
            // Go back to new PIN section
            setActiveSection('new');
            setActiveIndex(3);
        }
    };

    const checkPinMatch = (confirmPinToCheck) => {
        const newPinStr = newPin.join('');
        const confirmPinStr = confirmPinToCheck.join('');

        if (newPinStr === confirmPinStr) {
            alert(`PIN Set Successfully: ${newPinStr}`);
            // Add your navigation or save logic here
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
    };

    const handlePinBoxPress = (section, index) => {
        setActiveSection(section);
        setActiveIndex(index);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Text style={styles.backIcon}>←</Text>
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

                        <Link href="/login5">
                            <Text style={styles.resetButtonText}>Reset</Text>
                        </Link>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        flexGrow: 1,
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
        marginBottom: 30,
    },
    pinSection: {
        marginBottom: 25,
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
    },
    pinBoxActive: {
        borderColor: '#6366F1',
        backgroundColor: '#FFFFFF',
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
        marginTop: 10,
        marginBottom: 30,
    },
    resetButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    keypad: {
        paddingHorizontal: 20,
        paddingBottom: 30,
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
        paddingVertical: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
    },
});