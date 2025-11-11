import { MaterialIcons } from "@expo/vector-icons";
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
export default function DashboardScreen() {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.gridIcon}>
            <View style={styles.gridRow}>
              <View style={styles.gridDot} />
              <View style={styles.gridDot} />
              <View style={styles.gridDot} />
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridDot} />
              <View style={styles.gridDot} />
              <View style={styles.gridDot} />
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridDot} />
              <View style={styles.gridDot} />
              <View style={styles.gridDot} />
            </View>
          </View>
          <Text style={styles.brandText}>VisitFix</Text>
        </View>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <View style={styles.searchCircle} />
            <View style={styles.searchHandle} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <View style={styles.bellTop} />
            <View style={styles.bellBody} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
       {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <View style={[styles.statBox, styles.statBlue]}>
              <View style={styles.statContent}>
                <Text style={styles.statLabel}>MY POST</Text>
                <Text style={styles.statNumber}>12</Text>
                <Text style={styles.statMonth}>+3</Text>
                <Text style={styles.statMonth}>This month</Text>
              </View>
              <Image 
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762757122/Group_4_boss8w.png' }}
                style={styles.statIcon}
              />
            </View>

            <View style={[styles.statBox, styles.statRed]}>
              <View style={styles.statContent}>
                <Text style={styles.statLabel}>EDIT PROJECT</Text>
                <Text style={styles.statNumber}>11</Text>
                <Text style={styles.statMonth}>+3</Text>
                <Text style={styles.statMonth}>This month</Text>
              </View>
              <Image 
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762757121/logos_eventbrite-icon_capmsy.png' }}
                style={styles.statIcon}
              />
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={[styles.statBox, styles.statPurple]}>
              <View style={styles.statContent}>
                <Text style={styles.statLabel}>ACTIVE BROKERS</Text>
                <Text style={styles.statNumber}>24</Text>
                <Text style={styles.statMonth}>+3</Text>
                <Text style={styles.statMonth}>This month</Text>
              </View>
              <Image 
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762757122/Group_5_em28vu.png' }}
                style={styles.statIcon}
              />
            </View>

            <View style={[styles.statBox, styles.statGreen]}>
              <View style={styles.statContent}>
                <Text style={styles.statLabel}>PENDING TAGS</Text>
                <Text style={styles.statNumber}>08</Text>
                <Text style={styles.statMonth}>+3</Text>
                <Text style={styles.statMonth}>This month</Text>
              </View>
              <Image 
                source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762757121/Group_6_esygkj.png' }}
                style={styles.statIcon}
              />
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>UNIT SOLD</Text>
              <Text style={styles.statNumber}>102</Text>
              <Text style={styles.statMonth}>+3</Text>
              <Text style={styles.statMonth}>This month</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statLabel}>MATCHING LEADS</Text>
              <Text style={styles.statNumber}>08</Text>
              <Text style={styles.statMonth}>+3</Text>
              <Text style={styles.statMonth}>This month</Text>
            </View>
          </View>
{showMore && (

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>MY TEAM</Text>
              <Text style={styles.statNumber}>16</Text>
              <Text style={styles.statMonth}>This month</Text>
            </View>
          </View>
)}
         <TouchableOpacity
            style={styles.moreButton}
            onPress={() => setShowMore(!showMore)}
            activeOpacity={0.7}
          >
            <Text style={styles.moreButtonText}>
              {showMore ? "Less" : "More"}
            </Text>
            <MaterialIcons
              name={showMore ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={18}
              color="#4A5568"
            />
          </TouchableOpacity>
          </View>

        {/* Skyline Residences */}
        <View style={styles.projectSection}>
          <View style={styles.projectHeader}>
            <Text style={styles.projectTitle}>Skyline Residences</Text>
            <TouchableOpacity>
              <Text style={styles.arrowRight}>›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.projectBody}>
            <View style={styles.projectLeft}>
              <Text style={styles.projectLabel}>Address: <Text style={styles.projectValue}>Andheri East, Post Office,</Text></Text>
               <Text style={styles.projectLabel}>Phone: <Text style={styles.projectValue}>022-26703985</Text></Text>
              <Text style={styles.projectLabel}>Pincode: <Text style={styles.projectValue}>400093</Text></Text>
              
              <View style={styles.container}>
      <View style={styles.row}>
        {/* Left column */}
        <View style={styles.leftColumn}>
          <Text style={styles.label}>Type</Text>
          <Text style={styles.value}>Residential{"\n"}Flat</Text>
        </View>

        {/* Divider */}
        <View style={styles.verticalLine} />

        {/* Right columns */}
        <View style={styles.rightSection}>
          <View style={styles.rightBlock}>
            <Text style={styles.label}>Total Wings</Text>
            <Text style={styles.value}>04</Text>
          </View>
          <View style={styles.rightBlock}>
            <Text style={styles.label}>Unit types</Text>
            <Text style={styles.value}>2BHK, 3BHK, 4BHK</Text>
          </View>
        </View>
      </View>

      {/* Horizontal Divider */}
      <View style={styles.horizontalLine} />

      {/* Bottom Info */}
      <Text style={styles.infoText}>
        Total Units available. <Text style={styles.bold}>50</Text>
      </Text>
      <Text style={styles.infoText}>
        Total Subscribed Brokers. <Text style={styles.bold}>15</Text>
      </Text>
    </View>
              
              <View style={styles.ratingRow}>
                <Text style={styles.ratingLabel}>Project rating out of 5</Text>
                <View style={styles.ratingValue}>
                  <Text style={styles.ratingNumber}>4.3</Text>
                  <Text style={styles.ratingStar}>⭐</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Projects */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Projects</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400' }}
              style={styles.cardImage}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Sky Dandelions</Text>
              <Text style={styles.cardSubtitle}>Apartment</Text>
              <Text style={styles.cardPrice}>₹ 3.5cr</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400' }}
              style={styles.cardImage}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Luxury Villa</Text>
              <Text style={styles.cardSubtitle}>Villa</Text>
              <Text style={styles.cardPrice}>₹ 5.2cr</Text>
            </View>
          </View>
        </ScrollView>

        {/* Trending Projects */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Projects</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all ›</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400' }}
              style={styles.cardImage}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Sky Dandelions</Text>
              <Text style={styles.cardSubtitle}>Apartment</Text>
              <Text style={styles.cardPrice}>₹ 3.5cr</Text>
            </View>
          </View>

          <View style={styles.projectCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400' }}
              style={styles.cardImage}
            />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Modern Estate</Text>
              <Text style={styles.cardSubtitle}>Villa</Text>
              <Text style={styles.cardPrice}>₹ 4.8cr</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomSpace} />
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={{uri:'https://res.cloudinary.com/dquki4xol/image/upload/v1762755888/ic_sharp-dashboard_ythesa.png' }} 
            style={styles.navIconImage}
          />
          <Text style={styles.navLabelActive}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762755888/carbon_media-library-filled_islmia.png' }} 
            style={styles.navIconImage}
          />
          <Text style={styles.navLabel}>Social Media </Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.navItem}>
          <Image 
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762755888/iconoir_plus-circle-solid_bp9xwh.png' }} 
            style={styles.navIconImage}
          />
          <Text style={styles.navLabel}>Create</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762755888/solar_tag-bold_mnaolv.png' }} 
            style={styles.navIconImage}
          />
          <Text style={styles.navLabel}>Tags </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Image 
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762755888/flowbite_users-solid_a9myku.png' }} 
            style={styles.navIconImage}
          />
          <Text style={styles.navLabel}>Brokers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 45,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridIcon: {
    marginRight: 6,
  },
  gridRow: {
    flexDirection: 'row',
  },
  gridDot: {
    width: 3,
    height: 3,
    backgroundColor: '#5B21B6',
    margin: 0.5,
    borderRadius: 1.5,
  },
  brandText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  headerIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
    row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftColumn: {
    flex: 1.1,
  },
  rightSection: {
    flex: 2,
    marginLeft: 12,
  },
  rightBlock: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: "#5A5A5A",
    textDecorationLine: "underline",
    fontWeight: "600",
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000",
    lineHeight: 18,
  },
  verticalLine: {
    width: 1,
    backgroundColor: "#B0B0B0",
    marginHorizontal: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#B0B0B0",
    marginVertical: 10,
  },
  infoText: {
    fontSize: 13,
    color: "#333",
    marginBottom: 6,
  },
  bold: {
    fontWeight: "800",
    color: "#000",
  },
  searchCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#000000',
    position: 'absolute',
    top: 2,
    left: 2,
  },
  searchHandle: {
    width: 6,
    height: 2,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 3,
    right: 3,
    transform: [{ rotate: '45deg' }],
    borderRadius: 1,
  },
  bellTop: {
    width: 4,
    height: 2,
    backgroundColor: '#000000',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    position: 'absolute',
    top: 2,
    left: 10,
  },
  bellBody: {
    width: 14,
    height: 14,
    backgroundColor: '#000000',
    borderRadius: 7,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    position: 'absolute',
    top: 4,
    left: 5,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  content: {
    flex: 1,
  },
  statsSection: {
    padding: 12,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    position: 'relative',
    minHeight: 90,
  },
  statBlue: {
    backgroundColor: '#EFF6FF',
  },
  statRed: {
    backgroundColor: '#FEF2F2',
  },
  statPurple: {
    backgroundColor: '#F5F3FF',
  },
  statGreen: {
    backgroundColor: '#F0FDF4',
  },
  statBoxPlaceholder: {
    flex: 1,
  },
  statContent: {
    flex: 1,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#666666',
    letterSpacing: 0.3,
    marginBottom: 6,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  statMonth: {
    fontSize: 11,
    color: '#10B981',
    fontWeight: '500',
  },
  statIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  statIcon: {
    width: 32,
    height: 32,
    position: 'absolute',
    top: 12,
    right: 12,
  },
  moreButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: 90,
  },
   moreButton1: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minHeight: 90,
  },
  moreText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B5563',
  },
  moreIcon: {
    fontSize: 14,
    color: '#4B5563',
  },
  iconBlue: {
    backgroundColor: '#DBEAFE',
  },
  iconRed: {
    backgroundColor: '#FEE2E2',
  },
  iconPurple: {
    backgroundColor: '#EDE9FE',
  },
  iconGreen: {
    backgroundColor: '#D1FAE5',
  },
  statIconText: {
    fontSize: 16,
  },
  minusIcon: {
    width: 12,
    height: 2,
    backgroundColor: '#EF4444',
    borderRadius: 1,
  },
  checkIcon: {
    fontSize: 18,
    fontWeight: '700',
    color: '#10B981',
  },
  projectSection: {
    backgroundColor: '#d1e2f0ff',
    margin: 12,
    marginTop: 0,
    borderRadius: 8,
    padding: 14,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  arrowRight: {
    fontSize: 28,
    color: '#CCCCCC',
    fontWeight: '300',
  },
  projectBody: {
    flexDirection: 'row',
    gap: 12,
  },
  projectLeft: {
    flex: 1,
  },
  projectLabel: {
    fontSize: 12,
    color: '#000000ff',
    marginBottom: 3,
  },
  projectValue: {
    fontSize: 12,
    color: '#939393ff',
    fontWeight: '500',
  },
  projectSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginTop: 10,
    marginBottom: 8,
  },
  unitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  unitBox: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  unitNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  unitLabel: {
    fontSize: 10,
    color: '#666666',
  },
  unitTypes: {
    fontSize: 12,
    color: '#000000',
  },
  // moreButton: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingVertical:0.015,
  //   gap:0.015,
  //   marginTop: 0.01,
  // },
  moreButtonText: {
    fontSize: 13,
    color: "#4A5568",
    fontWeight: "500",
    fontFamily: "PoppinsMedium",
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingLabel: {
    fontSize: 11,
    color: '#666666',
  },
  ratingValue: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  ratingStar: {
    fontSize: 14,
  },
  projectRight: {
    alignItems: 'center',
  },
  towerLabel: {
    fontSize: 11,
    color: '#666666',
    marginBottom: 6,
  },
  towerImage: {
    width: 100,
    height: 140,
    borderRadius: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 12,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  seeAll: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '500',
  },
  horizontalScroll: {
    paddingLeft: 12,
    marginBottom: 12,
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 190,
    marginRight: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardInfo: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 11,
    color: '#666666',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
  },
  bottomSpace: {
    height: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#e8e5e5ff',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  navItemCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
  },
  navIconImage: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  dashGrid: {
    flexDirection: 'column',
    gap: 2,
  },
  dashSquare: {
    width: 6,
    height: 6,
    backgroundColor: '#2563EB',
    borderRadius: 1,
  },
  navIcon: {
    width: 24,
    height: 24,
    position: 'relative',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  folderTop: {
    width: 18,
    height: 4,
    backgroundColor: '#666666',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    position: 'absolute',
    top: 4,
  },
  folderBottom: {
    width: 20,
    height: 12,
    backgroundColor: '#666666',
    borderRadius: 2,
    position: 'absolute',
    bottom: 4,
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  addIcon: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  heartShape: {
    width: 18,
    height: 16,
    backgroundColor: '#666666',
    position: 'absolute',
    top: 6,
    transform: [{ rotate: '45deg' }],
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  personCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#666666',
    position: 'absolute',
    top: 2,
  },
  personBody: {
    width: 16,
    height: 10,
    backgroundColor: '#666666',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: 'absolute',
    bottom: 2,
  },
  navLabelActive: {
    fontSize: 10,
    color: '#2563EB',
    fontWeight: '600',
  },
  navLabel: {
    fontSize: 10,
    color: '#666666',
    fontWeight: '500',
  },
});