import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function AccountSuccessModal({ visible, onClose }): React.JSX.Element {
  const router = useRouter();

  const handleFinish = () => {
    console.log('Finish pressed');
    if (onClose) {
      onClose();
    }
    try {
      router.push('/home4');
    } catch (error) {
      console.log('Navigation error:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <StatusBar barStyle="light-content" />
        
        {/* Modal Content */}
        <View style={styles.modalContainer}>
          {/* Handle Bar */}
          <View style={styles.handleBar} />

          {/* Success Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.iconGlow}>
              <View style={styles.iconCircle}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
            </View>
          </View>

          {/* Success Message */}
          <Text style={styles.title}>
            Account <Text style={styles.titleBold}>successfully</Text>
          </Text>
          <Text style={styles.title}>created</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>

          {/* Finish Button */}
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinish}
            activeOpacity={0.8}
          >
            <Text style={styles.finishButtonText}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(100, 120, 140, 0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 40,
    alignItems: 'center',
    minHeight: 400,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: '#D0D0D0',
    borderRadius: 2,
    marginBottom: 30,
  },
  iconContainer: {
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconGlow: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(139, 195, 74, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#8BC34A',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8BC34A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  checkmark: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  title: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    lineHeight: 30,
  },
  titleBold: {
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 30,
    lineHeight: 18,
  },
  finishButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    paddingHorizontal: 100,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 10,
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});