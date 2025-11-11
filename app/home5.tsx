import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProfileSettingsScreen() {
  const router = useRouter();
 const navigation= useNavigation();
  const handleBack = () => {
    console.log('Back pressed');
   navigation.goBack();
  };

  const handleSetUpProfile = () => {
    console.log('Set Up Profile pressed');
    navigation.navigate("home6" as never );
  };


  const handleSetUpWorkProfile = () => {
    console.log('Set Up Work Profile pressed');
    navigation.navigate("profilesetup" as never );
  };

  const handleHelpSupport = () => {
    console.log('Help & Support pressed');
  };

  const handleLogout = () => {
    console.log('Logout pressed');
    // Add logout logic here
  };
  

  return (
    <View style={styles.container}>
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

        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Today</Text>
          <Text style={styles.headerTime}>6:30 pm</Text>
        </View>

        <View style={styles.headerRight} />
      </View>

      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* User Info Card */}
        <View style={styles.userCard}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>NAMAN MATHUR</Text>
            <Text style={styles.userPhone}>+91 900756890</Text>
          </View>
        </View>

        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleSetUpProfile}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <View style={styles.userIconCircle} />
                <View style={styles.userIconBody} />
              </View>
            </View>
            <Text style={styles.menuText}>Set Up Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleSetUpWorkProfile}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <View style={styles.briefcaseHandle} />
                <View style={styles.briefcaseBody} />
              </View>
            </View>
            <Text style={styles.menuText}>Set Up Work Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Help & Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Help & Support</Text>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={handleHelpSupport}
            activeOpacity={0.7}
          >
            <View style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <View style={styles.headsetBand} />
                <View style={styles.headsetMic} />
                <View style={styles.userIconCircleSmall} />
              </View>
            </View>
            <Text style={styles.menuText}>Help & Support</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
    fontSize: 32,
    color: '#333',
    fontWeight: '400',
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  headerTime: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  userPhone: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 12,
    paddingLeft: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '500',
  },
  
  // User Icon (Profile Icon - Image 2)
  userIconCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#5A5A5A',
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  userIconBody: {
    width: 20,
    height: 13,
    backgroundColor: '#5A5A5A',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  
  // Briefcase Icon (Work Profile - Image 1)
  briefcaseHandle: {
    width: 10,
    height: 4,
    backgroundColor: '#5A5A5A',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    position: 'absolute',
    top: 2,
    alignSelf: 'center',
  },
  briefcaseBody: {
    width: 24,
    height: 18,
    backgroundColor: '#5A5A5A',
    borderRadius: 3,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  
  // Headset Icon (Help & Support - Image 3)
  headsetBand: {
    width: 22,
    height: 16,
    borderWidth: 3,
    borderColor: '#5A5A5A',
    borderBottomWidth: 0,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  userIconCircleSmall: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5A5A5A',
    position: 'absolute',
    bottom: 2,
    alignSelf: 'center',
  },
  headsetMic: {
    width: 3,
    height: 6,
    backgroundColor: '#5A5A5A',
    borderRadius: 1.5,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  
  logoutButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4F46E5',
    letterSpacing: 0.5,
  },
});
