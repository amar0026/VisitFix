import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  FlatList,
} from 'react-native';

export default function DownloadFilesModal() {
  const [visible, setVisible] = useState(true);
  const [files, setFiles] = useState([
    { id: 1, name: 'Skyline.pdf', type: 'pdf', icon: '📄' },
    { id: 2, name: 'SkylineResidance.pdf', type: 'pdf', icon: '📄' },
    { id: 3, name: 'nightview.jpg', type: 'image', icon: '🖼️' },
  ]);
  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };
  const handleAdd = () => {
    console.log('Add file clicked');
  };
  const getFileIcon = (type) => {
    if (type === 'pdf') {
      return (
        <View style={styles.pdfIcon}>
          <View style={styles.pdfIconInner}>
            <Text style={styles.pdfText}>PDF</Text>
          </View>
        </View>
      );
      
      return (
        <View style={styles.pdfIcon}>
          <View style={styles.pdfIconInner}>
            <Text style={styles.pdfText}>PDF</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.imageIcon}>
          <View style={styles.imageIconInner}>
            <Text style={styles.imageIconText}>🖼️</Text>
          </View>
        </View>
      );
    } 
  };
  const renderFile = ({item}) => (
    <View style={styles.fileRow}>
      {getFileIcon(item.type)}
      <Text style={styles.fileName}>{item.name}</Text>
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: 'https://res.cloudinary.com/dquki4xol/image/upload/v1762841595/mdi_delete_y1wzlb.png' }}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Download Files</Text>

          <View style={styles.filesList}>
            <FlatList
              data={files}
              renderItem={renderFile}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={false}
            />
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAdd}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#f9f9f9ff',
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 450,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 24,
  },
  filesList: {
    marginBottom: 24,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  pdfIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  pdfIconInner: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pdfText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  imageIconInner: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIconText: {
    fontSize: 16,
  },
  fileName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EF4444',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF4444',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#2563EB',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});