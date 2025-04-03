//src\screens\QRCodeScannerScreen.js
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useTheme } from '../contexts/ThemeContext';
import { useFontSettings } from '../contexts/FontContext';
import CustomAlert from '../components/CustomAlert';

export default function QRCodeScanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const theme = useTheme();
  const { fontSize, fontFamily } = useFontSettings();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <Text style={[styles.permissionText, { color: theme.colors.text.primary, fontSize: fontSize.md, fontFamily }]}>  
          Precisamos de permissão para usar a câmera
        </Text>
        <Button
          onPress={requestPermission}
          title="Permitir Câmera"
          color={theme.colors.primary}
        />
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
    setAlertVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>  
      <CameraView
        style={styles.camera}
        facing="back"
        barCodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>  
          <Text style={[styles.overlayText, { fontSize: fontSize.md, fontFamily, color: theme.colors.text.primary }]}>  
            Posicione o QR Code dentro da área
          </Text>
        </View>
      </CameraView>
      
      <CustomAlert
        visible={alertVisible}
        title="QR Code Escaneado"
        message={`Dados: ${scannedData}`}
        onClose={() => {
          setAlertVisible(false);
          setScanned(false);
        }}
        onConfirm={() => {
          setAlertVisible(false);
          setScanned(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontWeight: 'bold',
  },
  permissionText: {
    textAlign: 'center',
    marginBottom: 20,
  },
});