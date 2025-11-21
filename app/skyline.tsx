import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Linking,
} from 'react-native';

export default function PropertyDetailScreen() {
  const navigation = useNavigation();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    'https://res.cloudinary.com/dquki4xol/image/upload/v1763011191/image_1698737936_sewB1Fywe5P1lN9AAhyp1Kzoom2JZjkqUbbMyrEr_zvytey.webp',
    'https://res.cloudinary.com/dquki4xol/image/upload/v1763011192/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%A7%D9%84%D9%81%D9%8A%D9%84%D8%A7-2-1_jfijjl.webp',
  ];

  const units = [
    {
      id: 1,
      series: '101',
      direction: 'North-East',
      type: '1BHK',
      area: '400SQFT',
      price: '45 lakh',
      status: 'Available',
      statusColor: 'green',
      hasFloorPlan: true,
    },
    {
      id: 2,
      series: '102',
      direction: 'North-East',
      type: '1BHK',
      area: '400SQFT',
      price: '45 lakh',
      status: 'Few available',
      statusColor: 'red',
      hasFloorPlan: false,
    },
  ];
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handleWebsitePress = () => {
    Linking.openURL('https://www.website.com');
  };
  const [selectedTower, setSelectedTower] = useState('A');
  const towers = [
    { id: 'A', label: 'A Tower', image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763359855/fluent-color_building-multiple-20_a5kamb.png' },
    { id: 'B', label: 'B Tower', image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763359855/fluent-color_building-multiple-20_a5kamb.png' },
    { id: 'C', label: 'C Tower', image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763359855/fluent-color_building-multiple-20_a5kamb.png' },
    { id: 'D', label: 'D Tower', image: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763359855/fluent-color_building-multiple-20_a5kamb.png' },
  ];
  const towerData = {
    A: {
      reraId: 'MH20394567098',
      totalFloors: '50',
      totalUnits: '20',
      launchDate: '02 March, 2023',
      possessionDate: '10 June, 2025',
    },
    B: {
      reraId: 'MH20394567099',
      totalFloors: '45',
      totalUnits: '18',
      launchDate: '15 April, 2023',
      possessionDate: '20 July, 2025',
    },
    C: {
      reraId: 'MH20394567100',
      totalFloors: '40',
      totalUnits: '16',
      launchDate: '10 May, 2023',
      possessionDate: '30 August, 2025',
    },
    D: {
      reraId: 'MH20394567101',
      totalFloors: '48',
      totalUnits: '19',
      launchDate: '05 June, 2023',
      possessionDate: '15 September, 2025',
    },
  };
  const currentData = towerData[selectedTower];
  const handleReraClick = () => {
    console.log('RERA ID clicked:', currentData.reraId);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E7EB" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}
        onPress={() => navigation.goBack()}
          >
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Skyline Residence</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.carouselContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: images[currentImageIndex] }}
              style={styles.propertyImage}
            />

            <View style={styles.captionOverlay}>
              <Text style={styles.captionText}>
                Feeling on top of the world in my new apartment.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.arrowButton, styles.arrowLeft]}
              onPress={handlePrevImage}
              activeOpacity={0.8}
            >
              <Text style={styles.arrowIcon}>‹</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.arrowButton, styles.arrowRight]}
              onPress={handleNextImage}
              activeOpacity={0.8}
            >
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.addressCard}>
          <View style={styles.addressContent}>
            <Text style={styles.addressLabel}>Address</Text>
            <Text style={styles.addressTitle}>Andheri Head Post Office</Text>
            <Text style={styles.addressDetails}>
              Andheri Head Post Office, Andheri, Mumbai, Maharashtra, India, Pin Code: 400053
            </Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763011191/fluent-color_location-ripple-16_mskatp.png' }}
            style={styles.locationIconImage}
          />
        </View>
        <View style={styles.addressCard}>
          <View style={styles.addressContent}>
            <Text style={styles.addressLabel}>Contact</Text>
            <Text style={styles.addressTitle}>022-26703985</Text>
            <Text style={styles.addressDetails}>Email: skylineresidence@gmail.com</Text>
          </View>
            
     <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763011192/streamline-plump-color_contact-phonebook_skgqad.png' }}
            style={styles.locationIconImage}
          />
        </View>
        <View style={styles.addressCard}>
          <View style={styles.addressContent}>
            <Text style={styles.addressTitle1}>Download Kit</Text>
          </View>
    
     <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763011191/material-symbols_folder-open-rounded_hymhmq.png' }}
            style={styles.locationIconImage}
          />
        </View>
        <View style={styles.addressCard1}>
          <View style={styles.addressContent1}>
            <Text style={styles.addressTitle2}>Limited time New Year{"\n"} offer is coming back! </Text>
          </View>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763011191/bxs_offer_rlhu5g.png' }}
            style={styles.locationIconImage}
          />
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

              <View style={styles.typeContainer}>
                <View style={styles.row}>
                  <View style={styles.leftColumn}>
                    <Text style={styles.label}>Type</Text>
                    <Text style={styles.value}>Residential{"\n"}Flat</Text>
                  </View>
                  <View style={styles.verticalLine} />
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

                <View style={styles.horizontalLine} />

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

          <View style={styles.websiteSection}>
            <Text style={styles.websiteLabel}>Website:</Text>
            <TouchableOpacity onPress={handleWebsitePress}>
              <Text style={styles.websiteLink}>www.website.com</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.overviewSection}>
            <Text style={styles.sectionTitle}>Project Overview And Highlights</Text>
            <View style={styles.descriptionBox}>
              <Text style={styles.descriptionText}>
                Skyline Residences is a luxury residential project featuring 50 premium units across two towers with stunning city views and modern amenities.
              </Text>
            </View>
          </View>
        </View>
<View style={styles.container}>
      {/* Wings Section */}
      <Text style={styles.wingsTitle}>Wings</Text>
      <View style={styles.towersRow}>
        {towers.map((tower) => (
          <TouchableOpacity
            key={tower.id}
            style={[
              styles.towerButton,
              selectedTower === tower.id && styles.towerButtonActive,
            ]}
            onPress={() => setSelectedTower(tower.id)}
            activeOpacity={0.7}
          >
            <Image
              source={{ uri: tower.image }}
              style={styles.towerImage}
            />
            <Text style={styles.towerLabel}>{tower.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* RERA Details Card */}
      <View style={styles.reraCard}>
        <View style={styles.reraHeader}>
          <Text style={styles.reraLabel}>RERA ID:</Text>
          <Text style={styles.reraId}>{currentData.reraId}</Text>
          <TouchableOpacity onPress={handleReraClick}>
            <Text style={styles.clickHere}>Click here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.detailsGrid}>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Total Floors</Text>
            <Text style={styles.detailValue}>{currentData.totalFloors}</Text>
          </View>

          <View style={styles.dividerVertical} />

          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Total Units</Text>
            <Text style={styles.detailValue}>{currentData.totalUnits}</Text>
          </View>
        </View>

        <View style={styles.dividerHorizontal} />

        <View style={styles.detailsGrid}>
          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Launch date</Text>
            <Text style={styles.detailValue}>{currentData.launchDate}</Text>
          </View>

          <View style={styles.dividerVertical} />

          <View style={styles.detailColumn}>
            <Text style={styles.detailLabel}>Possession date</Text>
            <Text style={styles.detailValue}>{currentData.possessionDate}</Text>
          </View>
        </View>
      </View>
    </View>

        {/* Units Header */}
        <View style={styles.unitsHeader}>
          <Text style={styles.unitsTitle}>Units</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Units List */}
        {units.map((unit) => (
          <View key={unit.id} style={styles.unitCard}>
            <View style={styles.unitHeader}>
              <View>
                <Text style={styles.unitSeries}>Unit Series - {unit.series}</Text>
                <Text style={styles.unitDirection}>
                  Direction Facing: {unit.direction}
                </Text>
              </View>

              <View style={styles.statusContainer}>
                <Text style={styles.statusLabel}>status:</Text>
                <View
                  style={[
                    styles.statusDropdown,
                    unit.statusColor === 'green'
                      ? styles.statusGreen
                      : styles.statusRed,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusText,
                      unit.statusColor === 'green'
                        ? styles.statusTextGreen
                        : styles.statusTextRed,
                    ]}
                  >
                    {unit.status}
                  </Text>
                  <Text
                    style={[
                      styles.dropdownIcon,
                      unit.statusColor === 'green'
                        ? styles.statusTextGreen
                        : styles.statusTextRed,
                    ]}
                  >
                    ▼
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.unitDetails}>
              <View style={styles.detailsLeft}>
                <View style={styles.typeArea}>
                  <Text style={styles.detailText}>Type - {unit.type}</Text>
                  <Text style={styles.detailText}>Area - {unit.area}</Text>
                  <TouchableOpacity style={styles.notesButton}>
                    <Text style={styles.notesText}>Notes</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailsCenter}>
                <Text style={styles.priceLabel}>Price</Text>
                <Text style={styles.priceValue}>{unit.price}</Text>
                <TouchableOpacity style={styles.notesButton}>
                  <Text style={styles.notesText}>Notes</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.floorPlanContainer}>
                {unit.hasFloorPlan ? (
                  <View style={styles.floorPlanImageBox}>
                    <Image
                      source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1763188843/Group_1550_erf6oy.png' }}
                      style={styles.floorPlanImage}
                    />
                   
                  </View>
                ) : (
                  <View style={styles.floorPlanIcon}>
                    <View style={styles.planIconSquare} />
                    <View style={styles.planIconLine} />
                  </View>
                )}
              </View>
            </View>
          </View>
        ))}

        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E7EB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
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
    fontWeight: '700',
    color: '#000000',
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
  carouselContainer: {
    padding: 16,
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#2563EB',
  },
  propertyImage: {
    width: '100%',
    height: 250,
  },
  captionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 16,
  },
  captionText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  arrowButton: {
    position: 'absolute',
    top: '50%',
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -18,
  },
  arrowLeft: {
    left: 12,
  },
  arrowRight: {
    right: 12,
  },
  arrowIcon: {
    fontSize: 28,
    color: '#000000',
    fontWeight: '300',
  },
  addressCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addressContent: {
    flex: 1,
    paddingRight: 16,
  },
  addressLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 6,
    fontWeight: '500',
  },
  addressTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  addressTitle1: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    marginTop: 15,
  },
  addressTitle2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#234F68',
    marginTop: 15,
  },
  addressCard1: {
    flexDirection: 'row',
    backgroundColor: 'rgba(139, 200, 63, 0.25)',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  addressContent1: {
    flex: 1,
    paddingRight: 16,
  },
  addressDetails: {
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
  },
  locationIconImage: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
  projectSection: {
    backgroundColor: '#D1E2F0',
    margin: 16,
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
  projectBody: {
    gap: 12,
  },
  projectLeft: {
    flex: 1,
  },
  projectLabel: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 3,
  },
  projectValue: {
    fontSize: 12,
    color: '#939393',
    fontWeight: '500',
  },
  typeContainer: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
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
    color: '#5A5A5A',
    textDecorationLine: 'underline',
    fontWeight: '600',
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    fontWeight: '800',
    color: '#000',
    lineHeight: 18,
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#B0B0B0',
    marginHorizontal: 10,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#B0B0B0',
    marginVertical: 10,
  },
  infoText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 6,
  },
  bold: {
    fontWeight: '800',
    color: '#000',
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
  websiteSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
    gap: 8,
  },
  websiteLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
  },
  websiteLink: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2563EB',
    textDecorationLine: 'underline',
  },
  overviewSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  descriptionBox: {
    backgroundColor: '#E2E7F6',
    borderRadius: 12,
    padding: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: '#9CA3AF',
    lineHeight: 20,
  },
  reraCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reraHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  reraLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000000',
    marginRight: 8,
  },
  reraId: {
    fontSize: 15,
    fontWeight: '700',
    color: '#5B21B6',
    marginRight: 8,
  },
  clickHere: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
    textDecorationLine: 'underline',
  },
  detailsGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },

  towerButton: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  towerButtonActive: {
    borderColor: '#5B21B6',
    borderWidth: 3,
  },
  detailColumn: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 8,
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  dividerVertical: {
    width: 1,
    height: 50,
    backgroundColor: '#727171',
    marginHorizontal: 20,
  },
  dividerHorizontal: {
    height: 1,
    backgroundColor: '#D1D5DB',
  },
  unitsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  unitsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  unitCard: {
    backgroundColor: '#E8E5F5',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  unitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  unitSeries: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  unitDirection: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5B21B6',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
   wingsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  towersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  
  statusLabel: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  statusDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1.5,
    gap: 8,
  },
  statusGreen: {
    backgroundColor: '#D1FAE5',
    borderColor: '#10B981',
  },
  statusRed: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusTextGreen: {
    color: '#10B981',
  },
  statusTextRed: {
    color: '#EF4444',
  },
  dropdownIcon: {
    fontSize: 10,
  },
  unitDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  detailsLeft: {
    flex: 1,
  },
  typeArea: {
    gap: 8,
  },
  detailText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
   towerImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  towerLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000',
  },
  notesButton: {
    backgroundColor: '#D1D9F0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  notesText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#5B21B6',
  },
  divider: {
    width: 1,
    height: 100,
    backgroundColor: '#9CA3AF',
  },
  detailsCenter: {
    flex: 1,
  },
  priceLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  floorPlanContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  floorPlanImageBox: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#9CA3AF',
    position: 'relative',
    overflow: 'hidden',
  },
  floorPlanImage: {
    width: '100%',
    height: '100%',
  },
  
  floorPlanIcon: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  planIconSquare: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: '#1E3A8A',
    borderRadius: 4,
  },
  planIconLine: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    width: 50,
    height: 3,
    backgroundColor: '#1E3A8A',
    transform: [{ rotate: '-45deg' }],
  },
  bottomSpace: {
    height: 30,
  },
});