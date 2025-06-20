import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS } from '../constant';

const ClientHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Client Dashboard</Text>
      <Text style={styles.headerSubtitle}>Welcome back!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: FONTS.SIZES.XLARGE,
    color: '#1f2937',
    marginBottom: 8,
    fontFamily: 'ClashDisplay-Bold',
    letterSpacing: 1.2,
  },
  headerSubtitle: {
    fontSize: FONTS.SIZES.MEDIUM,
    fontFamily: FONTS.LotaGrotesque.Regular,
    color: '#6b7280',
  },
});

export default ClientHeader;
