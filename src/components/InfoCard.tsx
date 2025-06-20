import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FONTS } from '../constant';

interface InfoCardProps {
  icon: any;
  label: string;
  value: string;
  iconColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  label,
  value,
  iconColor = '#6366f1',
}) => (
  <View style={styles.infoCard}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} size={24} color={'white'} />
    </View>
    <View style={styles.infoContent}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    backgroundColor: 'black',
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
    fontWeight: '500',
    fontFamily: FONTS.LotaGrotesque.Regular,
  },
  infoValue: {
    fontFamily: FONTS.ClashDisplay.Bold,
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
});

export default InfoCard;
