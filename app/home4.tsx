import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// Header Navigation Component
function HeaderNavigationBar() {
  const navigation = useNavigation();
  const handleMenuPress = () => {
    console.log('Menu pressed');
  };
  const handleSearchPress = () => {
    console.log('Search/Location pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };
  const handleProfilePress = () => {
    console.log('Profile pressed');
    navigation.navigate("home5" as never);
  };

  return (
    <View style={styles.headerContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={handleMenuPress}
        activeOpacity={0.7}
      >
        <View style={styles.gridIcon}>
          <View style={styles.gridRow}>
            <View style={styles.gridSquare} />
            <View style={styles.gridSquare} />
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridSquare} />
            <View style={styles.gridSquare} />
          </View>
        </View>
        <Text style={styles.brandText}>
          Visit<Text style={styles.brandX}>Fix</Text>
          <View style={styles.circleIcon} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={handleSearchPress}
        activeOpacity={0.8}
      >
        <View style={styles.searchIcon}>
          <View style={styles.searchCircle} />
          <View style={styles.searchHandle} />
        </View>
        <Text style={styles.locationText}>WestBengal</Text>
      </TouchableOpacity>

      <View style={styles.rightContainer}>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={handleNotificationPress}
          activeOpacity={0.7}
        >
          <View style={styles.bellIcon}>
            <View style={styles.bellTop} />
            <View style={styles.bellBody} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={handleProfilePress}
          activeOpacity={0.7}
        >
          <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Main Social Feed Component
export default function SocialFeedScreen() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(300);
const navigation = useNavigation();
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  const handleSubscribe = () => {
    console.log('Subscribe pressed');
  };

  const handleAddProject = () => {
    console.log('Add project pressed');
    navigation.navigate("addproject" as never);
    // Navigate to add project screen or open modal
  };

  return (
    <View style={styles.container}>
      {/* Header Navigation */}
      <HeaderNavigationBar />

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Post Card */}
        <View style={styles.card}>
          {/* Post Header Section */}
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              {/* Profile Picture */}
              <Image
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
                style={styles.avatar}
              />
              <View style={styles.userDetails}>
                <View style={styles.nameRow}>
                  <Text style={styles.userName}>Shivam  Malotra</Text>
                  {/* Verified Badge */}
                  <View style={styles.verifiedBadge}>
                    <Text style={styles.verifiedIcon}>✓</Text>
                  </View>
                </View>
                <View style={styles.metaRow}>
                  <Text style={styles.timeText}>2h ago</Text>
                  <View style={styles.buzzBadge}>
                    <Text style={styles.buzzText}>BUZZ</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* Subscribe Button */}
            <TouchableOpacity
              style={styles.subscribeButton}
              onPress={handleSubscribe}
              activeOpacity={0.8}
            >
              <Text style={styles.subscribeText}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>
          {/* Post Content */}
          <Text style={styles.postText}>
            Just announced our new community guidelines! We're committed to creating a safe and inclusive space for everyone. Check out the updated policies in the app settings. 📢
          </Text>
          {/* Post Image */}
          <Image
            source={{
              uri:'https://res.cloudinary.com/dquki4xol/image/upload/v1762238138/RR00P6YY-1_1_aqfm71.png',
            }}
            style={styles.postImage}
            resizeMode="cover"
          />
          {/* Like Section */}
          <View style={styles.likeSection}>
            <TouchableOpacity
              onPress={handleLike}
              activeOpacity={0.7}
              style={styles.likeButton}
            >
              <View style={[styles.heartIcon, isLiked && styles.heartIconFilled]}>
                <Text style={[styles.heart, isLiked && styles.heartFilled]}>
                  ♥
                </Text>
              </View>
              <Text style={styles.likeCount}>{likeCount}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Post Card */}
        <View style={styles.card}>
          {/* Post Header Section */}
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              {/* Profile Picture */}
              <Image
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/8d3e5421e989966c481029e08f3185c802dad863_dluuju.jpg' }}
                style={styles.avatar}
              />
              
              <View style={styles.userDetails}>
                <View style={styles.nameRow}>
                  <Text style={styles.userName}>Aman Gope</Text>
                  {/* Verified Badge */}
                  <View style={styles.verifiedBadge}>
                    <Text style={styles.verifiedIcon}>✓</Text>
                  </View>
                </View>
                
                <View style={styles.metaRow}>
                  <Text style={styles.timeText}>2h ago</Text>
                  <View style={styles.buzzBadge}>
                    <Text style={styles.buzzText}>BUZZ</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Subscribe Button */}
            <TouchableOpacity
              style={styles.subscribeButton}
              onPress={handleSubscribe}
              activeOpacity={0.8}
            >
              <Text style={styles.subscribeText}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>

          {/* Post Content */}
          <Text style={styles.postText}>
            Just announced our new community guidelines! We're committed to creating a safe and inclusive space for everyone. Check out the updated policies in the app settings. 📢
          </Text>

          {/* Post Image */}
          <Image
            source={{
              uri:'https://res.cloudinary.com/dquki4xol/image/upload/v1762240773/godrej-shettigere-balcony_kkxxtz.webp',
            }}
            style={styles.postImage}
            resizeMode="cover"
          />

          {/* Like Section */}
          <View style={styles.likeSection}>
            <TouchableOpacity
              onPress={handleLike}
              activeOpacity={0.7}
              style={styles.likeButton}
            >
              <View style={[styles.heartIcon, isLiked && styles.heartIconFilled]}>
                <Text style={[styles.heart, isLiked && styles.heartFilled]}>
                  ♥
                </Text>
              </View>
              <Text style={styles.likeCount}>{likeCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      
        {/* Post Card */}
        <View style={styles.card}>
          {/* Post Header Section */}
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              {/* Profile Picture */}
              <Image
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762319999/360_F_634402775_bEI4r4gDSooIj8xyM8l0nYTiYDyS75SL_bhbiyp.webp' }}
                style={styles.avatar}
              />
              
              <View style={styles.userDetails}>
                <View style={styles.nameRow}>
                  <Text style={styles.userName}>Amit Singhania </Text>
                  {/* Verified Badge */}
                  <View style={styles.verifiedBadge}>
                    <Text style={styles.verifiedIcon}>✓</Text>
                  </View>
                </View>
                
                <View style={styles.metaRow}>
                  <Text style={styles.timeText}>2h ago</Text>
                  <View style={styles.buzzBadge}>
                    <Text style={styles.buzzText}>BUZZ</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Subscribe Button */}
            <TouchableOpacity
              style={styles.subscribeButton}
              onPress={handleSubscribe}
              activeOpacity={0.8}
            >
              <Text style={styles.subscribeText}>SUBSCRIBE</Text>
            </TouchableOpacity>
          </View>

          {/* Post Content */}
          <Text style={styles.postText}>
            Just announced our new community guidelines! We're committed to creating a safe and inclusive space for everyone. Check out the updated policies in the app settings. 📢
          </Text>

          {/* Post Image */}
          <Image
            source={{
              uri:'https://res.cloudinary.com/dquki4xol/image/upload/v1762321413/images_cooina.jpg',
            }}
            style={styles.postImage}
            resizeMode="cover"
          />
          {/* Like Section */}
          <View style={styles.likeSection}>
            <TouchableOpacity
              onPress={handleLike}
              activeOpacity={0.7}
              style={styles.likeButton}
            >
              <View style={[styles.heartIcon, isLiked && styles.heartIconFilled]}>
                <Text style={[styles.heart, isLiked && styles.heartFilled]}>
                  ♥
                </Text>
              </View>
              <Text style={styles.likeCount}>{likeCount}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Add Project Button at Bottom */}
        <TouchableOpacity 
          style={styles.addProjectContainer} 
          onPress={handleAddProject}
          activeOpacity={0.7}
        >
          <View style={styles.addProjectContent}>
            <Text style={styles.plusIcon}>+</Text>
            <Text style={styles.addProjectText}>Add your project</Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  // Header Styles
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingTop: 50,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridIcon: {
    marginRight: 8,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridSquare: {
    width: 7,
    height: 7,
    backgroundColor: '#2563EB',
    margin: 1,
    borderRadius: 1,
  },
  brandText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#1E293B',
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandX: {
    color: '#2563EB',
  },
  circleIcon: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#2563EB',
    marginLeft: 4,
    marginTop: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    position: 'relative',
  },
  searchCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: '#1E293B',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  searchHandle: {
    width: 7,
    height: 2.5,
    backgroundColor: '#1E293B',
    position: 'absolute',
    bottom: 2,
    right: 1,
    transform: [{ rotate: '45deg' }],
    borderRadius: 2,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  bellIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  bellTop: {
    width: 6,
    height: 3,
    backgroundColor: '#1E293B',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    position: 'absolute',
    top: 0,
    left: 9,
  },
  bellBody: {
    width: 18,
    height: 18,
    backgroundColor: '#1E293B',
    borderRadius: 9,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    position: 'absolute',
    top: 3,
    left: 3,
  },
  profileButton: {
    width: 42,
    height: 42,
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  // Post Card Styles
  scrollContent: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 45,
    borderRadius: 24,
    marginRight: 12,
  },
  userDetails: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
    marginRight: 6,
  },
  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeText: {
    fontSize: 13,
    color: '#999',
  },
  buzzBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  buzzText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2196F3',
    letterSpacing: 0.5,
  },
  subscribeButton: {
    backgroundColor: '#0A0066',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  subscribeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  postText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginBottom: 16,
  },
  likeSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 8,
  },
  heart: {
    fontSize: 28,
    color: '#EF4444',
  },
  heartFilled: {
    color: '#EF4444',
  },
  heartIconFilled: {
    transform: [{ scale: 1.1 }],
  },
  likeCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  // Add Project Button Styles
  addProjectContainer: {
    backgroundColor: '#E8EBF5',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addProjectContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusIcon: {
    fontSize: 32,
    color: '#2C3E7D',
    fontWeight: '300',
    marginRight: 12,
  },
  addProjectText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  bottomSpacing: {
    height: 20,
  },
});