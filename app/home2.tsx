import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useRouter } from "expo-router";
export default function VerificationPending() {
    const router = useRouter();

    const handleThankYou = () => {
        console.log('Thank You pressed - Navigate to home3');
        try {
            router.push('/home3');
        } catch (error) {
            console.log('Navigation error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Text style={styles.backIcon}>←</Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.title}>Verification Pending</Text>
                
                <Text style={styles.subtitle}>
                    Call 9999000099 to developer verification process or{'\n'}
                    Someone from our team will contact you shortly to{'\n'}
                    verify the details.
                </Text>

                <TouchableOpacity
                    style={styles.thankYouButton}
                    onPress={handleThankYou}
                    activeOpacity={0.8}
                >
                    <Text style={styles.thankYouButtonText}>Thank You</Text>
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
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 20,
        color: '#333',
        fontWeight: '600',
    },
    content: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1A1A1A',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 13,
        color: '#666',
        lineHeight: 20,
        marginBottom: 35,
        textAlign: 'center',
    },
    thankYouButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 16,
        paddingHorizontal: 80,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#2196F3',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    thankYouButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});