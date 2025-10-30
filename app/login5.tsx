import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useState } from 'react';
import { Link, useNavigation } from "expo-router";
export default function PINReset() {
  
  const handleConfirm = () => {
    console.log('Confirm pressed - Navigate to set new password');
    alert('Redirecting to set new PIN...');
    // Add your navigation logic here
    // Example: navigation.navigate('NewPINSetup');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>PIN reset</Text>
        <Text style={styles.subtitle}>
          Your PIN has been successfully reset. click{'\n'}confirm to set a new password
        </Text>

        {/* Confirm Button */}
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirm}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
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
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    lineHeight: 22,
    marginBottom: 35,
  },
  confirmButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});