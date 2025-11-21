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
              source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841272/Security_of_electronic_documents_txexyo.png' }}
              style={styles.tabIcon}
            />
            <Text style={[styles.tabText, selectedTab === 'booking' && styles.tabTextActive]}>
              Booking
            </Text>
          </TouchableOpacity>
        </View>

        {/* Buzz Tab Content */}
        {selectedTab === 'buzz' && (
          <View style={styles.postCard}>
            {/* User Info */}
            <View style={styles.userSection}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
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
        )}

        {/* Event Tab Content */}
        {selectedTab === 'event' && (
          <View style={styles.postCard}>
            {/* User Info */}
            <View style={styles.userSection}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
                style={styles.userAvatar}
              />
              <View style={styles.userInfo}>
                <View style={styles.userNameRow}>
                  <Text style={styles.userName}>Naman Mathur</Text>
                  <View style={styles.verifiedBadge}>
                    <Text style={styles.verifiedIcon}>✓</Text>
                  </View>
                </View>
                <View style={styles.timeRow}>
                  <Text style={styles.postTime}>2h ago</Text>
                  <View style={styles.buzzBadge}>
                    <Text style={styles.buzzText}>BUZZ</Text>
                  </View>
                </View>
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

            {/* Event Date and Time Fields */}
            <View style={styles.eventFieldsRow}>
              <View style={styles.eventField}>
                <Text style={styles.eventFieldLabel}>Event Date</Text>
                <Text style={styles.eventFieldValue}>17 Sep, 2025</Text>
              </View>
              <View style={styles.eventField}>
                <Text style={styles.eventFieldLabel}>Event Time</Text>
                <Text style={styles.eventFieldValue}>11 am</Text>
              </View>
            </View>

            {/* Post Image */}
            <Image
              source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762929117/handshake-between-african-and-a-caucasian-man_kabemv.webp' }}
              style={styles.postImage}
            />

            {/* Post Description */}
            <Text style={styles.postDescription}>
              Just announced our new community guidelines! We're committed to creating a safe{' '}
              <Text style={styles.moreLink}>more</Text>
            </Text>

            {/* Delete Button Only */}
            <View style={styles.deleteOnlyRow}>
              <TouchableOpacity style={styles.deleteButtonLarge} activeOpacity={0.8}>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841595/mdi_delete_y1wzlb.png' }}
                  style={styles.tabIcon}
                />
                <Text style={styles.deleteTextLarge}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Booking Tab Content */}
        {selectedTab === 'booking' && (
          <View style={styles.postCard}>
            {/* User Info */}
            <View style={styles.userSection}>
              <Image
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762238135/e326d4c880ef761a7d361d56a77ed2353fd35a12_owdxun.jpg' }}
                style={styles.userAvatar}
              />
              <View style={styles.userInfo}>
                <View style={styles.userNameRow}>
                  <Text style={styles.userName}>Naman Mathur</Text>
                  <View style={styles.verifiedBadge}>
                    <Text style={styles.verifiedIcon}>✓</Text>
                  </View>
                </View>
                <Text style={styles.postTime}>3h ago</Text>
              </View>
              <TouchableOpacity style={styles.editButton}>
                <Image
                  source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841804/ic_round-edit_he8pvs.png' }}
                  style={styles.tabIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.eventField}>
              <Text style={styles.eventFieldLabel}>Project</Text>
              <Text style={styles.eventFieldValue}>Skyline Residence</Text>
            </View>



            {/* Booking Details */}
            <View style={styles.bookingDetails}>
              <View style={styles.card}>
                <View style={styles.leftSection}>
                  <Text style={styles.wingsLabel}>Wings</Text>
                  <Text style={styles.towerName}>A Tower</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.rightSection}>
                  <View style={styles.infoRow}>
                    <Text style={styles.label}>Unit type</Text>
                    <Text style={styles.value}>2 Bhk</Text>
                  </View>

                  <View style={styles.infoRow}>
                    <Text style={styles.label}>Broker</Text>
                    <Text style={styles.value}>Aditya Mishra</Text>
                  </View>
                </View>
              </View>
            </View>



            {/* Actions */}
            <View style={styles.actionsRow}>
              <View style={styles.likeSection}>
                <View style={styles.likeIcon}>
                  <Text style={styles.heartIcon}>❤️</Text>
                </View>
                <Text style={styles.likeCount}>189</Text>
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
        )}
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
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buzzBadge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  buzzText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#2563EB',
    letterSpacing: 0.5,
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
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  eventFieldsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  eventField: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#767676ff',
  },
  eventFieldLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 6,
    fontWeight: '500',
  },
  eventFieldValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
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
    borderColor: '#727272ff',
    backgroundColor: '#fdfdfdff',
  },
  deleteIcon: {
    fontSize: 16,
  },
  deleteText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EF4444',
  },
  deleteOnlyRow: {
    alignItems: 'flex-end',
    paddingTop: 12,
  },
  deleteButtonLarge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#565555ff',
    backgroundColor: '#FFFFFF',
  },
  deleteIconLarge: {
    fontSize: 18,
  },
  deleteTextLarge: {
    fontSize: 15,
    fontWeight: '600',
    color: '#EF4444',
  },
  bookingDetails: {
    backgroundColor: '#F0F9FF',
    borderRadius: 12,
    padding: 16,
    marginTop: 15,
    marginBottom: 16,
    gap: 10,
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingLabel: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  bookingValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#E8EDF5',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2563EB',
    padding: 20,
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    paddingRight: 20,
  },
  wingsLabel: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 8,
    fontWeight: '500',
  },
  towerName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  divider: {
    width: 2,
    height: 80,
    backgroundColor: '#9CA3AF',
    marginHorizontal: 20,
  },
  rightSection: {
    flex: 1.5,
    gap: 16,
  },
  infoRow: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
});