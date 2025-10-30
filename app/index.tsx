import { Link } from 'expo-router';
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      
      <ImageBackground 
        source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1761196087/mobile-4k-duql5rbw6jtv8gi6_pzzpou.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
     
        <View style={styles.overlay} />
        
       
        <View style={styles.contentContainer}>
          {/* Logo Card */}
          <View style={styles.logoCard}>
            <View style={styles.logoContainer}>
              {/* Grid Icon */}
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
              
              {/* Brand Name */}
              <Text style={styles.brandText}>
                Visit<Text style={styles.brandBlue}>Fix</Text>
              </Text>
              
              {/* Verified Badge */}
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓</Text>
              </View>
            </View>
            
            {/* Tagline */}
            <Text style={styles.tagline}>Your Real Estate Network, Simplified</Text>
          </View>
          
          {/* Get Started Button */}
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Link href="/login1">
            <Text style={styles.buttonText}>Get Started</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  logoCard: {
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 40,
    paddingHorizontal: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  gridIcon: {
    marginRight: 10,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridSquare: {
    width: 8,
    height: 8,
    margin: 1.5,
    borderRadius: 1.5,
  },
  brandText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#050505',
    letterSpacing: -0.5,
  },
  brandBlue: {
    color: '#4A90E2',
  },
  verifiedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  verifiedText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  tagline: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A4D65E',
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});