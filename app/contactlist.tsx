import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function ContactListScreen() {
  const contacts = [
    { id: 1, name: "Sales Manager", phone: "+91 8910291422" },
    { id: 2, name: "Sales Executive", phone: "+91 8910291422" },
    { id: 3, name: "Sales Executive", phone: "+91 8910291422" },
    { id: 4, name: "Sales Executive", phone: "+91 8910291422" },
  ];

  return (
    <ImageBackground
      source={{uri:"https://res.cloudinary.com/dquki4xol/image/upload/v1763365103/Ellipse_2_z88s4z.png"}}
      style={styles.bg}
    >
      <View style={styles.container}>

        <Text style={styles.title}>Contact List</Text>

        <View style={styles.card}>
          <ScrollView>
            {contacts.map((item) => (
              <View key={item.id} style={styles.row}>
                
                <Image
                  source={{uri:"https://res.cloudinary.com/dquki4xol/image/upload/v1763363448/solar_user-bold_clb6nz.png"}}
                  style={styles.userIcon}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.phone}>{item.phone}</Text>
                </View>

                <TouchableOpacity style={styles.deleteBtn}>
                  <Image
                    source={{uri: "https://res.cloudinary.com/dquki4xol/image/upload/v1762841595/mdi_delete_y1wzlb.png"}} 
                    style={styles.deleteIcon}
                  />
                </TouchableOpacity>

              </View>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    padding: 20,
    justifyContent: "center",
  },

  container: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#283468",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#E8F3FF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
  },

  userIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
    tintColor: "#1C2B4A",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C2B4A",
  },

  phone: {
    fontSize: 13,
    color: "#666",
  },

  deleteBtn: {
    backgroundColor: "#FF4B4B",
    padding: 10,
    borderRadius: 12,
  },

  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: "white",
  },

  addBtn: {
    backgroundColor: "#0A72FF",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  addText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
