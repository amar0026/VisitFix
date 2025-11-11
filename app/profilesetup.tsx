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

export default function SetupWorkProfileScreen() {
  const router = useRouter();
  const [selectedCities, setSelectedCities] = useState(['Mumbai', 'Delhi']);
  const [pinCode, setPinCode] = useState('');
  const [projectType, setProjectType] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const suggestions = [
    { code: '743145', name: 'West Bengal' },
    { code: '743021', name: 'Mumbai' },
    { code: '110001', name: 'Delhi' },
    { code: '600001', name: 'Chennai' },
    { code: '700001', name: 'Kolkata' },
 
  ];

  const projectTypes = [
    'Residential',
    'Commercial',
    'Industrial',
    'Mixed Use',
  ];

  const handleBack = () => {
    router.back();
  };

  const removeCity = (city) => {
    setSelectedCities(prev => prev.filter(c => c !== city));
  };

  const handleSave = () => {
    console.log('Save pressed', {
      cities: selectedCities,
      pinCode,
      projectType,
    });
  };

  // 🔹 Filter suggestions based on pin input
  const filteredSuggestions = suggestions.filter(item =>
    item.code.startsWith(pinCode)
  );

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

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Set up work profile</Text>
          <Text style={styles.headerSubtitle}>+91 900756890</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* City Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>City</Text>
          </View>

          <View style={styles.cityContainer}>
            {selectedCities.map((city, index) => (
              <View key={index} style={styles.cityChip}>
                <Text style={styles.cityText}>{city}</Text>
                <TouchableOpacity
                  onPress={() => removeCity(city)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.removeIcon}>✕</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Area or Pin Code Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Area or pin code</Text>
          </View>

          <TextInput
            style={styles.input}
            value={pinCode}
            onChangeText={setPinCode}
            placeholder="Enter pin code"
            placeholderTextColor="#999"
            keyboardType="numeric"
          />

          {/* 🔹 Dynamic Suggestions */}
          {pinCode.length > 0 && filteredSuggestions.length > 0 && (
            <View style={styles.suggestionsContainer}>
              {filteredSuggestions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionItem}
                  activeOpacity={0.7}
                  onPress={() => {
                    setPinCode(item.code);
                    if (!selectedCities.includes(item.name)) {
                      setSelectedCities([...selectedCities, item.name]);
                    }
                  }}
                >
                  <Text style={styles.suggestionText}>
                    {item.code} — {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Project Type Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Project Type</Text>
          </View>

          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(!showDropdown)}
            activeOpacity={0.7}
          >
            <Text style={styles.dropdownText}>
              {projectType || 'Select'}
            </Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </TouchableOpacity>

          {showDropdown && (
            <View style={styles.suggestionsContainer}>
              {projectTypes.map((type, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionItem}
                  activeOpacity={0.7}
                  onPress={() => {
                    setProjectType(type);
                    setShowDropdown(false);
                  }}
                >
                  <Text style={styles.suggestionText}>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
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
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  backButton:
  {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8
  },
  backIcon: {
    fontSize: 28,
    color: '#000'
  },
  headerTextContainer: {
    flex: 1
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000'
  }
  ,
  headerSubtitle:
  {
    fontSize: 14,
    color: '#666',
    marginTop: 2
  }
  ,
  scrollContainer:
  {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40
  },
  section: {
    backgroundColor: '#E8EAF6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  cityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    gap: 8
  },
  cityChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C5F7C',
    borderRadius: 20, paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 12,
    gap: 8
  },
  cityText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  removeIcon: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: '#333',
    marginBottom: 12
  },
  suggestionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden'
  },
  suggestionItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  suggestionText: {
    fontSize: 14,
    color: '#666'
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  dropdownText: {
    fontSize: 15,
    color: '#999'
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#666'
  },
  saveButton: {
    backgroundColor: '#2196F3',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 10,
    elevation: 5
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5
  },
});
