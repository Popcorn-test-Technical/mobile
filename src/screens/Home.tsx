import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import {
  faUser,
  faPhone,
  faAward,
  faCalendar,
  faQrcode,
} from '@fortawesome/free-solid-svg-icons';
import ClientHeader from '../components/ClientHeader';
import InfoCard from '../components/InfoCard';
import { useGetClientByIdQuery } from '../store/client/clientsApi';
import IconButton from '../components/UI/Button';
import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { ROUTES } from '../types/enums';
import { INavigation } from '../types/interfaces';
import Toast from 'react-native-toast-message';

type HomeNavigationProps = NavigationProp<INavigation, 'Home'>;
type HomeRouteProps = RouteProp<INavigation, 'Home'>;

const Home = () => {
  const { navigate } = useNavigation<HomeNavigationProps>();
  const { params } = useRoute<HomeRouteProps>();

  useFocusEffect(
    useCallback(() => {
      if (params?.successMessage && params?.successMessage != '') {
        Toast.show({
          type: 'success',
          text1: params?.successMessage,
        });
      }
    }, [params?.successMessage]),
  );

  const client_id = '1';
  const { data: client } = useGetClientByIdQuery(client_id);

  if (!client) {
    return <Text>Loading...</Text>;
  }

  const handleNavigate = () => {
    navigate(ROUTES.ADD_POINTS, { client_id });
  };

  const QRimage = (
    <Image
      source={require('../assets/images/qr-code.png')}
      style={{ width: 24, height: 24, tintColor: 'white', marginRight: 10 }}
      resizeMode="contain"
    />
  );
  const NFCimage = (
    <Image
      source={require('../assets/images/nfc.png')}
      style={{ width: 24, height: 24, tintColor: 'white', marginRight: 10 }}
      resizeMode="contain"
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ClientHeader />

        <View style={styles.infoSection}>
          <InfoCard
            icon={faUser}
            label="Full Name"
            value={client.name}
            iconColor="#10b981"
          />

          <InfoCard
            icon={faPhone}
            label="Phone Number"
            value={client.phone_number}
            iconColor="#3b82f6"
          />

          <InfoCard
            icon={faAward}
            label="Total Points"
            value={client.total_points.toLocaleString()}
            iconColor="#f59e0b"
          />

          <InfoCard
            icon={faCalendar}
            label="Member Since"
            value={client.createdAt}
            iconColor="#8b5cf6"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <IconButton title="Qr Code" Icon={QRimage} onPress={handleNavigate} />
          <IconButton title="NFC" Icon={NFCimage} onPress={handleNavigate} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  infoSection: {
    marginBottom: 30,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    gap: 10,
  },
});

export default Home;
