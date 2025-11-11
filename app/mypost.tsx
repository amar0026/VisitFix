import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

export default function MyPostScreen() {
  const [selectedTab, setSelectedTab] = useState('buzz');
  const [likes, setLikes] = useState(300);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Post</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'buzz' && styles.tabActive]}
            onPress={() => setSelectedTab('buzz')}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841272/megaphone_ezymex.png' }}
              style={styles.tabIcon}
            />
            <Text style={[styles.tabText, selectedTab === 'buzz' && styles.tabTextActive]}>
              Buzz
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'event' && styles.tabActive]}
            onPress={() => setSelectedTab('event')}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841272/calendar_icon_on_plastic_plate_eylcyl.png' }}
              style={styles.tabIcon}
            />
            <Text style={[styles.tabText, selectedTab === 'event' && styles.tabTextActive]}>
              Event
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, selectedTab === 'booking' && styles.tabActive]}
            onPress={() => setSelectedTab('booking')}
            activeOpacity={0.8}
          >
            <Image
             source={{uri:'https://res.cloudinary.com/dquki4xol/image/upload/v1762841272/Security_of_electronic_documents_txexyo.png'}}
             style={styles.tabIcon}
            />
            <Text style={[styles.tabText, selectedTab === 'booking' && styles.tabTextActive]}>
              Booking
            </Text>
          </TouchableOpacity>
        </View>

        {/* Post Card */}
        <View style={styles.postCard}>
          {/* User Info */}
          <View style={styles.userSection}>
            <Image
              source={{ uri:'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
              style={styles.userAvatar}
            />
            <View style={styles.userInfo}>
              <View style={styles.userNameRow}>
                <Text style={styles.userName}>Naman Mathur</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedIcon}>✓</Text>
                </View>
              </View>
              <Text style={styles.postTime}>2h ago</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
             <Image
              source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841804/ic_round-edit_he8pvs.png' }}
              style={styles.tabIcon}
            />
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.titleLabel}>Title</Text>

          {/* Post Image */}
          <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841450/outdoor_1_desktop_1_z19xgq.png' }}
            style={styles.postImage}
          />

          {/* Post Description */}
          <Text style={styles.postDescription}>
            Just announced our new community guidelines! We're committed to creating a safe{' '}
            <Text style={styles.moreLink}>more</Text>
          </Text>

          {/* Actions */}
          <View style={styles.actionsRow}>
            <View style={styles.likeSection}>
              <View style={styles.likeIcon}>
                <Text style={styles.heartIcon}>❤️</Text>
              </View>
              <Text style={styles.likeCount}>{likes}</Text>
            </View>

            <TouchableOpacity style={styles.deleteButton} activeOpacity={0.8}>
              <Image
              source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841595/mdi_delete_y1wzlb.png' }}
              style={styles.tabIcon}
            />
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '300',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 50,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
   
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    gap: 6,
  },
  tabActive: {
    backgroundColor: '#2563EB',
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  tabEmoji: {
    fontSize: 16,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    marginTop: 0,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  verifiedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedIcon: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  postTime: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editIcon: {
    fontSize: 18,
    color: '#2563EB',
  },
  titleLabel: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000000',
    marginBottom: 12,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  postDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 16,
  },
  moreLink: {
    color: '#2563EB',
    fontWeight: '600',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  likeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  likeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    fontSize: 18,
  },
  likeCount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FEE2E2',
    backgroundColor: '#FEF2F2',
  },
  deleteIcon: {
    fontSize: 16,
  },
  deleteText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EF4444',
  },
});