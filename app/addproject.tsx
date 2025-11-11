import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function AddProjectScreen() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        projectName: '',
        location: '',
        developerCompany: '',
        authorizedPerson: '',
        contactNumber: '',
        email: '',
        reraNo: '',
        notes: '',
    });

    const [showSuccess, setShowSuccess] = useState(false);

    const handleBack = () => {
        console.log('Back pressed');
        router.back();
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('Submit pressed', formData);
        setShowSuccess(true);
        // Add your submit logic here
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={handleBack}
                    activeOpacity={0.7}
                >
                    <Text style={styles.backIcon}>‹</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add your project</Text>
                <View style={styles.headerRight} />
            </View>

            <ScrollView
                style={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {/* Info Box */}
                <View style={styles.infoBox}>
                    <Text style={styles.headerTitle1}>Add project before this 2 step:</Text>

                    <Text style={styles.infoText}> 
            > fill project details {'\n'}
            > our team contact with you
                    </Text>
                    <View style={styles.successMessage}>
                        <Text style={styles.successIcon}>✓</Text>
                        <Text style={styles.successText}>Project added successfully</Text>
                    </View>

                </View>

                {/* Project Name */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.briefcaseIcon}>
                                <View style={styles.briefcaseTop} />
                                <View style={styles.briefcaseBody} />
                            </View>
                        </View>
                        <Text style={styles.label}>Project Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.projectName}
                        onChangeText={(text) => handleChange('projectName', text)}
                        placeholder="Enter my project name"
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                    />
                </View>

                {/* Location */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.locationPinIcon}>
                                <View style={styles.locationPin} />
                                <View style={styles.locationDot} />
                            </View>
                        </View>
                        <Text style={styles.label}>Location</Text>
                    </View>
                    <View style={styles.inputWithIcon}>
                        <TextInput
                            style={styles.inputText}
                            value={formData.location}
                            onChangeText={(text) => handleChange('location', text)}
                            placeholder="Enter project location"
                            placeholderTextColor="rgba(196, 212, 255, 0.5)"
                        />
                        <TouchableOpacity style={styles.targetButton}>
                            <View style={styles.targetIcon}>
                                <View style={styles.targetOuter} />
                                <View style={styles.targetInner} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Developer Company Name */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.buildingIcon}>
                                <View style={styles.buildingBody} />
                                <View style={[styles.buildingWindow, { top: 4, left: 2 }]} />
                                <View style={[styles.buildingWindow, { top: 4, right: 2 }]} />
                                <View style={[styles.buildingWindow, { top: 9, left: 2 }]} />
                                <View style={[styles.buildingWindow, { top: 9, right: 2 }]} />
                            </View>
                        </View>
                        <Text style={styles.label}>Developer Company Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.developerCompany}
                        onChangeText={(text) => handleChange('developerCompany', text)}
                        placeholder="Enter company name"
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                    />
                </View>

                {/* Authorised Person Name */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.userIcon}>
                                <View style={styles.userHead} />
                                <View style={styles.userBody} />
                            </View>
                        </View>
                        <Text style={styles.label}>Authorised Person Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.authorizedPerson}
                        onChangeText={(text) => handleChange('authorizedPerson', text)}
                        placeholder="Enter authorised person name"
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                    />
                </View>

                {/* Contact Number */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.phoneIcon}>
                                <View style={styles.phoneBody} />
                            </View>
                        </View>
                        <Text style={styles.label}>Contact Number</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.contactNumber}
                        onChangeText={(text) => handleChange('contactNumber', text)}
                        placeholder="Enter contact number"
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                        keyboardType="phone-pad"
                        maxLength={10}
                    />
                </View>

                {/* Email ID (optional) */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.emailIcon}>
                                <View style={styles.emailBody} />
                                <View style={styles.emailFlap} />
                            </View>
                        </View>
                        <Text style={styles.label}>Email ID (optional)</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                        placeholder="Enter your email id"
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                {/* RERA No (optional) */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.listIcon}>
                                <View style={styles.listLine} />
                                <View style={[styles.listLine, { top: 5 }]} />
                                <View style={[styles.listLine, { top: 9 }]} />
                            </View>
                        </View>
                        <Text style={styles.label}>RERA No (optional)</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={formData.reraNo}
                        onChangeText={(text) => handleChange('reraNo', text)}
                        placeholder="Enter project RERA No."
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                    />
                </View>

                {/* Notes */}
                <View style={styles.fieldContainer}>
                    <View style={styles.labelRow}>
                        <View style={styles.iconWrapper}>
                            <View style={styles.notesIcon}>
                                <View style={styles.notesBody} />
                                <View style={[styles.notesLine, { top: 4 }]} />
                                <View style={[styles.notesLine, { top: 7 }]} />
                                <View style={[styles.notesLine, { top: 10 }]} />
                            </View>
                        </View>
                        <Text style={styles.label}>Notes</Text>
                        <Text style={styles.charCount}>0/500</Text>
                    </View>
                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={formData.notes}
                        onChangeText={(text) => handleChange('notes', text)}
                        placeholder="Share updates, insights, or interesting content with your network."
                        placeholderTextColor="rgba(196, 212, 255, 0.5)"
                        multiline
                        numberOfLines={4}
                        maxLength={1500}
                    />
                </View>

                {/* Submit Button */}
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    activeOpacity={0.85}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 16,
        backgroundColor: '#F5F5F5',
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 28,
        color: '#000',
        fontWeight: '400',
    },
    headerTitle1: {
        fontSize: 20,
        fontWeight: '600',
        color: '#03104eff',
        flex: 1,
        marginLeft: 8,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#000',
        flex: 1,
        marginLeft: 8,
    },
    headerRight: {
        width: 40,
    },
    scrollContent: {
        flex: 1,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    infoBox: {
        backgroundColor: '#b1d2f3ff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderColor: '#000000ff',
    },
    infoText: {
        fontSize: 18,
        color: '#020b2bff',
        lineHeight: 20,
    },

    successMessage: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        gap: 6,
    },
    successIcon: {
        fontSize: 20,
        color: '#4CAF50',
    },
    successText: {
        fontSize: 20,
        color: '#4CAF50',
        fontWeight: '500',
    },
    fieldContainer: {
        backgroundColor: '#E8EAF6',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    iconWrapper: {
        width: 20,
        height: 20,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
        flex: 1,
    },
    optional: {
        fontSize: 12,
        color: '#666',
        fontWeight: '400',
    },
    charCount: {
        fontSize: 12,
        color: '#666',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        color: '#333',
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        paddingRight: 8,
    },
    inputText: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 12,
        fontSize: 14,
        color: '#333',
    },
    targetButton: {
        padding: 8,
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
        paddingTop: 12,
    },
    submitButton: {
        backgroundColor: '#2196F3',
        borderRadius: 30,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#2196F3',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    // Briefcase Icon
    briefcaseIcon: {
        width: 16,
        height: 16,
        position: 'relative',
    },
    briefcaseTop: {
        width: 8,
        height: 3,
        backgroundColor: '#000',
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        position: 'absolute',
        top: 0,
        left: 4,
    },
    briefcaseBody: {
        width: 16,
        height: 11,
        backgroundColor: '#000',
        borderRadius: 2,
        position: 'absolute',
        bottom: 0,
    },
    // Location Pin Icon
    locationPinIcon: {
        width: 16,
        height: 18,
        position: 'relative',
    },
    locationPin: {
        width: 12,
        height: 14,
        borderWidth: 2,
        borderColor: '#000',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        position: 'absolute',
        top: 0,
        left: 2,
    },
    locationDot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#000',
        position: 'absolute',
        top: 3,
        left: 6,
    },
    // Target Icon
    targetIcon: {
        width: 20,
        height: 20,
        position: 'relative',
    },
    targetOuter: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#666',
        position: 'absolute',
        top: 2,
        left: 2,
    },
    targetInner: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#666',
        position: 'absolute',
        top: 7,
        left: 7,
    },
    // Building Icon
    buildingIcon: {
        width: 16,
        height: 16,
        position: 'relative',
    },
    buildingBody: {
        width: 16,
        height: 16,
        backgroundColor: '#000',
        borderRadius: 2,
    },
    buildingWindow: {
        width: 4,
        height: 3,
        backgroundColor: '#E8EAF6',
        position: 'absolute',
    },
    // User Icon
    userIcon: {
        width: 16,
        height: 16,
        position: 'relative',
    },
    userHead: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#000',
        position: 'absolute',
        top: 0,
        left: 5,
    },
    userBody: {
        width: 12,
        height: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0,
        left: 2,
    },
    // Phone Icon
    phoneIcon: {
        width: 16,
        height: 16,
        position: 'relative',
    },
    phoneBody: {
        width: 12,
        height: 16,
        backgroundColor: '#000',
        borderRadius: 3,
    },
    // Email Icon
    emailIcon: {
        width: 16,
        height: 12,
        position: 'relative',
    },
    emailBody: {
        width: 16,
        height: 12,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 2,
    },
    emailFlap: {
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderRightWidth: 8,
        borderTopWidth: 6,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: '#000',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    // List Icon
    listIcon: {
        width: 16,
        height: 14,
        position: 'relative',
    },
    listLine: {
        width: 12,
        height: 2,
        backgroundColor: '#000',
        borderRadius: 1,
        position: 'absolute',
        left: 2,
        top: 1,
    },
    // Notes Icon
    notesIcon: {
        width: 14,
        height: 16,
        position: 'relative',
    },
    notesBody: {
        width: 14,
        height: 16,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 2,
    },
    notesLine: {
        width: 8,
        height: 1,
        backgroundColor: '#000',
        position: 'absolute',
        left: 3,
    },
});