import React, { useState, useRef } from 'react';
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
import { useNavigation, useRouter } from 'expo-router';

export default function SetupProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  
  const [formData, setFormData] = useState({
    name: 'Naman Mathur',
    mobile: '900756890',
    company: 'Godrej Properties',
    designation: 'Sales Manager',
  });

  const nameInputRef = useRef(null);
  const mobileInputRef = useRef(null);
  const companyInputRef = useRef(null);
  const designationInputRef = useRef(null);

  const handleBack = () => {
    console.log('Back pressed');
    router.back();
  };

  const handleEdit = (field) => {
    console.log(`Focus on ${field}`);
    switch (field) {
      case 'name':
        nameInputRef.current?.focus();
        break;
      case 'mobile':
        mobileInputRef.current?.focus();
        break;
      case 'company':
        companyInputRef.current?.focus();
        break;
      case 'designation':
        designationInputRef.current?.focus();
        break;
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log('Save pressed', formData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBack}
          activeOpacity={0.7}
        >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Set up profile</Text>
          <Text style={styles.headerSubtitle}>+91 900756890</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputRow}>
            <TextInput
              ref={nameInputRef}
              style={styles.inputText}
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => handleEdit('name')}
              activeOpacity={0.7}
              style={styles.editIconButton}
            >
             
            </TouchableOpacity>
          </View>
        </View>

        {/* Registered Mobile Number Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Registered mobile number</Text>
          <View style={styles.inputRow}>
            <TextInput
              ref={mobileInputRef}
              style={styles.inputText}
              value={formData.mobile}
              onChangeText={(text) => handleChange('mobile', text)}
              placeholder="Enter mobile number"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              maxLength={10}
            />
            <TouchableOpacity
              onPress={() => handleEdit('mobile')}
              activeOpacity={0.7}
              style={styles.editIconButton}
            >
              
            </TouchableOpacity>
          </View>
        </View>

        {/* Company Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Company Name</Text>
          <View style={styles.inputRow}>
            <TextInput
              ref={companyInputRef}
              style={styles.inputText}
              value={formData.company}
              onChangeText={(text) => handleChange('company', text)}
              placeholder="Enter company name"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => handleEdit('company')}
              activeOpacity={0.7}
              style={styles.editIconButton}
            >
              
            </TouchableOpacity>
          </View>
        </View>

        {/* Designation Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Designation</Text>
          <View style={styles.inputRow}>
            <TextInput
              ref={designationInputRef}
              style={styles.inputText}
              value={formData.designation}
              onChangeText={(text) => handleChange('designation', text)}
              placeholder="Enter designation"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => handleEdit('designation')}
              activeOpacity={0.7}
              style={styles.editIconButton}
            >
              
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSave}
          activeOpacity={0.85}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  backIcon: {
    fontSize: 28,
    color: '#000',
    fontWeight: '400',
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 17,
    color: '#666',
    marginTop: 2,
  },
  scrollContent: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  fieldContainer: {
    marginBottom: 22,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 0,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  inputText: {
    flex: 1,
    fontSize: 15,
    color: '#999',
    padding: 0,
  },
  editIconButton: {
    padding: 4,
    marginLeft: 8,
  },
 
  saveButton: {
    backgroundColor: '#2196F3',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 200,
    marginHorizontal: 10,
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});